import { YoutubeChannel, ChannelSubscriber } from '@/examples/comportamentais/observer/youtube-channel'

// COMPORTAMENTAL ---> Observer Pattern
// Exemplos refinados Frameworks reativos ---> ngOnChanges, ngOnInit Angular
                             // ---> useEffect, useState
                             // ---> beforeAll, beforeEach, afterAll

// Por que é bom?
  // Permite uma relação fraca entre o sujeito e os observadores, facilitando a manutenção e a evolução do código.
  // Novos observadores podem ser adicionados a qualquer momento sem alterar o código do sujeito.
  // O mesmo sujeito pode ser usado com diferentes observadores para comportamentos variados.
  // Facilita a implementação de sistemas reativos e orientados a eventos, que são comuns em muitas aplicações modernas.

// Por que é ruim?
  // Introduz complexidade adicional ao código, especialmente em sistemas com muitos observadores.
  // Pode ser difícil depurar e rastrear problemas em sistemas com muitos observadores e notificações frequentes.
  // Pode afetar o desempenho se não for implementado corretamente, especialmente com um grande número de observadores.
  // Pode levar a dependências circulares se os observadores também estiverem observando uns aos outros.

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
        // const filas = ['fila1', 'fila2']

        for (let subscriber = 0; subscriber < 10; subscriber++) {
            // Given: Contexto inicial ou pré-condições
            const newSubscriber = new ChannelSubscriber(`Inscrito ${subscriber}`)

            // When: Ação que está sendo testada
            youtubeChannel.addSubscriber(newSubscriber)
        }
        const countSubscribers = youtubeChannel.countSubscribers({ formated: true })

        // console.log(youtubeChannel)

        // Then: Resultado esperado
        expect(countSubscribers).toBe('10')
    })

    it('Garantir que os inscritos sejam notificados a cada video adicionado', () => {
        // Given: Contexto inicial ou pré-condições
        // Não há necessidade de configurar pré-condições específicas neste caso.

        // When: Ação que está sendo testada
        youtubeChannel
        .notifySubscribers('[Canal JavaScripto BR] Adicionou um novo video! [Por que 3 > 10 em javascript?]')
        const newSubscribers = youtubeChannel.getSubscribers()

        // Then: Resultado esperado
        newSubscribers.forEach((newSubscriber) => {
            expect(newSubscriber.hasBeenNotified()).toBeTruthy()
        })
    })

    it('Garantir que youtubeChannel observe os inscritos', async () => {
        // Given: Contexto inicial ou pré-condições
        // Não há necessidade de configurar pré-condições específicas neste caso.

        // When: Ação que está sendo testada
        youtubeChannel
        .notifySubscribers('[Canal JavaScripto BR] Adicionou um novo video! [Como fazer ma##nha usando maizena y javascript]')
        await new Promise(resolve => setTimeout(resolve, 10000))

        // Then: Resultado esperado
        youtubeChannel.observeSubscriberActions()

        const countSubscribers = youtubeChannel.countSubscribers({ formated: true })

        // console.log(youtubeChannel)
        // Then: Resultado esperado
        expect(countSubscribers).toBe('8')
    })
})
