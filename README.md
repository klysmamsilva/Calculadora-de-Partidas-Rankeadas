# Calculadora de partidas Rankeadas


## Instruções do Desafio

**O que deve ser utilizado:**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo

**Criar uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador, depois retorna o resultado para uma variável, o saldo de Rankeados deve ser feito através do calculo (vitórias - derrotas)**
> Se o número de vitórias for menor do que 10 = **Ferro**  
> Se o número de vitórias for entre 11 e 20 = **Bronze**  
> Se o número de vitórias for entre 21 e 50 = **Prata**  
> Se o número de vitórias for entre 51 e 80 = **Ouro**  
> Se o número de vitórias for entre 81 e 90 = **Diamante**  
> Se o número de vitórias for entre 91 e 100 = **Lendário**  
> Se o número de vitórias for maior ou igual a 101 = **Imortal**

## Saída

Ao final deve ser exibido a mensagem:
> "O Herói tem de saldo **{saldoVitorias}** e está no nível **{nivel}**
  

## Explicação de foi utilizado:

Variáveis (vitorias, derrotas, saldoVitorias, nivel, resultado, continuar, resposta).
Uso de operadores (-, >=, <=, <).
Uso de laço de repetição (while).
Estruturas de decisão (if, else if).
Funções (calcularRanked, iniciarCalculadora).


## 1. Funções
O código utiliza funções para organizar e reaproveitar a lógica.
A função principal (calcularRanked) recebe como parâmetros o número de vitórias e derrotas, calcula o saldo e retorna o nível do jogador conforme as regras definidas.


## 2. Variáveis
São usadas variáveis para armazenar o número de vitórias, derrotas, saldo de vitórias, nível e para controlar o fluxo de execução.


## 3. Operadores
O operador de subtração (-) é usado para calcular o saldo de vitórias.
Operadores de comparação (<, >=, <=) são usados nas estruturas de decisão para determinar o nível do jogador.


## 4. Estruturas de decisão
O código utiliza estruturas condicionais (if, else if) para verificar em qual faixa de vitórias o jogador se encaixa e assim definir seu nível (Ferro, Bronze, Prata, etc.).


## 5. Laços de repetição
O laço while permite que o usuário faça múltiplos cálculos seguidos, perguntando se deseja continuar após cada cálculo.


## 6. Saída
Ao final de cada execução, é exibida uma mensagem informando o saldo de vitórias e o nível do jogador, conforme solicitado no enunciado.


## 7. Interatividade
O código está preparado para ser executado em ambientes interativos, usando prompt para entrada de dados e alert para saída, facilitando o uso pelo jogador.



**Plataforma:** [DIO.](https://dio.me)

**Educador:** Felipe Aguiar  

**Github**  https://github.com/felipeAguiarCode
