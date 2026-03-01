import { Endereco } from "./endereco"
import { Funcionario } from "./funcionario"
import { Telefone } from "./telefone"

class Empresa {
    public razaoSocial
    public nomeFantasia
    public cnpj
    public endereco
    public funcionarios
    public telefone

    constructor(razaoSocial: string, nomeFantasia: string, cnpj: string, endereco: Endereco, funcionarios: Funcionario[], telefone:Telefone){
        this.razaoSocial = razaoSocial
        this.nomeFantasia = nomeFantasia
        this.cnpj = cnpj
        this.endereco = endereco
        this.funcionarios = funcionarios
        this.telefone = telefone
    }
}

export { Empresa }