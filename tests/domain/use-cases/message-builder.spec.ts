import { MessageBuilder } from "@/domain/use-cases"

// CRIACIONAL ---> Builder Pattern


// Por que é bom?
// Separa a criação da utilização de objetos complexos
// O Código cliente não precisa saber como a criação do objeto é feita, apenas como usar (Código desacoplado)
// O código fica mais fácil de manter e testar
// O mesmo codigo pode construir em diferentes classes, caso seja necessário alterar a forma de criação do objeto
// Ajuda na aplicação dos principios SOLID (Single Responsibility Principle, Open-Closed Principle)
//  - Responsabilidade única do SOLID: Cada objeto criado é responsável por uma única responsabilidade
//  - Aberto para extensão, fechado para modificação: Cada novo tipo de mensagem pode ser adicionado sem alterar o código cliente. 


// Por que é ruim?
// O codigo fica mais complexo e dificil de entender para quem conhece pouco Orientação a Objetos. 


describe('MessageBuilder', () => {
  let messageBuilder: MessageBuilder;

  beforeAll(() => {
    messageBuilder = new MessageBuilder();
  })

  beforeEach(() => {
    messageBuilder.reset();
  })

  it('Garantir a criação de 1 ou mais objetos complexos de mensagem', async () => {
    

    // Given: Contexto inicial ou pré-condições
    messageBuilder.makeText({ text: 'Hello, World!' });
    messageBuilder.makeCarousel({ cards: [{ title: 'Card 1', description: 'Description 1', imageUrl: 'image_url' }] });
    messageBuilder.makeMedia({ url: 'media_url', mediaType: 'image' });
    messageBuilder.makeRichCard({ title: 'Title', description: 'Description', imageUrl: 'image_url' });
    messageBuilder.makeSuggestion({ suggestions: ['Suggestion 1', 'Suggestion 2'] });

    console.log(messageBuilder)

    // When: Ação que está sendo testada
    const messages = messageBuilder.getMessages();
    const contentMessages = messageBuilder.getContentMessages();
    const countMessages = messages.count();
    const countContentMessages = messages.countContentMessages();

    //console.log(messages)
    //console.log(contentMessages)
    //console.log(countMessages)
    //console.log(countContentMessages)

    // Then: Resultado esperado
    expect(contentMessages).toBeDefined();
    expect(messages).toBeDefined();
    expect(countMessages).toBeGreaterThan(0);
    expect(countMessages).toEqual(5);
    expect(countContentMessages).toBeGreaterThan(0);
    expect(countContentMessages).toEqual(5);

    // campaignBuilder.makeCampaign({ name: 'Test Campaign', webhook: 'webhook_url', metrics: ['metric1','metric2'] });
    // campaignBuilder.addMessages(messages);

  })

  it('Garantir que as mensagens em cache sejam renovadas', async () => {

    // Given: Contexto inicial ou pré-condições
    messageBuilder.makeText({ text: 'I am a new text message!' })

    // When: Ação que está sendo testada
    const messages = messageBuilder.getMessages();
    const contentMessages = messageBuilder.getContentMessages();
    const countMessages = messages.count();
    const countContentMessages = messages.countContentMessages();

    //console.log(messages)
    //console.log(contentMessages)
    //console.log(countMessages)
    //console.log(countContentMessages)

    // Then: Resultado esperado
    expect(contentMessages).toBeDefined();
    expect(messages).toBeDefined();
    expect(countMessages).toBeGreaterThan(0);
    expect(countMessages).toEqual(1);
    expect(countContentMessages).toBeGreaterThan(0);
    expect(countContentMessages).toEqual(1);
  })

  // Cereja do bolo 
  it('Garantir que messageBuilder utilize Fluent Interface', async () => {

    // Given: Contexto inicial ou pré-condições
    const fluentInterfaceMessageBuilder = messageBuilder.makeText({ text: 'Hello, World!' })
      .makeCarousel({ cards: [{ title: 'Card 1', description: 'Description 1', imageUrl: 'image_url' }] })
      .makeMedia({ url: 'media_url', mediaType: 'image' })
      .makeRichCard({ title: 'Title', description: 'Description', imageUrl: 'image_url' })
      .makeSuggestion({ suggestions: ['Suggestion 1', 'Suggestion 2'] })

    // When: Ação que está sendo testada
    const messages = fluentInterfaceMessageBuilder.getMessages();
    const contentMessages = fluentInterfaceMessageBuilder.getContentMessages();
    const countMessages = fluentInterfaceMessageBuilder.count();
    const countContentMessages = fluentInterfaceMessageBuilder.countContentMessages();

    //console.log(messages)
    //console.log(contentMessages)
    //console.log(countMessages)
    //console.log(countContentMessages)

    // Then: Resultado esperado
    expect(contentMessages).toBeDefined();
    expect(messages).toBeDefined();
    expect(countMessages).toBeGreaterThan(0);
    expect(countMessages).toEqual(5);
    expect(countContentMessages).toBeGreaterThan(0);
    expect(countContentMessages).toEqual(5);
  })


  it('Garantir que a taxa seja calculada separadamente', async () => {

    // Given: Contexto inicial ou pré-condições
    messageBuilder.makeText({ text: 'I am a new text message!' })

    // When: Ação que está sendo testada
    const messages = messageBuilder.getMessages();
    const contentMessages = messageBuilder.getContentMessages();
    const countMessages = messages.count();
    const countContentMessages = messages.countContentMessages();

    //console.log(messages)
    //console.log(contentMessages)
    //console.log(countMessages)
    //console.log(countContentMessages)

    // Then: Resultado esperado
    expect(contentMessages).toBeDefined();
    expect(messages).toBeDefined();
    expect(countMessages).toBeGreaterThan(0);
    expect(countMessages).toEqual(1);
    expect(countContentMessages).toBeGreaterThan(0);
    expect(countContentMessages).toEqual(1);
  })

})