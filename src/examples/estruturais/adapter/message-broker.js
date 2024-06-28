class MessageBrokerAdapter {
  constructor (messageBroker) {
    this.messageBroker = messageBroker
  }

  connect () {
    this.messageBroker.connect()
  }
}

class SQSGateway {
  connect () {
    console.log('Connected with SQSGateway')
  }
}

class RabbitmqGateway {
  connect () {
    console.log('Connected into RabbitmqGateway')
  }
}

// Uso do Adaptador
const rabbitmqGateway = new RabbitmqGateway()
const sqsGateway = new SQSGateway()
const messageBroker1 = new MessageBrokerAdapter(rabbitmqGateway)
const messageBroker2 = new MessageBrokerAdapter(sqsGateway)
messageBroker1.connect() // Connected with SQSGateway
messageBroker2.connect() // Connected into RabbitmqGateway"
