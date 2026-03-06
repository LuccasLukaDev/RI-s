# 👤 Sistema de Clientes

Projeto simples em **JavaScript** que modela um sistema de clientes utilizando **funções construtoras** para representar clientes, telefones e endereços.

---

## 📌 Funcionamento

O sistema cria três tipos de objetos:

* **Cliente**
* **Telefone**
* **Endereço**

Cada cliente possui:

* nome
* email
* telefone
* endereço

Além disso, cada objeto possui **métodos getters e setters** para acessar ou modificar seus dados.

---

## 🧱 Estrutura dos Objetos

### Cliente

Responsável por armazenar os dados principais do cliente e gerar uma descrição completa contendo telefone e endereço.

### Telefone

Armazena:

* DDD
* número do telefone

### Endereço

Armazena:

* estado
* cidade
* rua
* número

---

## 🔎 Ordenação de Clientes

O programa possui uma função chamada `ordenaLista` que:

1. Cria uma cópia da lista de clientes
2. Ordena os clientes **em ordem alfabética pelo nome**
3. Retorna a lista ordenada

A ordenação utiliza o método:

```
localeCompare()
```

que compara strings respeitando regras de linguagem.

---

## ▶️ Como executar

1. Instale o **Node.js**

2. Execute o arquivo no terminal:

```bash
node index.js
```

O programa exibirá no terminal a descrição de todos os clientes ordenados pelo nome.
