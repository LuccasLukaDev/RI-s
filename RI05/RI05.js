import { Descritor } from './descritorEmpresa.js'
import { Funcionario } from './funcionario.js'
import { Telefone } from './telefone.js'
import { Empresa } from './empresa.js'
import { Endereco } from './endereco.js'

let telefone = new Telefone('11', '111111111')
let endereco = new Endereco(123, 'Av.Paulista', 'Jardim Paulista', 'São Paulo')
let funcionario = new Funcionario('Tony Stark', '123456789', '999.999.999-99', endereco, telefone)
let funcionario1 = new Funcionario('Tonyyy Stark2', '123456789', '999.999.999-99', endereco, telefone)

let funcionarios = [funcionario, funcionario1]
let telefones = [telefone]

let empresa = new Empresa('ABC LTDA', 'Mercado Online', '999-999-999-999-99', endereco, funcionarios, telefones)

let descritor = new Descritor()
console.log(descritor.descrever(empresa))

