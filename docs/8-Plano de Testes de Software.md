# Plano de Testes Business Calculator

Os testes funcionais a serem realizados no aplicativo são descritos a seguir.

|Caso de Teste| CT-01 - Calcular o Custo de um Funcionario|
|--|-------------------------------------------------------|
|Requisitos <br/> Associados| RF-001 O site deve fazer cálculos de custo de Funcionarios|
|Objetivo do <br/>Teste| Garantir que o resultado será apresentado ao clicar em calcular |
|Passos| 1) Acessar o Navegador <br/>2) Informar o Endereço do Site <br/>3) Visualizar a página principal <br>4) Clicar em "Contabilidade" <br/>5) Colocar os inputs solicitados <br/>6) Clicar em Calcular |
|Critérios de Éxito| O Site deve apresentar o resultado do calculo realizado, com base nos inputs apresentados |

|Caso de Teste| CT-02 - Calcular o Liquido Salarial|
|--|-------------------------------------------------------|
|Requisitos <br/> Associados| RF-002 O site devera fazer cálculos de Liquido Salarial.|
|Objetivo do <br/>Teste| Garantir que o resultado será apresentado ao clicar em calcular |
|Passos| 1) Acessar o Navegador <br/>2) Informar o Endereço do Site <br/>3) Visualizar a página principal <br>4) Clicar em "Cálculo Trabalhista" <br/>5) Colocar os inputs solicitados <br/>6) Clicar em Calcular |
|Critérios de Éxito| O Site deve apresentar o resultado do calculo realizado, com base nos inputs apresentados |

|Caso de Teste| CT-03 - Calcular o Montante total de um investimento, postecipado.|
|--|-------------------------------------------------------|
|Requisitos <br/> Associados| RF-003 O site deve fazer o calculo de valor futuro de um investimento.|
|Objetivo do <br/>Teste| Garantir que o resultado será apresentado ao clicar em calcular |
|Passos| 1) Acessar o Navegador <br/>2) Informar o Endereço do Site <br/>3) Visualizar a página principal <br>4) Clicar em "Investimentos" <br/>5) Colocar os inputs solicitados <br/>6) Clicar em Calcular |
|Critérios de Éxito| O Site deve apresentar o resultado do calculo realizado, com base nos inputs apresentados |

|Caso de Teste| CT-04 - Validação do Calculo Custo de um Funcionario|
|--|-------------------------------------------------------|
|Requisitos <br/> Associados| RF-001 O site deve fazer cálculos de custo de Funcionarios|
|Objetivo do <br/>Teste| Validar a coerência dos resultados com base nos inputs apresentados pelo usuário. |
|Passos| 1) Acessar o Navegador <br/>2) Informar o Endereço do Site <br/>3) Visualizar a página principal <br>4) Clicar em "Contabilidade" <br/>5) Colocar os inputs solicitados <br/>6) Clicar em Calcular <br/>7) Pegar os resultados e validar na calculadora HP ou Cientifica. |
|Critérios de Éxito| Os dados apresentados na tela devem ser coerentes com o praticado pela respectiva área do usuário. |

|Caso de Teste| CT-05 - Validação do Calculo Liquido Salarial|
|--|-------------------------------------------------------|
|Requisitos <br/> Associados| RF-002 O site devera fazer cálculos de Liquido Salarial.|
|Objetivo do <br/>Teste| Validar a coerência dos resultados com base nos inputs apresentados pelo usuário. |
|Passos| 1) Acessar o Navegador <br/>2) Informar o Endereço do Site <br/>3) Visualizar a página principal <br>4) Clicar em "Cálculo Trabalhista" <br/>5) Colocar os inputs solicitados <br/>6) Clicar em Calcular <br/>7) Pegar os resultados e validar na calculadora HP ou Cientifica. |
|Critérios de Éxito| Os dados apresentados na tela devem ser coerentes com o praticado pela respectiva área do usuário. |

|Caso de Teste| CT-06 - Validação do Calculo Montante total de um investimento, postecipado.|
|--|-------------------------------------------------------|
|Requisitos <br/> Associados| RF-003 O site deve fazer o calculo de valor futuro de um investimento.|
|Objetivo do <br/>Teste| Validar a coerência dos resultados com base nos inputs apresentados pelo usuário. |
|Passos| 1) Acessar o Navegador <br/>2) Informar o Endereço do Site <br/>3) Visualizar a página principal <br>4) Clicar em "Investimentos" <br/>5) Colocar os inputs solicitados <br/>6) Clicar em Calcular <br/>7) Pegar os resultados e validar na calculadora HP ou Cientifica. |
|Critérios de Éxito| Os dados apresentados na tela devem ser coerentes com o praticado pela respectiva área do usuário. |

|Caso de Teste| CT-07 - Validar a navegabilidade do site.|
|--|-------------------------------------------------------|
|Requisitos <br/> Associados| RF-001, RF-002, RF-003 |
|Objetivo do <br/>Teste| Validar se todos os links estão apontando para as paginas corretas, e carregando todos os arquivos de CSS e Js. |
|Passos| 1) Acessar o Navegador <br/>2) Informar o Endereço do Site <br/>3) Visualizar a página principal <br>4) Clicar em "Investimentos" <br/>5) Retornar atraves do btn da calculadora para a pagina principal <br/>6)Clicar em "Calculo Trabalhista" <br/>7) Retornar atraves do btn da calculadora para a pagina principal <br/>8) Clicar em "Investimentos". <br/>8) Retornar atraves do btn da calculadora para a pagina principal
|Critérios de Éxito| Todos os links apontar para os arquivos corretos. |

|Caso de Teste| CT-08 - Testar se o site esta validando os inputs apresentados pelo usuario.|
|--|-------------------------------------------------------|
|Requisitos <br/> Associados| RF-001, RF-002, RF-003 |
|Objetivo do <br/>Teste| Validar se o usuario, ao colocar um valor incoerente, por exemplo, valor negativo em salario, se o site irá apresentar as mensagens de alerta, informando de que o dado esta errado. |
|Passos| 1) Acessar o Navegador <br/>2) Informar o Endereço do Site <br/>3) Visualizar a página principal <br>4) Clicar nos links de cada calculo. <br/>5) Simular valores incoerentes em cada Input.
|Critérios de Éxito| O Site deve apresentar todos os alertas de forma, que o usuario veja que esta colocando dado errado dentro dos inputs. |