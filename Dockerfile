# https://testdriven.io/blog/dockerizing-django-with-postgres-gunicorn-and-nginx
FROM python:3.9.6-alpine

ENV APP_HOME=/home/app
ENV APP_STATIC=/var/www

RUN mkdir -p $APP_HOME
RUN mkdir -p $APP_STATIC

COPY ./application $APP_HOME
WORKDIR $APP_HOME

# install dependencies
RUN apk update && apk add libressl-dev musl-dev libffi-dev build-base postgresql-dev gcc python3-dev musl-dev bash npm
RUN pip install -r requirements.txt

# install and build web app, then collect statics for DRFW and admin site
RUN npm install --prefix web && npm run build --prefix web
RUN python manage.py collectstatic --no-input

# copy static files so nginx can serve it
RUN cp -r $APP_HOME/web/build $APP_STATIC/metr

# run entrypoint.sh
ENTRYPOINT ["./entrypoint.sh"]