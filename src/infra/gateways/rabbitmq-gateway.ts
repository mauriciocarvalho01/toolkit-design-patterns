import { MessageBrokerError } from '@/infra/errors'
import { MessageBroker } from '@/domain/contracts'
import { logger } from '@/logs/logger'
import * as amqp from 'amqplib'

export class RabbitMQGateway implements MessageBroker {
  private connection: amqp.Connection | undefined = undefined
  static instance: RabbitMQGateway | null = null

   constructor () {
    if (RabbitMQGateway.instance !== null) {
      throw new Error('Use RabbitMQGateway.getInstance() instead of new')
    }
  }

  static getInstance = (): RabbitMQGateway => {
    if (RabbitMQGateway.instance === null) {
      RabbitMQGateway.instance = new RabbitMQGateway()
      logger.info('RabbitMQGateway instance is active')
    }
    return RabbitMQGateway.instance
  }

  helthCheck (): void {
    this.connection?.on('error', () => {
      logger.error('RabbitMQ connection error')
      process.exit(1)
    })
    this.connection?.on('blocked', () => {
      logger.error('RabbitMQ connection blocked')
      process.exit(1)
    })
    this.connection?.on('close', () => {
      logger.error('RabbitMQ connection close')
      process.exit(1)
    })
  }

  async connect (messageBrokerOptions: MessageBroker.MessageBrokerOptions): Promise<MessageBroker.GenericType> {
    if (this.connection !== undefined) return this.connection
    logger.info(`RabbitMQ Broker Connection is being established to ${JSON.stringify(messageBrokerOptions)}...`)
    this.connection = await amqp.connect(messageBrokerOptions.url, messageBrokerOptions.config)
    this.helthCheck()
    logger.info('RabbitMQ Broker connection has activated first time!')
    return this.connection
  }

  async getChannel (): Promise<MessageBroker.GenericType> {
    if (this.connection === undefined) {
      throw new MessageBrokerError('Broker Connection has not been established!')
    }
    logger.info('RabbitMQ Channel is active!')
    return await this.connection.createChannel()
  }

  async close (): Promise<void> {
    if (this.connection === undefined) return
    logger.info('RabbitMQ Broker connection is being closed...')
    await this.connection.close()
    this.connection = undefined
    logger.info('RabbitMQ Broker connection has been closed!')
  }
}
