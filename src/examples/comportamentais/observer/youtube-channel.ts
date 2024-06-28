export namespace Channel {
  export type CountSubscriberOptions = { formated: boolean }
  export type CountSubscriberResult = string | number
}

export interface Channel {
  addSubscriber: (subscriber: Subscriber) => void
  removeSubscriber: (subscriber: Subscriber) => void
  notifySubscribers: (message: string) => void
  countSubscribers: (options: Channel.CountSubscriberOptions) => Channel.CountSubscriberResult
  getSubscribers: () => Subscriber[]
  observeSubscriberActions: () => void
}

export interface Subscriber {
  getName: () => string
  receivedNotification: (message: string) => void
  hasBeenNotified: () => boolean
  subscribe: () => void
  unsubscribe: () => void
  isSubscribed: () => boolean
}

export class YoutubeChannel implements Channel {
    private subscribers: Subscriber[]
    private readonly channelName: string
    constructor (channelName: string) {
        this.subscribers = []
        this.channelName = channelName
    }

    addSubscriber (subscriber: Subscriber): void {
        subscriber.subscribe()
        this.subscribers.push(subscriber)
    }

    removeSubscriber (subscriber: Subscriber): void {
        this.subscribers = this.subscribers.filter(obs => obs !== subscriber)
    }

    notifySubscribers (message: string): void {
        this.subscribers.forEach(subscriber => subscriber.receivedNotification(`[${this.channelName}] ${message}`))
    }

    countSubscribers (options: Channel.CountSubscriberOptions): Channel.CountSubscriberResult {
        if (!options.formated) return this.subscribers.length

        const formatMap = [
            { limit: 1e9, suffix: 'B' },
            { limit: 1e6, suffix: 'M' },
            { limit: 1e3, suffix: 'K' }
        ]

        const formattedNumber = formatMap.reduce((result, item) => {
            if (this.subscribers.length >= item.limit) {
                return (this.subscribers.length / item.limit).toFixed(1).replace(/\.0$/, '') + item.suffix
            }
            return result
        }, this.subscribers.length.toString())

        return formattedNumber
    }

    observeSubscriberActions (): void {
      this.subscribers.forEach((subscriber, subscriberId) => {
        console.log(`[YoutubeChannel] Observando ações do inscrito do [${subscriber.getName()}]`)
        if (subscriberId % 2 === 0) {
            subscriber.unsubscribe()
            if (!subscriber.isSubscribed()) {
                this.removeSubscriber(subscriber)
            }
        }
      })
    }

    getSubscribers (): Subscriber[] {
        return this.subscribers
    }
}

// Classe Subscriber
export class ChannelSubscriber implements Subscriber {
    private readonly name: string
    private notified: boolean = false
    private subscribed: boolean = false
    constructor (name: string) {
        this.name = name
    }

    getName (): string { return this.name }

    subscribe (): void {
        this.notified = false
        console.log(`[${this.name}] se inscreveu no canal.`)
        this.subscribed = true
    }

    isSubscribed (): boolean {
        return this.subscribed
    }

    unsubscribe (): void {
        this.notified = false
        const comments = ['Muito bom, lembro uma vez que...[textão do twitter]', 'Legal', 'first', 'Esperava mais ... [textão do twitter]', 'Ficou um pouco chato', 'Quase não aconteceu']
        if (Math.ceil((Math.random() * 10)) % 2 === 0) {
            console.log(`[${this.name}] Comentário: ${comments[Math.floor(Math.random() * comments.length)]}`)
            this.subscribed = false
        }
    }

    receivedNotification (message: string): void {
        this.notified = true
        console.log(`[${this.name}] received notification: ${message}`)
    }

    hasBeenNotified (): boolean {
        return this.notified
    }
}
