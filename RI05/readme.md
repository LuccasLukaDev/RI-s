# 🏢 Sistema de Empresa e Funcionários

Projeto em **TypeScript/JavaScript** que representa a estrutura de uma empresa e seus funcionários utilizando **programação orientada a objetos (POO)**.

O sistema organiza informações como **empresa, funcionários, endereço e telefone**, e utiliza uma classe responsável por **gerar a descrição completa da empresa**.

---

## 📌 Funcionamento

O programa cria uma empresa contendo **funcionários**, onde cada funcionário possui **endereço e telefone**.

Uma classe chamada **`Descritor`** é responsável por **montar uma descrição organizada da empresa**, exibindo todas as informações no terminal.

---

## 🧱 Estrutura das Classes

### 🏢 Empresa

Representa a empresa e armazena:

* razão social
* nome fantasia
* CNPJ
* endereço
* funcionários
* telefone

A empresa recebe uma **lista de funcionários**, permitindo representar vários colaboradores dentro da organização.

---

### 👨‍💼 Funcionário

Armazena os dados de cada funcionário:

* nome
* matrícula
* CPF
* endereço
* telefone

Cada funcionário está associado a um **endereço e um telefone**.

---

### ☎️ Telefone

Representa um telefone contendo:

* DDD
* número do telefone

---

### 📍 Endereço

Armazena informações de localização:

* número
* rua
* bairro
* cidade

---

### 📝 Descritor

Classe responsável por **gerar a descrição completa da empresa**.

O método `descrever()` recebe uma empresa e retorna um **texto formatado** contendo:

* informações da empresa
* lista de funcionários
* endereço
* telefones

Esse texto é exibido no terminal utilizando `console.log`.

---

## ▶️ Como executar

1. Instale o **Node.js**

2. Compile o TypeScript (caso esteja usando `.ts`):

```bash
tsc
```

3. Execute o programa:

```bash
node index.js
```

O terminal exibirá a **descrição completa da empresa e seus funcionários**.
