# https://testdriven.io/blog/dockerizing-django-with-postgres-gunicorn-and-nginx
FROM python:3.9.6-alpine

ENV APP_HOME=/home/app
ENV APP_SERVER_HOME=/home/app/server
ENV APP_APPLICATION_HOME=/home/app/application

# create directory for the app user
RUN mkdir -p $APP_HOME

# create the app user
RUN addgroup -S app && adduser -S app -G app

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV DJANGO_SETTINGS_MODULE server.settings

RUN rm -r $APP_SERVER_HOME; exit 0
RUN mkdir $APP_SERVER_HOME
RUN mkdir $APP_SERVER_HOME/staticfiles

RUN rm -r $APP_APPLICATION_HOME; exit 0
RUN mkdir $APP_APPLICATION_HOME

COPY ./server $APP_SERVER_HOME
COPY ./application $APP_APPLICATION_HOME

# install dependencies
RUN apk update && apk add libressl-dev musl-dev libffi-dev build-base postgresql-dev gcc python3-dev musl-dev bash npm
RUN pip install --upgrade pip && pip install -r $APP_SERVER_HOME/requirements.txt

# prepare entrypoint.sh
RUN sed -i 's/\r$//g' $APP_SERVER_HOME/entrypoint.sh
RUN chmod +x $APP_SERVER_HOME/entrypoint.sh

# install and build project web application
RUN npm install --prefix $APP_APPLICATION_HOME && npm run build --prefix $APP_APPLICATION_HOME

# chown all the files to the app user
RUN chown -R app:app $APP_SERVER_HOME && chown -R app:app $APP_APPLICATION_HOME/build

# change to the app user
USER app

WORKDIR $APP_SERVER_HOME

RUN python manage.py collectstatic --no-input

# run entrypoint.sh
ENTRYPOINT ["/home/app/server/entrypoint.sh"]