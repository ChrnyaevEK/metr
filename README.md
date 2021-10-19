# Metr

Welcome to the **metr** application! This app allow students to rate lectures online and teachers to react to those rates to reach the best lecture quality ever!


## Development 

### Install

Project is compilable with `python 3`.

Run `pip install -r requirements.txt` to install required dependencies.

Install `redis` database. Make sure it runs on `localhost:6379`. Redis is used with `django channels`.

### Server

To run **development server** use standard django command
`python manage.py runserver`, which will create development database locally with default settings.

Apply all migrations with `python manage.py migrate`. 

Collect static files with `python manage.py collectstatic`.


Create super user with `python manage.py createsuperuser` using any username and password.

### Web application

**Development of the web application** is broken into two parts: `public distribution`, witch handles student's application, and `admin distribution`, witch handles administration part. Both use common elements and same Rest API. To run any distribution use `npm run start-public-distribution` or `npm run start-admin-distribution`.
