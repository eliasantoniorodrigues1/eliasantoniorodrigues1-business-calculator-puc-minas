# Especificação do Projeto

Os membros da equipe, ao observarem o mercado e as necessidades, ao debater temas que em conversas com os amigos, eram válidos. Viram a necessidade do projeto. Onde através de personas e histórias de usuários, a necessidade e os pontos relevantes foram levantados.

## Personas

Elton Junior tem 30 anos, é empreendedor e sócio de uma empresa. Está buscando uma empresas para analisar onde investir o dinheiro, e aplica-lo.

Ana Paula tem 41 anos, é contadora, formada há 15 anos e trabalha em uma empresa de contabilidade. Precisa da nossa ferramenta, para facilicar os calculos diariamente, para INSS, IR, Ferias, entre outros.


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Ana Paula           |Calculo do INSS, FGTS, férias.| Para verificar quanto um funcionário custaria para a empresa.|
|Elton Junior        |Calculo de valor futuro|Para analisar se o investimento proposto valerá a pena ou não.|
|Ana Paula Silva     |Calculo do imposto de renda.|Todo ano os clientes precisam enviar a declaração de imposto de renda, e através do site é mais fácil demonstrar quanto o cliente irá pagar.|

## Requisitos
O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir.

### Requisitos Funcionais
A tabela a seguir apresenta os requisitos do projeto, identificando a prioridade em que os mesmos devem ser entregues.

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001|O site deve fazer cálculos de custo de Funcionários| ALTA |
|RF-002|O site deve fazer cálculo do salário liquido.|ALTA|
|RF-003|O site deve fazer o cálculo de valor futuro de um investimento.|BAIXA|

### Requisitos não Funcionais
A tabela a seguir apresenta os requisitos não funcionais que o projeto deverá atender.

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deve ser publicado em um ambiente acessível publicamente na Internet (Repl.it, GitHub Pages, Heroku)| ALTA |
|RNF-002| O site deverá ser responsivo permitindo a visualização em um celular de forma adequada. |  MÉDIA |
|RNF-003| O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge). |ALTA|


## Restrições

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| O aplicativo deve se restringir às tecnologias básicas da Web no Frontend|