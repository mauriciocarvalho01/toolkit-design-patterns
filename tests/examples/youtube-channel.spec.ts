
// COMPORTAMENTAL ---> Observer Pattern

import { YoutubeChannel, ChannelSubscriber } from '@/examples/comportamentais/observer/youtube-channel'

// Por que é bom?

// Por que é ruim?

jest.setTimeout(200000)

describe('Youtube Channel', () => {
    let youtubeChannel: YoutubeChannel

    beforeAll(() => {
        youtubeChannel = new YoutubeChannel('Canal JavaScripto BR')
    })

    beforeEach(async () => {
        console.log(`Esperando ações de ${youtubeChannel.getSubscribers().length} inscritos...`)
         await new Promise(resolve => setTimeout(resolve, 10000))
    })

    it('Garantir a criação de novos inscritos no canal', async () => {
        for (let subscriber = 0; subscriber < 10000; subscriber++) {
            // Given: Contexto inicial ou pré-condições
            const newSubscriber = new ChannelSubscriber(`Inscrito ${subscriber}`)

            // When: Ação que está sendo testada
      youtubeChannel.addSubscriber(newSubscriber)
        }
        const countSubscribers = youtubeChannel.countSubscribers({ formated: true })

        // console.log(youtubeChannel)

        // Then: Resultado esperado
        expect(countSubscribers).toBe('10K')
    })

    it('Garantir que os inscritos sejam notificados a cada video adicionado', () => {
        // Given: Contexto inicial ou pré-condições
        // Não há necessidade de configurar pré-condições específicas neste caso.

        // When: Ação que está sendo testada
        youtubeChannel
        .notifySubscribers('[Canal JavaScripto BR] Adicionou um novo video! [Por que 3 > 10 em javascript!]')
        const newSubscribers = youtubeChannel.getSubscribers()

        // Then: Resultado esperado
        newSubscribers.forEach((newSubscriber) => {
            expect(newSubscriber.hasBeenNotified()).toBeTruthy()
        })
    })

    it('Garantir que os inscritos cancelem a inscrição no canal', async () => {
        // Given: Contexto inicial ou pré-condições
        // Não há necessidade de configurar pré-condições específicas neste caso.

        // When: Ação que está sendo testada
        youtubeChannel
        .notifySubscribers('[Canal JavaScripto BR] Adicionou um novo video! [Como fazer ma##nha usando maizena y javascript]')
        await new Promise(resolve => setTimeout(resolve, 10000))
        const subscribers = youtubeChannel.getSubscribers()

        // Then: Resultado esperado
        subscribers.forEach((subscriber, subscriberId) => {
            if (subscriberId % 2 === 0) {
                subscriber.observeSubscriberActions()
                if (subscriber.isSubscribed()) {
                    youtubeChannel.removeSubscriber(subscriber)
                }
            }
        })

        const countSubscribers = youtubeChannel.countSubscribers({ formated: true })

        // console.log(youtubeChannel)
        // Then: Resultado esperado
        expect(countSubscribers).toBe('5K')
    })
})
