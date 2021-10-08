# https://testdriven.io/blog/dockerizing-django-with-postgres-gunicorn-and-nginx
FROM python:3.9.6-alpine

# create directory for the app user
RUN mkdir -p /home/app

# create the app user
RUN addgroup -S app && adduser -S app -G app

# create the appropriate directories
ENV HOME=/home/app
ENV APP_HOME=/home/app/server
RUN mkdir $APP_HOME
WORKDIR $APP_HOME

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install dependencies
RUN apk update && apk add --no-cache libressl-dev musl-dev libffi-dev build-base postgresql-dev gcc python3-dev musl-dev
RUN pip install --upgrade pip
COPY ./requirements.txt $APP_HOME
RUN pip install -r $APP_HOME/requirements.txt

# copy entrypoint.sh
COPY entrypoint.sh $APP_HOME/entrypoint.sh
RUN sed -i 's/\r$//g' $APP_HOME/entrypoint.sh
RUN chmod +x $APP_HOME/entrypoint.sh

# copy project
COPY . $APP_HOME

# chown all the files to the app user
RUN chown -R app:app $APP_HOME

# change to the app user
USER app

# run entrypoint.sh
ENTRYPOINT ["/home/app/server/entrypoint.sh"]