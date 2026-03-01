class Endereco {
    public numero
    public rua 
    public bairro
    public cidade

    constructor(numero: number, rua: string, bairro: string, cidade: string){
        this.numero = numero
        this.rua = rua
        this.bairro = bairro
        this.cidade = cidade
    }
}

export { Endereco }