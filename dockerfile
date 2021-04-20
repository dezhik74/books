FROM python:3.8.9-alpine
# FROM python:3.8.8-slim-buster
RUN apk update && apk add postgresql-dev gcc python3-dev musl-dev
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
COPY . /code/
WORKDIR /code/
RUN pip install -r requirements.txt
RUN pip install gunicorn
RUN pip install psycopg2-binary
