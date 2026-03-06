# 🏢 Sistema de Empresa e Clientes

Projeto em **JavaScript** que simula a estrutura de uma empresa, seus clientes, telefones e endereços utilizando **programação orientada a objetos (POO)**.

---

## 📌 Funcionamento

O sistema modela uma empresa que possui **clientes e telefones**, e cada cliente também possui **telefones e endereço**.

As informações são armazenadas utilizando **classes** e **coleções do tipo `Set`**, evitando elementos duplicados.

---

## 🧱 Estrutura das Classes

### Cliente

Armazena:

* nome
* CPF (privado)
* endereço
* telefones

Cada cliente pode possuir **vários telefones**, armazenados em um `Set`.

---

### Telefone

Representa um telefone contendo:

* DDD
* número do telefone

---

### Endereço

Armazena informações de localização:

* estado
* cidade
* rua
* número

Também possui métodos para retornar os valores em **maiúsculo ou minúsculo**.

---

### Empresa

Representa uma empresa contendo:

* razão social
* nome fantasia
* CNPJ (privado)
* endereço
* clientes
* telefones

Clientes e telefones são armazenados em **Sets**.

A classe possui o método `detalhe()` que gera uma **descrição completa da empresa**, listando:

* informações da empresa
* clientes cadastrados
* endereço dos clientes
* telefones de cada cliente

---

## ▶️ Como executar

1. Instale o **Node.js**

2. Execute o arquivo no terminal:

```bash
node index.js
```

O programa exibirá no terminal todas as informações da empresa, incluindo seus clientes e telefones.
