From node:latest

ENV MONGO_DB_USERNAME=admin\
    MONGO_DB_PWD=password

RUN mkdir -p /home/newapp

COPY ./app /home/newapp

EXPOSE 3003
 

CMD ["node", "/home/newapp/app.js"]