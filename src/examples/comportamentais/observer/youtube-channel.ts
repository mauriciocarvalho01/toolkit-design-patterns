
export namespace Youtube {
    export interface Channel {
        addSubscriber(subscriber: Subscriber): void;
        removeSubscriber(subscriber: Subscriber): void;
        notifySubscribers(message: string): void;
        countSubscribers(options?: Youtube.CountSubscriberOptions): Youtube.CountSubscriberResult;
        getSubscribers(): Subscriber[];
    }
    export interface Subscriber {
        receivedNotification(message: string): void;
        hasBeenNotified(): boolean;
        subscribe(): void;
        unsubscribe(): void;
        isSubscribed(): boolean;
        observeSubscriberActions(): void

    }

    export type CountSubscriberOptions = { formated: boolean }
    export type CountSubscriberResult = string | number;
}


export class YoutubeChannel implements Youtube.Channel {
    private subscribers: Youtube.Subscriber[];
    private channelName: string;
    constructor(channelName: string) {
        this.subscribers = [];
        this.channelName = channelName;
    }

    addSubscriber(subscriber: Youtube.Subscriber): void {
        subscriber.subscribe();
        this.subscribers.push(subscriber);
    }

    removeSubscriber(subscriber: Youtube.Subscriber): void {
        this.subscribers = this.subscribers.filter(obs => obs !== subscriber);
    }

    notifySubscribers(message: string): void {
        this.subscribers.forEach(subscriber => subscriber.receivedNotification(`[${this.channelName}] ${message}`));
    }

    countSubscribers(options: Youtube.CountSubscriberOptions): Youtube.CountSubscriberResult {

        if (!options.formated) return this.subscribers.length;

        const formatMap = [
            { limit: 1e9, suffix: 'B' },
            { limit: 1e6, suffix: 'M' },
            { limit: 1e3, suffix: 'K' }
        ];

        const formattedNumber = formatMap.reduce((result, item) => {
            if (this.subscribers.length >= item.limit) {
                return (this.subscribers.length / item.limit).toFixed(1).replace(/\.0$/, '') + item.suffix;
            }
            return result;
        }, this.subscribers.length.toString());

        return formattedNumber;
    }

    getSubscribers(): Youtube.Subscriber[] {
        return this.subscribers;
    }
}

// Classe Subscriber
export class Subscriber {
    private name: string;
    private notified: boolean = false;
    private subscribed: boolean = false;
    constructor(name: string) {
        this.name = name;
    }

    observeSubscriberActions (): void {
        console.log(`[${this.name}] Observando ações do inscrito.`);
        this.unsubscribe();
    }

    subscribe(): void {
        this.notified = false;
        console.log(`[${this.name}] se inscreveu no canal.`);
        this.subscribed = true;
    }

    isSubscribed(): boolean {
        return this.subscribed;
    }

    unsubscribe(): void {
        this.notified = false;
        const comments = ['Acho engraçado que...[textão do twitter]', 'Muito ruim desavisado', 'Nada bom aconteceu', 'Esperava mais ... [textão do twitter]', 'Ficou um pouco chato', 'Quase não aconteceu'];
        if(Math.ceil((Math.random() * 10)) % 2 === 0) {
            console.log(`[${this.name}] Comentário: ${comments[Math.floor(Math.random() * comments.length)]}`);
            this.unsubscribe();
        }
        console.log(`[${this.name}] Cancelou a inscrição.`);
        this.subscribed = true;
    }

    receivedNotification(message: string) {
        this.notified = true
        console.log(`[${this.name}] received notification: ${message}`);
    }

    hasBeenNotified(): boolean {
        return this.notified;
    }
}




