class Cliente {
    constructor(nome, telefone, email, endereco) {
        this.nome = nome
        this.email = email
        this.endereco = endereco
        this.telefone = telefone
    }

    getNomeMaiuscula() {return this.nome.toUpperCase()}
    getNomeMinuscula() {return this.nome.toLowerCase()}
    getNome() {return this.nome}
    setNome(novoNome) {this.nome = novoNome}

    getEmailMaiuscula() {return this.email.toUpperCase()}
    getEmailMinuscula() {return this.email.toLowerCase()}
    getEmail() {return this.email}
    setEmail(novoEmail) {this.email = novoEmail}

    get descricao() {
        return `
        ---------------------
        Informações do Cliente:
        ${this.nome}
        ---------------------
        Telefone: ${this.telefone.getNumero()}
        DDD: ${this.telefone.getDDD()}
        ---------------------
        Endereço:
        Rua: ${this.endereco.getRua()}
        Número: ${this.endereco.getNumero()}
        Cidade: ${this.endereco.getCidade()}
        Estado: ${this.endereco.getSiglaEstado()}
        ---------------------`   
    }
}

class Endereco {
    constructor(siglaEstado,cidade, rua, numero) {
        this.siglaEstado = siglaEstado
        this.cidade = cidade
        this.rua = rua
        this.numero = numero
    }
    getSiglaEstadoMaiuscula() {return this.siglaEstado.toUpperCase()}
    getSiglaEstadoMinuscula() {return this.siglaEstado.toLowerCase()}
    getSiglaEstado() {return this.siglaEstado}
    setSiglaEstado(novaSigla) {this.siglaEstado = novaSigla}
    
    getCidadeMaiuscula() {return this.cidade.toUpperCase()}
    getCidadeMinuscula() {return this.cidade.toLowerCase()}
    getCidade() {return this.cidade}
    setCidade(novaCidade) {this.cidade = novaCidade}

    getRuaMaiuscula() {return this.rua.toUpperCase()}
    getRuaMinuscula() {return this.rua.toLowerCase()}
    getRua() {return this.rua}
    setRua(novaRua) {this.rua = novaRua}

    getNumero() {return this.numero}
    setNumero(novoNumero) {this.numero = novoNumero}
}

class Telefone {
    constructor(ddd, numeroTelefone) {
        this.ddd = ddd
        this.numeroTelefone = numeroTelefone
    }

    getDDD() {return this.ddd}
    setDDD(novoDDD) {this.ddd = novoDDD}

    getNumero() {return this.numeroTelefone}
    setNumero(novoNumero) {this.numeroTelefone = novoNumero}
}

let telefone = new Telefone ('11', '999999999')
let telefone1 = new Telefone ('12', '888888888')
let telefone2 = new Telefone ('12', '777777777')
let endereco = new Endereco ('SP', 'São Paulo', 'Av. Paulista', '987')
let endereco1 = new Endereco ('SP', 'São Paulo', 'Av. Paulista', '986')
let endereco2 = new Endereco ('SP', 'São Paulo', 'Av. Paulista', '986')
let cliente = new Cliente('Carlos Conrado Heinz', telefone, 'carlos.conrado@app.com', endereco)
let cliente1 = new Cliente('Lucas da Silva ALves', telefone1, 'lucccas.silva@hotmail.com', endereco1)
let cliente2 = new Cliente('Adriana da Silva', telefone2, 'adirnaa.silva@gmail.com', endereco2)

lista = [cliente, cliente1, cliente2]
function ordenaLista(listaClientes) {
    return listaClientes.slice().sort((a, b) => a.getNome().localeCompare(b.getNome()))
}

ordenada = ordenaLista(lista)
ordenada.forEach(cliente => {console.log(cliente.descricao)})

/*console.log(cliente.descricao)

cliente.setNome("Lucas da Silva Alves")

console.log(cliente.descricao)

console.log(endereco.getRuaMaiuscula())*/
