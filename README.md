# Metr

Welcome to the **metr** application! This app allow students to rate lectures online and teachers to react to those
rates to reach the best lecture quality ever!

## Development

### Server

Project is compilable with `python 3`.

Run `pip install -r requirements.txt` to install required dependencies.

Install `redis` database. Make sure it runs on `localhost:6379`. Redis is used with `django channels`.

To run **development server** use standard django command
`python manage.py runserver`, which will create development database locally with default settings.

Apply all migrations with `python manage.py migrate`.

Collect static files with `python manage.py collectstatic`. Make sure that you run this after `building` web
application.

Create super user with `python manage.py createsuperuser` using any username and password.

### Web application

To install project dependencies run `npm install` from application root directory.

**Development of the web application** is logically broken into two parts: `public distribution`, witch handles
student's user interface, and `admin distribution`, witch handles administration part. Both use common elements and same
Rest API. To run application use `npm run start`, to build application `npm run build` and
then `python manage.py collectstatic` to collect static files into build directory for local development. 
