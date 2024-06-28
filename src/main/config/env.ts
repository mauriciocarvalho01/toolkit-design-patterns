export const env = {
    isProduction: true,
    messageBroker: {
        rabbitMQ: {
            url: process.env.MESSAGE_BROKER_HOST ?? 'localhost',
            config: { clientProperties: { connection_name: process.env.APP_NAME } }
        }
    }
}
