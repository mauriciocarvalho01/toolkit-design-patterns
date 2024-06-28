export class MessageBrokerError extends Error {
  constructor (message: string) {
    super(message)
    this.name = 'MessageBrokerError'
  }
}
