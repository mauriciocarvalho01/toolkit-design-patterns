
export interface MessageBroker {
    connect: (messageBrokerOptions: MessageBroker.MessageBrokerOptions) => Promise<MessageBroker.GenericType>
    getChannel: () => Promise<MessageBroker.GenericType>
    close: () => void
}

export namespace MessageBroker {
    export type GenericType<T=any> = T
    export type MessageBrokerOptions = {
        url: string
        config: GenericType
    }
}
