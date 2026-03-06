# 🧮 Calculadora CLI em TypeScript

Projeto de **calculadora executada no terminal (CLI)** desenvolvido em **TypeScript**, utilizando **programação orientada a objetos (POO)** e o módulo `readline` do Node.js para interação com o usuário.

O sistema permite realizar diversas **operações matemáticas** digitando números e a operação diretamente no terminal.

---

# ⚙️ Funcionalidades

A calculadora suporta as seguintes operações:

➕ **Soma**
➖ **Subtração**
✖️ **Multiplicação**
➗ **Divisão**
🔼 **Potenciação**
🔽 **Radiciação**
📐 **Bhaskara (equação do 2º grau)**

O usuário pode continuar realizando cálculos até digitar:

```
sair
```

para encerrar o programa.

---

# 💬 Como funciona

O programa utiliza o **módulo `readline` do Node.js** para ler entradas do usuário no terminal.

O usuário deve digitar os valores no seguinte formato:

```
numero1 numero2 operacao
```

Exemplo:

```
10 5 somar
```

Saída:

```
Resultado: 15
```

---

# 📐 Operação de Bhaskara

A operação `bhaskara` funciona de forma um pouco diferente.

Como a fórmula de Bhaskara precisa de **3 números (a, b e c)**, o sistema:

1. pede os dois primeiros números
2. solicita o terceiro número separadamente
3. calcula:

* **Delta**
* **X1**
* **X2**

Exemplo:

```
1 5 bhaskara
Digite um terceiro número:
6
```

Saída:

```
Resultado = Delta: 1 | X1: -2 | X2: -3
```

---

# 🧱 Estrutura do Projeto

```
src/
 ├── RI06.ts
 ├── soma.ts
 ├── subtracao.ts
 ├── multiplicacao.ts
 ├── divisao.ts
 ├── potencia.ts
 ├── radiciacao.ts
 └── bhaskara.ts
```

Cada operação matemática foi separada em **uma classe própria**, contendo um método `calcular()`.

Isso facilita a **organização do código e manutenção do sistema**.

---

# 📦 Instalação do Projeto

Primeiro instale as dependências:

```
npm install
```

---

# 🏗️ Como criar a pasta `dist`

A pasta **dist não existe inicialmente no GitHub**, pois ela é criada automaticamente pelo **compilador TypeScript**.

Para gerar a pasta `dist`, execute:

```
npm run build
```

Esse comando executa:

```
tsc
```

O compilador irá:

* pegar os arquivos da pasta **src**
* converter de **TypeScript para JavaScript**
* gerar os arquivos compilados dentro da pasta **dist**

Estrutura após compilar:

```
dist/
 ├── RI06.js
 ├── soma.js
 ├── subtracao.js
 ├── multiplicacao.js
 ├── divisao.js
 ├── potencia.js
 ├── radiciacao.js
 └── bhaskara.js
```

---

# ▶️ Executando o Projeto

Após compilar, execute:

```
npm start
```

ou diretamente:

```
node dist/RI06.js
```

O terminal iniciará a **calculadora interativa**.

---

# 💻 Scripts disponíveis

No `package.json` existem três scripts principais:

**Modo desenvolvimento**

```
npm run dev
```

Executa o projeto usando `ts-node`.

---

**Compilar o projeto**

```
npm run build
```

Cria a pasta `dist` com os arquivos JavaScript compilados.

---

**Executar versão compilada**

```
npm start
```

Executa o projeto a partir da pasta `dist`.
