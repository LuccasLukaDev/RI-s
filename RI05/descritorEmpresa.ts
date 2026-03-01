import { Empresa } from "./empresa"

class Descritor {
    descrever(empresa: Empresa) {
        
        let descreverFuncionarios = empresa.funcionarios.map(fun => {
        return `
        Nome: ${fun.nome}
        Matricula: ${fun.matricula}
        Cpf: ${fun.cpf}
        Telefone: 
        DDD: ${fun.telefone.ddd} | Número: ${fun.telefone.numero}
        Endereço:
        Rua: ${fun.endereco.rua} | Bairro: ${fun.endereco.bairro}
        `
        }).join(``)

        return `
        Razão Social: ${empresa.razaoSocial}
        Nome Fantasia: ${empresa.nomeFantasia}
        Telefone: 
        DDD: ${empresa.telefone.ddd} | Número: ${empresa.telefone.numero}
        Endereço
        Rua: ${empresa.endereco.rua} | Bairro: ${empresa.endereco.bairro}

        Funcionários:
        ${descreverFuncionarios}
        `
    }
}

export { Descritor }