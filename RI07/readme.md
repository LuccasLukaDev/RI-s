# 🧮 Calculadora CLI em TypeScript

Este projeto é uma calculadora executada no terminal utilizando **TypeScript** e **Node.js** 💻.

O programa permite ao usuário informar **dois números e uma operação matemática**. A aplicação então executa o cálculo correspondente e retorna o resultado no terminal ⚡.

## 🔢 Operações disponíveis

* ➕ somar
* ➖ subtrair
* ✖️ multiplicar
* ➗ dividir
* 🔋 potencializar
* 🌱 radicar
* 📐 bhaskara

## 🏗️ Arquitetura

Cada operação é implementada em uma **classe separada** que implementa a interface `Calculo`.

A interface `Calculo` define o método `calcular`, garantindo que **todas as operações possuam a mesma estrutura de método**. Isso funciona como um **contrato**, obrigando todas as classes a implementarem esse método.

Dessa forma, cada classe é responsável apenas por **sua própria lógica de cálculo**, mantendo o código mais organizado, reutilizável e fácil de manter.

## 🚪 Encerrando o programa

Para sair da aplicação basta digitar:

sair
