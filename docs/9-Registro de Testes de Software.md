# Registro de Testes de Software - Business Calculator

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

## Avaliação

Os cenários de testes abrangidos nessa página têm como objetivo garantir o correto funcionamento dos cálculos, para que o usuário tenha uma melhor experencia ao utilizar os recursos do site.
Todas as validações nessa página são aplicadas a todas as demais páginas: Contabilidade, Cálculos trabalhistas e Investimentos.

Realizei testes com grupos de pessoas de diversas áreas, RH, TI e familiares. Todos foram realizados na máquina local, onde a solução está sendo desenvolvida.
Na tela de Cálculo de Líquido salarial, o usuário deve informar apenas números, sem espaços e caracteres especiais, todos os campos devem ser preenchidos, caso contrário será exibido uma janela pop up informando o erro para o usuário.

## Contabilidade
O objetivo dos testes é apresentar o cálculo correto do custo de um funcionário com um salário de R$1.500,00.
1.	Entrada de dados:

![image](https://user-images.githubusercontent.com/49626719/123561110-ff0eab00-d77c-11eb-8128-a5ec0d47f522.png)

2.	Resultado do cálculo:

![image](https://user-images.githubusercontent.com/49626719/123561114-059d2280-d77d-11eb-86f3-4abdd5eacbf2.png)

## Cálculos Trabalhistas
1.	Entrada de dados, apenas valores positivos:
A validação dos campos é dinâmica, apresentando o nome do campo e o erro na tela:
Abaixo um teste digitando um valor de condução negativo.


![image](https://user-images.githubusercontent.com/49626719/123560986-27e27080-d77c-11eb-9129-80666a2955a8.png)



2.	Não pode haver nenhum campo sem preenchimento e as entradas devem ser todas numéricas:

![image](https://user-images.githubusercontent.com/49626719/123560995-36c92300-d77c-11eb-9686-b149f47a7a28.png)

3.	Demonstração de um cálculo de um usuário que ganha cerca de R$1500,00 por mês e pega uma condução de 4,50 por dia, trabalhando 6 dias na semana.

![image](https://user-images.githubusercontent.com/49626719/123561006-4183b800-d77c-11eb-91ce-ca3673149e17.png)

## Investimentos
Foi testado o cálculo de um investimento inicial no valor de R5.000,00 com uma taxa de juros mensal de 0,89% em um período de 60 meses:
1.	Entrada de dados e resultado do cálculo apresentados no mesmo print:

![image](https://user-images.githubusercontent.com/49626719/123561184-5d3b8e00-d77d-11eb-821f-73f4a2947bf4.png)

## Teste de entrada inválida de dados:
1. Clicar em cálcular sem preencher nenhuma informação:

![image](https://user-images.githubusercontent.com/49626719/123561225-92e07700-d77d-11eb-845c-7a01ddcdcbd4.png)

2. Preencher o primeiro campo e deixar o segundo com valor negativo:

![image](https://user-images.githubusercontent.com/49626719/123561265-b1467280-d77d-11eb-8361-898dcf97cb71.png)

3. Validando se o teto do INSS está sendo descontado para um salário de R$15.000,00 (Renda mensal superior a R$6.433,57 fica limitada ao teto da contribuição de R$1.286,71).
Erro ao tentar calcular o desconto máximo digitando o último valor da tabela:

![image](https://user-images.githubusercontent.com/49626719/123561385-6e38cf00-d77e-11eb-92d4-0af142bd25d2.png)

Correção:
Ajustado o código e simplificando a lógica da função:

![image](https://user-images.githubusercontent.com/49626719/123563256-10aa7f80-d78a-11eb-8bb4-8a8eea52470d.png)


![image](https://user-images.githubusercontent.com/49626719/123563265-21f38c00-d78a-11eb-8c47-8c45e77fa537.png)


## Trecho de código onde as validações são realizadas:

![image](https://user-images.githubusercontent.com/49626719/123561012-55c7b500-d77c-11eb-8c14-6bae85a75cc6.png)

![image](https://user-images.githubusercontent.com/49626719/123561014-582a0f00-d77c-11eb-8eae-a7bb80912c4c.png)


