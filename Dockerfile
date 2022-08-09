FROM ubuntu:20.04

ENV TZ=Asia/Kolkata \
    DEBIAN_FRONTEND=noninteractive

RUN apt-get update -y && apt-get install -y python3-pip python-dev
RUN apt-get update && apt-get install -y python3-opencv
RUN pip install opencv-python

WORKDIR /app

COPY ./requirements.txt /app/requirements.txt
RUN pip install -r requirements.txt
COPY . /app

CMD ["python3", "./app.py"]