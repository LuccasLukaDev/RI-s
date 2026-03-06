# 🏢 Sistema de Clientes e Empresa

## 📖 Descrição

Este projeto implementa um sistema simples em **JavaScript utilizando Programação Orientada a Objetos (POO)**.
Ele simula o cadastro de uma **empresa**, seus **clientes**, **telefones** e **endereços**.

## 🧱 Estrutura do Projeto

O sistema utiliza quatro classes principais:

* 👤 **Cliente** – representa um cliente da empresa.
* ☎️ **Telefone** – representa um telefone associado a um cliente ou empresa.
* 📍 **Endereco** – representa o endereço de um cliente ou da empresa.
* 🏢 **Empresa** – representa a empresa que possui clientes e telefones.

## ⚙️ Funcionamento

1. Primeiro são criados os **endereços** dos clientes.
2. Depois são criados os **clientes**, informando **nome, endereço e CPF**.
3. Cada cliente recebe **dois telefones**, adicionados através do método `addTelefone()`.
4. Em seguida é criado o **endereço da empresa**.
5. A **empresa é instanciada** com:

   * nome
   * área de atuação
   * CNPJ
   * endereço
6. A empresa também recebe **telefones próprios** usando `addTelefone()`.
7. Por fim, os **clientes são adicionados à empresa** através do método `addCliente()`.

## 📤 Saída

No final do código é executado:

`console.log(empresa.detalhe())`

Esse método imprime no console:

* 🏢 Informações da empresa
* ☎️ Telefones da empresa
* 👥 Lista de clientes
* ☎️ Telefones de cada cliente
* 📍 Endereço de cada cliente
