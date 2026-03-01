import { Endereco } from "./endereco"
import { Telefone } from "./telefone"

class Funcionario {
    public nome
    public matricula
    public cpf
    public endereco
    public telefone
    
    constructor(nome: string, matricula: string, cpf: string, endereco: Endereco, telefone: Telefone){
        this.nome = nome
        this.matricula = matricula
        this.cpf = cpf
        this.endereco = endereco
        this.telefone = telefone
    }
}

export { Funcionario }