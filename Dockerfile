# https://testdriven.io/blog/dockerizing-django-with-postgres-gunicorn-and-nginx
FROM python:3.9.6-alpine

ENV APP_HOME=/home/app

# create directory for the app user
RUN mkdir -p $APP_HOME

# create the app user
RUN addgroup -S app && adduser -S app -G app

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV DJANGO_SETTINGS_MODULE server.settings

COPY ./application $APP_HOME

# install dependencies
RUN apk update && apk add libressl-dev musl-dev libffi-dev build-base postgresql-dev gcc python3-dev musl-dev bash npm
RUN pip install --upgrade pip && pip install -r $APP_HOME/requirements.txt

# prepare entrypoint.sh
RUN sed -i 's/\r$//g' $APP_HOME/entrypoint.sh
RUN chmod +x $APP_HOME/entrypoint.sh

# install and build web app, then collect statics for DRFW and admin site
RUN npm install --prefix $APP_HOME/web && npm run build --prefix $APP_HOME/web
RUN python manage.py collectstatic --no-input

# chown all the files to the app user
RUN chown -R app:app $APP_HOME

# change to the app user
USER app

WORKDIR $APP_HOME

# run entrypoint.sh
ENTRYPOINT ["/home/app/entrypoint.sh"]