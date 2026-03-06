# 🦸 Comparador de Heróis

Projeto simples em **JavaScript** que cria personagens inspirados em heróis e vilões e compara automaticamente seus atributos para determinar o vencedor de um confronto.

---

## 📌 Funcionamento

Cada personagem possui os seguintes atributos:

* nome
* codinome
* armaPrincipal
* armaSecundaria
* velocidade
* forca
* resistencia

O programa percorre uma lista de personagens e compara **cada herói com todos os outros**.

Para cada confronto:

* Velocidade é comparada
* Força é comparada
* Resistência é comparada

Regras de pontuação:

* O maior valor ganha **1 ponto**
* Em caso de empate, **ambos recebem 1 ponto**

Ao final, o personagem com mais pontos vence o confronto.

---

## 🧑‍💻 Personagens

* Capitão América
* Homem de Ferro
* Viúva Negra
* Gavião Arqueiro
* Homem-Aranha
* Thor
* Thanos

---

## ▶️ Como executar

1. Instale o **Node.js**
2. Execute o arquivo no terminal:

```bash
node index.js
```

O programa exibirá no terminal todas as comparações entre os personagens.
