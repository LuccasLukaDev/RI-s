class Cliente {
    #cpf
    constructor(nome, endereco, cpf) {
        this.nome = nome
        this.telefone = new Set()
        this.endereco = endereco
        this.#cpf = cpf
    }

    getCpf() { return this.#cpf } // Metodo de acesso get

    getNomeMaiusculo() { return this.nome.toUpperCase() }
    getNomeMinusculo() { return this.nome.toLowerCase() }

    addTelefone(novoTelefone) { this.telefone.add(novoTelefone) }
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
        this.razaoSocial = razaoSocial
        this.nomeFantasia = nomeFantasia
        this.endereco = endereco
        this.#cnpj = cnpj
        this.clientes = new Set()
        this.telefones = new Set()
    }
    getCnpj(){return this.#cnpj}

    getRazaoSocialMaiusculo() { return this.razaoSocial.toUpperCase() }
    getRazaoSocialMinusculo() { return this.razaoSocial.toLowerCase() }

    getNomeFantasiaMaiusculo() { return this.nomeFantasia.toUpperCase() }
    getNomeFantasiaMinusculo() { return this.nomeFantasia.toLowerCase() }

    addCliente(novoCliente) { this.clientes.add(novoCliente) }
    addTelefone(novoTelefone) { this.telefones.add(novoTelefone) }

    detalhe() {
        let texto = ` 
        Razão Social: ${empresa.getRazaoSocialMaiusculo()}
        Nome Fantasia: ${empresa.getNomeFantasiaMaiusculo()}
        --------------------
        `
        this.clientes.forEach(cliente => {
        texto += `
        Nome: ${cliente.getNomeMaiusculo()}
        Estado: ${cliente.endereco.getEstadoMaiusculo()} | Cidade: ${cliente.endereco.getCidadeMaiusculo()} | Rua: ${cliente.endereco.getRuaMaiusculo()} | Número: ${cliente.endereco.numero}
        `
        cliente.telefone.forEach(tel => {
        texto += `Ddd: ${tel.ddd} Número de Telefone: ${tel.numeroTelefone}\n\t`
        })
        texto += `\n`
        })
        return texto
    }
}

enderecoCliente0 = new Endereco('sp', 'são josé dos campos', 'av andrômeda', '985')
cliente0 = new Cliente('joão', enderecoCliente0, '99999999999')

telefone1Cliente0 = new Telefone('99','99999999')
telefone2Cliente0 = new Telefone('88', '88888888')
cliente0.addTelefone(telefone1Cliente0)
cliente0.addTelefone(telefone2Cliente0)

enderecoCliente1 = new Endereco('sp', 'são josé dos campos', 'av andrômeda', '984')
cliente1 = new Cliente('gabriel', enderecoCliente1, '88888888888')

telefone1Cliente1 = new Telefone('77', '777777777')
telefone2Cliente1 = new Telefone('66', '666666666')
cliente1.addTelefone(telefone1Cliente1)
cliente1.addTelefone(telefone2Cliente1)

enderecoCliente2 = new Endereco('sp', 'são josé dos campos', 'av andrômeda', '983')
cliente2 = new Cliente('barbara', enderecoCliente2, '77777777777')

telefone1Cliente2 = new Telefone('55', '555555555')
telefone2Cliente2 = new Telefone('44', '444444444')
cliente2.addTelefone(telefone1Cliente2)
cliente2.addTelefone(telefone2Cliente2)

enderecoCliente3 = new Endereco('sp', 'são josé dos campos', 'av andrômeda', '982')
cliente3 = new Cliente('márcia', enderecoCliente3, '66666666666')

telefone1Cliente3 = new Telefone('33', '333333333')
telefone2Cliente3 = new Telefone('22', '222222222')
cliente3.addTelefone(telefone1Cliente3)
cliente3.addTelefone(telefone2Cliente3)

enderecoCliente4 = new Endereco('sp', 'são josé dos campos', 'av andrômeda', '981')
cliente4 = new Cliente('lucas', enderecoCliente4, '55555555555')

telefone1Cliente4 = new Telefone('11', '111111111')
telefone2Cliente4 = new Telefone('00', '000000000')
cliente4.addTelefone(telefone1Cliente4)
cliente4.addTelefone(telefone2Cliente4)

enderecoEmpresa = new Endereco('sp', 'são josé dos campos', 'av andrômeda', '987')
empresa = new Empresa('abc ltda', 'mercado online', '0987654321', enderecoEmpresa)

telefoneEmpresa0 = new Telefone('12', '1234567890')
telefoneEmpresa1 = new Telefone('13', '5432109876')
empresa.addTelefone(telefoneEmpresa0)
empresa.addTelefone(telefoneEmpresa1)

empresa.addCliente(cliente0)
empresa.addCliente(cliente1)
empresa.addCliente(cliente2)
empresa.addCliente(cliente3)
empresa.addCliente(cliente4)

// console.log(empresa.detalhe())
// console.log(empresa.getCnpj())
// empresa.telefones.forEach(telefone => {
//     console.log(telefone)
// });

