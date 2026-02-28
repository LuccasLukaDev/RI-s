class Descritor {
    descrever(empresa) {
        
        let descreverFuncionarios = empresa.funcionarios.map(fun => {
        return `
        Nome: ${fun.nome}
        Matricula: ${fun.matricula}
        Cpf: ${fun.cpf}
        Endereço
        Rua: ${fun.endereco.rua} | Bairro: ${fun.endereco.bairro}
        `
        }).join(``)

        return `
        Razão Social: ${empresa.razaoSocial}
        Nome Fantasia: ${empresa.nomeFantasia}
        Endereço
        Rua: ${empresa.endereco.rua} | Bairro: ${empresa.endereco.bairro}

        Funcionários:
        ${descreverFuncionarios}
        `
    }
}

export { Descritor }