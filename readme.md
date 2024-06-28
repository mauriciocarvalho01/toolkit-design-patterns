



> ## Design Patterns

Padrões de projeto são soluções típicas para problemas comuns em projeto de software. Eles são como plantas de obra pré fabricadas que você pode customizar para resolver um problema de projeto recorrente em seu código.

> [!NOTE]
> Obs: Na minha opinião, Design Patterns só devem ser aplicados quando o desenvolvedor tem a experiência necessária para entender quando e como aplicá-los, garantindo que tragam mais benefícios do que complexidade desnecessária. É importante lembrar que Design Patterns não devem ser automaticamente associados à complexidade; na verdade, eles fazem exatamente o contrário, quando são bem aplicados, simplificam a solução de problemas recorrentes e melhoram a manutenção e a clareza do código.


#### Exemplos disponiveis:
* Singleton (CRIACIONAL)
* Builder (CRIACIONAL)
* Decorator (CRIACIONAL)
* Factory Method (CRIACIONAL)
* Adapter (ESTRUTURAL)
* Composite (ESTRUTURAL)
* Observer (COMPORTAMENTAL)

> [!IMPORTANT]
> Além da defincição conceitural, Design Patterns servem também para EVITAR/MINIMIZAR problemas recorrentes em desenvolvimento de softwares *(Ex: Code Smells)*.



##  Code Smells (Anti-Patterns)
* Anti-patterns são soluções comuns a problemas recorrentes que, embora possam parecer apropriadas à primeira vista, acabam gerando mais problemas do que soluções. Eles são "soluções ruins" para problemas comuns.


#### Alguns exemplos de anti-patterns que pode ser causados por Design Patterns incluem:

**Speculative Generality (Generalidade Especulativa)**

* Adicionar funcionalidades ou generalizações ao código baseadas em suposições sobre necessidades futuras que podem nunca se concretizar. Isso resulta em complexidade desnecessária.

#### Os princípios Keep It Simple, Stupid e You Aren't Gonna Need It:

* O princípio ***(Keep It Simple, Stupid) (KISS)***, traduzido para "Mantenha Simples, Estúpido", é uma diretriz de design que enfatiza a simplicidade e a clareza no desenvolvimento de software e outras áreas de engenharia. O princípio KISS sugere que a maioria dos sistemas funcionam melhor quando são mantidos simples e livres de complexidades desnecessárias.

* O princípio ***(You Aren't Gonna Need It) (YAGNI)*** , traduzido para "Você Não Vai Precisar Disso", é um conceito fundamental no desenvolvimento de software que prega a simplicidade e a eliminação de funcionalidades desnecessárias. O YAGNI é um dos pilares das metodologias ágeis, como o Extreme Programming (XP) - Complementar ao Scrum.

### God Object (Objeto Deus)

* Um objeto que sabe demais ou faz demais, centralizando muitas funcionalidades e responsabilidades.


### Golden Hammer (Martelo de Ouro)

* Tendência a usar uma solução familiar para todos os problemas, independentemente de ser a melhor abordagem.


### Magic Numbers (Números Mágicos)

* Uso de números sem explicação ou contexto no código, em vez de usar constantes nomeadas que expliquem seu significado.
Singleton (uso excessivo ou inadequado)

* Embora o Singleton seja um padrão de design, seu uso inadequado pode levar a problemas como dificuldade de teste e alta acoplagem.
Code Smells que Design Patterns Podem Melhorar
Blank Lines (Linhas em branco)

* Uso inadequado ou excessivo de linhas em branco no código pode torná-lo difícil de ler. Embora linhas em branco possam melhorar a legibilidade ao separar blocos lógicos de código, usá-las de forma inconsistente pode causar confusão.
Comments (Muitos comentários)

* Comentários são úteis para explicar partes complexas do código, mas excesso de comentários ou comentários desnecessários podem indicar que o código não é claro por si só. Idealmente, o código deve ser autoexplicativo e os comentários devem ser usados para explicar o "porquê" e não o "como".


#### Code Smells que podem ser evitados quando usamos padrões


### Spaghetti Code (Código Espaguete) //Babel Compile

* Código desorganizado e sem estrutura, onde o fluxo do programa é difícil de seguir.
> [!TIP]
> Melhorado por: Todos Padrões

### Data Clumps (Agrupamento de dados)

* Data clumps ocorrem quando um grupo de variáveis frequentemente aparece junto. Em vez de usar essas variáveis separadamente, elas deveriam ser encapsuladas em uma classe ou estrutura de dados para melhorar a coesão e facilitar a manutenção.
> [!TIP]
> Melhorado por: Builder Pattern

### Divergent Change (Mudança Divergente)

* Quando uma classe precisa ser modificada por diferentes razões, isso indica que ela tem múltiplas responsabilidades. Isso quebra o Princípio da Responsabilidade Única e sugere que a classe deve ser dividida em várias classes menores, cada uma com uma responsabilidade específica.
> [!TIP]
> Melhorado por: Command Pattern

### Duplicate Code (Código Duplicado)

* Código duplicado é quando trechos idênticos de código aparecem em diferentes partes do programa. Isso torna a manutenção difícil, pois qualquer mudança precisa ser replicada em várias partes. Refatorar para evitar duplicação melhora a reutilização e a manutenção.
> [!TIP]
> Melhorado por: Template Method Pattern

### Inappropriate Intimacy (Intimidade Inapropriada)

Quando uma classe conhece detalhes internos de outra classe e depende fortemente deles, isso cria uma forte acoplagem entre as classes, dificultando a manutenção e evolução do código. Deve-se buscar uma separação mais clara entre as responsabilidades das classes.
> [!TIP]
> Melhorado por: Mediator Pattern



### Feature Envy (Inveja de Funcionalidade)

* Quando um método de uma classe parece estar mais interessado nos dados de outra classe, isso indica que o método poderia estar na outra classe. Isso geralmente sugere que a funcionalidade deveria ser movida para a classe que detém os dados relevantes.
> [!TIP]
> Melhorado por: Visitor Pattern


### Large Class (Classe Grande)

* Classes que fazem muitas coisas diferentes violam o Princípio da Responsabilidade Única (SOLID). Essas classes devem ser divididas em várias classes menores, cada uma com uma responsabilidade clara e específica, facilitando a manutenção e a compreensão do código.
> [!TIP]
> Melhorado por: Facade Pattern


### Long Method (Método Longo)

* Métodos muito longos podem ser difíceis de entender e manter. Refatorar métodos longos em métodos menores e mais coesos melhora a legibilidade e facilita a reutilização de partes do código.
> [!TIP]
> Melhorado por: Command Pattern


### Long Parameter List (Lista Longa de Parâmetros)

* Métodos que requerem muitos parâmetros podem ser difíceis de usar e entender. Reduzir o número de parâmetros pode ser feito através da criação de objetos que encapsulam os dados necessários ou usando padrões como o Builder.
> [!TIP]
> Melhorado por: Builder Pattern


### Middle Man

* Quando uma classe delega a maior parte de seu trabalho para outra classe, ela pode estar atuando como um intermediário desnecessário. Esse intermediário pode ser eliminado, permitindo que as classes se comuniquem diretamente.
> [!TIP]
> Melhorado por: Facade Pattern


### Primitive Obsession (Obsessão por Tipos Primitivos)

* Uso excessivo de tipos primitivos em vez de criar classes que encapsulem conceitos mais ricos. Por exemplo, usar int/string para representar um número de telefone em vez de criar uma classe PhoneNumber que possa ter validação e outros comportamentos específicos.
> [!TIP]
> Melhorado por: Value Object Pattern


### Refused Bequest (Herança Recusada)

* Quando uma subclasse herda métodos e dados de uma superclasse, mas não os utiliza ou os sobrecarrega inadequadamente, isso indica que a herança não foi bem aplicada. Isso pode sugerir que a hierarquia de classes precisa ser repensada.
> [!TIP]
> Melhorado por: Strategy Pattern


### Shotgun Surgery (Cirurgia de Espingarda)

* Quando uma pequena mudança em um sistema requer modificações em muitos lugares diferentes, isso sugere que o código está mal organizado. Deve-se buscar uma maior coesão, de modo que mudanças sejam localizadas e tenham um impacto mínimo no resto do sistema.
> [!TIP]
> Melhorado por: Observer Pattern





## Prompt CHAT-GPT auxiliar na coesão e evitar code smells:

> Analise o método e/ou conjunto de métodos/classe [nome do método/nome da classe] em relação aos princípios SOLID, design patterns e possíveis code smells.



FONTES:

 - [Design Patterns](https://refactoring.guru/pt-br/design-patterns)
 - [Code Smells](https://refactoring.guru/pt-br/refactoring/smells)


