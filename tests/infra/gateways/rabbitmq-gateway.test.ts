
import { env } from '@/main/config'
import { RabbitMQGateway } from '@/infra/gateways/rabbitmq-gateway'
import { MessageBroker } from '@/domain/contracts'

// CRIACIONAL ---> Singleton Pattern

// Por que é bom?
// - Acesso controlado à instancia única.
// - É facil permitir um número maior de instancias, caso mude de ideia
// - Usa lazy instantion (O singleton só é criado somente quando é necessário)
// - Podemos substituir variaveis globais.

// Por que é ruim?
// - Não é thread-safe (O singleton pode ser alterado por threads diferentes)
// - Viola o princípio de responsabilidade única do SOLID (Single Responsibility Principle)
//   - Single Responsibility Principle (SRP): Classe tem uma única responsabilidade.
// - Requer tratamento especial em caso de concorrência.
// - Em alguns casos pode ser dificil de testar (TDD)

describe('rabbitMQGateway', () => {
  let rabbitMQGatewayGlobal: RabbitMQGateway
  let connectionGlobal: MessageBroker.GenericType

  beforeAll(async () => {
    rabbitMQGatewayGlobal = RabbitMQGateway.getInstance()
  })

  beforeEach(async () => {
    connectionGlobal = await rabbitMQGatewayGlobal.connect(env.messageBroker.rabbitMQ)
    // await connectionGlobal.close()
  })

  it('garantir que a classe não pode ser instanciada diretamente', () => {
    // Given: Contexto inicial ou pré-condições
    // Não há necessidade de configurar pré-condições específicas neste caso.

    // When: Ação que está sendo testada
    // const createInstanceDirectly = new RabbitMQGateway(); // ---> Error
    const createInstanceDirectly = (): RabbitMQGateway => new RabbitMQGateway()
    // createInstanceDirectly() ---> Error

    // Then: Resultado esperado
    expect(createInstanceDirectly).toThrow('Use RabbitMQGateway.getInstance() instead of new')
  })

  it('Garantir somente uma instancia da clase rabbitMQGateway', async () => {
    // Given: Contexto inicial ou pré-condições
    const rabbitMQGatewayLocal = RabbitMQGateway.getInstance()

    // When: Ação que está sendo testada
    const connectionLocal = await rabbitMQGatewayLocal.connect(env.messageBroker.rabbitMQ)

    // Then: Resultado esperado
    expect(rabbitMQGatewayLocal).toEqual(rabbitMQGatewayGlobal)
    expect(connectionLocal).toEqual(connectionGlobal)
  })

  it('Garantir somente uma conexão com RabbitMQ', async () => {
    // Given: Contexto inicial ou pré-condições
    const rabbitMQGatewayLocal = RabbitMQGateway.getInstance()

    // When: Ação que está sendo testada
    const connectionLocal = await rabbitMQGatewayLocal.connect(env.messageBroker.rabbitMQ)

    // Then: Resultado esperado
    expect(rabbitMQGatewayLocal).toEqual(rabbitMQGatewayGlobal)
    expect(connectionLocal).toEqual(connectionGlobal)
  })

  it('Garantir somente a criação de 1 ou mais canais na conexão global', async () => {
    // Given: Contexto inicial ou pré-condições
    const rabbitMQGatewayLocal = RabbitMQGateway.getInstance()

    // When: Ação que está sendo testada
    const connectionLocal = await rabbitMQGatewayLocal.connect(env.messageBroker.rabbitMQ)
    const channel1 = await rabbitMQGatewayLocal.getChannel()
    const channel2 = await rabbitMQGatewayGlobal.getChannel()

    // Then: Resultado esperado
    expect(channel1).not.toEqual(channel2)
    expect(connectionLocal).toEqual(connectionGlobal)
  })
})
