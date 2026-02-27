class Cliente {
    #cpf
    constructor(nome, endereco, cpf) {
        this.nome = nome
        this.#cpf = cpf
        this.telefones = new Set()
        this.endereco = endereco
    }
    getCpf() { return this.#cpf }

    getNomeMaiusculo() { return this.nome.toUpperCase() }
    getNomeMinusculo() { return this.nome.toLowerCase() }

    getTelefones() {
        this.telefones.forEach(telefone => {
           return console.log(telefone)
        })
    }

    addTelefone(novoTelefone) { return this.telefones.add(novoTelefone) }
}

class Telefone {
    constructor(ddd, numeroTelefone) {
        this.ddd = ddd
        this.numeroTelefone = numeroTelefone
    }
}

class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado
        this.cidade = cidade
        this.rua = rua
        this.numero = numero
    }

    getEstadoMaiusculo() { return this.estado.toUpperCase() }
    getEstadoMinusculo() { return this.estado.toLowerCase() }

    getCidadeMaiusculo() { return this.cidade.toUpperCase() }
    getCidadeMinusculo() { return this.cidade.toLowerCase() }

    getRuaMaiusculo() { return this.rua.toUpperCase() }
    getRuaMinusculo() { return this.rua.toLowerCase() }
}

class Empresa {
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.endereco = endereco
        this.razaoSocial = razaoSocial
        this.nomeFantasia = nomeFantasia
        this.#cnpj = cnpj
        this.clientes = new Set()
        this.telefones = new Set()
    }
    getCnpj() { return this.#cnpj }

    getRazaoSocialMaiusculo() { return this.razaoSocial.toUpperCase() }
    getRazaoSocialMinusculo() { return this.razaoSocial.toLowerCase() }

    getNomeFantasiaMaiusculo() { return this.nomeFantasia.toUpperCase() }
    getNomeFantasiaMinusculo() { return this.nomeFantasia.toLowerCase() }

    getTelefones() {
        this.telefones.forEach(telefone => {
           return console.log(telefone)
        })
    }

    getClientes() {
        this.clientes.forEach(cliente => {
           return console.log(`Nome: ${cliente.getNomeMaiusculo()} | CPF: ${cliente.getCpf()}`)
        })
    }

    addTelefone(novoTelefone) { this.telefones.add(novoTelefone) }
    addCliente(novoCliente) { this.clientes.add(novoCliente) }

    detalhe() {
        let texto = ` 
        Razão Social: ${this.getRazaoSocialMaiusculo()}
        Nome Fantasia: ${this.getNomeFantasiaMaiusculo()}
        --------------------
        `
        this.clientes.forEach(cliente => {
        texto += `
        Nome: ${cliente.getNomeMaiusculo()}
        Estado: ${cliente.endereco.getEstadoMaiusculo()} | Cidade: ${cliente.endereco.getCidadeMaiusculo()} | Rua: ${cliente.endereco.getRuaMaiusculo()} | Número: ${cliente.endereco.numero}
        `
        cliente.telefones.forEach(tel => {
        texto += `Ddd: ${tel.ddd} Número de Telefone: ${tel.numeroTelefone}\n\t`
        })
        texto += `\n`
        })
        return texto
    }
}

export { Cliente, Telefone, Endereco, Empresa }