FROM node:latest

WORKDIR /usr/app

COPY ./package*.json ./

RUN npm install

COPY . .


# CMD [ "npm", "run", "test:watch" ]    

# Use a imagem oficial do RabbitMQ
# FROM rabbitmq:3-management

# # Exponha as portas necessárias
# EXPOSE 5672 15672

# # (Opcional) Adicione um comando de inicialização personalizado, se necessário
# CMD ["rabbitmq-server"]