import { Cliente, Telefone, Endereco, Empresa } from "./RI04_MODULO.js"

const enderecoCliente0 = new Endereco('sp', 'são josé dos campos', 'av andrômeda', '985')
const cliente0 = new Cliente('joão', enderecoCliente0, '99999999999')

const telefone1Cliente0 = new Telefone('99','99999999')
const telefone2Cliente0 = new Telefone('88', '88888888')
cliente0.addTelefone(telefone1Cliente0)
cliente0.addTelefone(telefone2Cliente0)

const enderecoCliente1 = new Endereco('sp', 'são josé dos campos', 'av andrômeda', '984')
const cliente1 = new Cliente('gabriel', enderecoCliente1, '88888888888')

const telefone1Cliente1 = new Telefone('77', '777777777')
const telefone2Cliente1 = new Telefone('66', '666666666')
cliente1.addTelefone(telefone1Cliente1)
cliente1.addTelefone(telefone2Cliente1)

const enderecoCliente2 = new Endereco('sp', 'são josé dos campos', 'av andrômeda', '983')
const cliente2 = new Cliente('barbara', enderecoCliente2, '77777777777')

const telefone1Cliente2 = new Telefone('55', '555555555')
const telefone2Cliente2 = new Telefone('44', '444444444')
cliente2.addTelefone(telefone1Cliente2)
cliente2.addTelefone(telefone2Cliente2)

const enderecoCliente3 = new Endereco('sp', 'são josé dos campos', 'av andrômeda', '982')
const cliente3 = new Cliente('márcia', enderecoCliente3, '66666666666')

const telefone1Cliente3 = new Telefone('33', '333333333')
const telefone2Cliente3 = new Telefone('22', '222222222')
cliente3.addTelefone(telefone1Cliente3)
cliente3.addTelefone(telefone2Cliente3)

const enderecoCliente4 = new Endereco('sp', 'são josé dos campos', 'av andrômeda', '981')
const cliente4 = new Cliente('lucas', enderecoCliente4, '55555555555')

const telefone1Cliente4 = new Telefone('11', '111111111')
const telefone2Cliente4 = new Telefone('00', '000000000')
cliente4.addTelefone(telefone1Cliente4)
cliente4.addTelefone(telefone2Cliente4)

const enderecoEmpresa = new Endereco('sp', 'são josé dos campos', 'av andrômeda', '987')
const empresa = new Empresa('abc ltda', 'mercado online', '0987654321', enderecoEmpresa)

const telefoneEmpresa0 = new Telefone('12', '1234567890')
const telefoneEmpresa1 = new Telefone('13', '5432109876')

empresa.addTelefone(telefoneEmpresa0)
empresa.addTelefone(telefoneEmpresa1)

empresa.addCliente(cliente0)
empresa.addCliente(cliente1)
empresa.addCliente(cliente2)
empresa.addCliente(cliente3)
empresa.addCliente(cliente4)

console.log(empresa.detalhe())

// empresa.getTelefones()
// empresa.getClientes()
// cliente0.getTelefones()