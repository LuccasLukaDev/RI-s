function Cliente (nome, telefone, email, endereco) {
        this.nome = nome
        this.email = email
        this.endereco = endereco
        this.telefone = telefone

        this.getNomeMaiuscula = () => {return this.nome.toUpperCase()}
        this.getNomeMinuscula = () =>  {return this.nome.toLowerCase()}
        this.getNome = () => {return this.nome}
        this.setNome = () => {this.nome = novoNome}

        this.getEmailMaiuscula = () => {return this.email.toUpperCase()}
        this.getEmailMinuscula = () => {return this.email.toLowerCase()}
        this.getEmail = () => {return this.email}
        this.setEmail = (novoEmail) =>  {this.email = novoEmail}

        this.descricao = () => {
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


function Endereco(siglaEstado,cidade, rua, numero) {
        this.siglaEstado = siglaEstado
        this.cidade = cidade
        this.rua = rua
        this.numero = numero

        this.getSiglaEstadoMaiuscula = () => {return this.siglaEstado.toUpperCase()}
        this.getSiglaEstadoMinuscula = () => {return this.siglaEstado.toLowerCase()}
        this.getSiglaEstado = () => {return this.siglaEstado}
        this.setSiglaEstado = (novaSigla) => {this.siglaEstado = novaSigla}
        
        this.getCidadeMaiuscula = () => {return this.cidade.toUpperCase()}
        this.getCidadeMinuscula = () => {return this.cidade.toLowerCase()}
        this.getCidade = () => {return this.cidade}
        this.setCidade = (novaCidade) => {this.cidade = novaCidade}

        this.getRuaMaiuscula = () => {return this.rua.toUpperCase()}
        this.getRuaMinuscula = () => {return this.rua.toLowerCase()}
        this.getRua = () => {return this.rua}
        this.setRua = (novaRua) => {this.rua = novaRua}

        this.getNumero = () => {return this.numero}
        this.setNumero = (novoNumero) => {this.numero = novoNumero}
    }

function Telefone (ddd, numeroTelefone) {
        this.ddd = ddd
        this.numeroTelefone = numeroTelefone
        this.getDDD = () => {return this.ddd}
        this.setDDD = (novoDDD) => {this.ddd = novoDDD}

        this.getNumero = () => {return this.numeroTelefone}
        this.setNumero = (novoNumero) =>  {this.numeroTelefone = novoNumero}
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
ordenada.forEach(cliente => {console.log(cliente.descricao())})

/*console.log(cliente.descricao)

cliente.setNome("Lucas da Silva Alves")

console.log(cliente.descricao)

console.log(endereco.getRuaMaiuscula())*/
