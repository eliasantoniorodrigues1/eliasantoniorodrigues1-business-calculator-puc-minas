# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

Nesta Seção será apresentado os testes da aplicação com base nos requisitos funcionais apresentado.
ao longo dos testes será feito todo um direcionamento para a realização dos mesmos.

## Calculo de Funcionario. (RF-001)
A tela principal apresenta as caixas de input dos dados necessarios para o calculo total de um Colaborador. abaixo duas fotos da tela desse requisito. a primeira foto apresentara os inputs, e a segunda, ao clicar em Calcular apresentará os resultados do calculo com base nos inputs.

> Primeira Foto.

![Input Calculo Colaborador](https://user-images.githubusercontent.com/81769042/123020748-2fcf9880-d3a9-11eb-9110-afc987078d6e.png)
Figura 7 - Tela de Inputs Contabilidade


> Segunda Foto.

![Result Calculo Colaborador](https://user-images.githubusercontent.com/81769042/123020883-67d6db80-d3a9-11eb-9444-7777a54cdc62.png)
Figura 8 - Tela de Resultados Contabilidade


### Requisitos Atendidos
- RF-001

### Artefatos da Funcionalidade
- form-folha-pgto.html
- calculadora.js
- bootstrap.min.css
- bootstrap.min.js
- style-contabilidade.css

### Instruções de Acesso
- O Acesso deverá ser feito pela URL (http://127.0.0.1:5500/src/index.html)
- Na Pagina principal deverá ser feito o acesso atraves do link de Contabilidade
- Na pagina de Contabilidade, deverá ser feito os inputs para o respectivo calculo. Abaixo os Inputs Necessarios.
    - Salário base
    - Auxílio Refeição
    - Auxílio Alimentação
    - Plano de Saúde
    - Outros Beneficios
    - Clicar em "Calcular".
    


## Calculo de Liquido Salarial. (RF-002)
A tela principal apresenta os inputs necessarios para o calculo de Liquido Salarial.
Abaixo uma foto da tela de Inputs de Liquido Salarial

![Input Liquido Salarial](https://user-images.githubusercontent.com/81769042/123187798-34f81a80-d471-11eb-8d37-b3b739ae718f.png)
Figura 9 - Tela de Inputs Liquido Salarial


### Requisitos Atendidos
- RF-002

### Artefatos da Funcionalidade
- calculos-trabalhistas.html
- calculadora.js
- bootstrap.min.css
- bootstrap.min.js
- style-trabalhista.css

### Instruções de Acesso
- O Acesso deverá ser feito pela URL (http://127.0.0.1:5500/src/index.html)
- Na Pagina principal deverá clicar em "Cálculo trabalhista".
- Na pagina de Cálculo trabalhista, deverá ser feito os inputs para o respectivo calculo. Abaixo os Inputs Necessarios.
    - Qual o seu Salário bruto Mensal?
    - Possui dependentes para Imposto de Renda?
    - Qual é o valor da condução diária?
    - Digite a quantidade de vale-transporte por dia
    - Quantos dias trabalha na semana?
    - Clicar em "Calcular".



## Calculo de Valor Futuro de um Investimento. (RF-003)
A tela principal apresenta os inputs necessarios para o calculo de montante total de um investimento, postecipado.
Abaixo uma foto da tela de Inputs do calculo.

![Input Investimento Futuro](https://user-images.githubusercontent.com/81769042/123188714-e21f6280-d472-11eb-8247-1fc7c101296f.png)
Figura 10 - Tela de Inputs Investimento Futuro


### Requisitos Atendidos
- RF-003

### Artefatos da Funcionalidade
- investimentos.html
- calculadora.js
- bootstrap.min.css
- bootstrap.min.js
- style-investimentos.css

### Instruções de Acesso
- O Acesso deverá ser feito pela URL (http://127.0.0.1:5500/src/index.html)
- Na Pagina principal deverá clicar em "Investimentos".
- Na pagina de Investimentos, deverá ser feito os inputs para o respectivo calculo. Abaixo os Inputs Necessarios.
    - Qual valor deseja investir inicialmente?
    - Qual a taxa mensal de juros?
    - Pretende resgatar esse valor em quantos meses?