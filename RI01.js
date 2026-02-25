const capitaoAmerica = {
    nome: 'Steve Rogers',
    codinome: 'Capitão América',
    armaPrincipal: "Escudo",
    armaSecundaria: '',
    velocidade: 50,
    forca: 75,
    resistencia: 80,
    descricao() {
        return `Nome: ${this.nome}
        Codinome: ${this.codinome}
        Arma Principal: ${this.armaPrincipal}
        Arma Secundária: ${this.armaSecundaria || '—'}
        Velocidade: ${this.velocidade}
        Força: ${this.forca}
        Resistência: ${this.resistencia}`;
    }
}

const homemDeFerro = {
    nome: 'Tony Stark',
    codinome: 'Homem de Ferro',
    armaPrincipal: "Propulsor de Plasma",
    armaSecundaria: '',
    velocidade: 60,
    forca: 60,
    resistencia: 80,
    descricao() {
        return `Nome: ${this.nome}
        Codinome: ${this.codinome}
        Arma Principal: ${this.armaPrincipal}
        Arma Secundária: ${this.armaSecundaria || '—'}
        Velocidade: ${this.velocidade}
        Força: ${this.forca}
        Resistência: ${this.resistencia}`;
    }
}

const viuvaNegra = {
    nome: 'Natasha Romanoff',
    codinome: 'Viuva Negra',
    armaPrincipal: "Pugilista",
    armaSecundaria: '',
    velocidade: 55,
    forca: 40,
    resistencia: 30,
    descricao() {
        return `Nome: ${this.nome}
        Codinome: ${this.codinome}
        Arma Principal: ${this.armaPrincipal}
        Arma Secundária: ${this.armaSecundaria || '—'}
        Velocidade: ${this.velocidade}
        Força: ${this.forca}
        Resistência: ${this.resistencia}`;
    }
}

const gaviaoArqueiro = {
    nome: 'Clinton Francis',
    codinome: 'Gavião Arqueiro',
    armaPrincipal: "Arco e Flecha",
    armaSecundaria: '',
    velocidade: 85,
    forca: 75,
    resistencia: 80,
    descricao() {
        return `Nome: ${this.nome}
        Codinome: ${this.codinome}
        Arma Principal: ${this.armaPrincipal}
        Arma Secundária: ${this.armaSecundaria || '—'}
        Velocidade: ${this.velocidade}
        Força: ${this.forca}
        Resistência: ${this.resistencia}`;
    }
}

const homemAranha = {
    nome: 'Peter Parker',
    codinome: 'Homem Aranha',
    armaPrincipal: "Pugilista",
    armaSecundaria: '',
    velocidade: 90,
    forca: 80,
    resistencia: 80,
    descricao() {
        return `Nome: ${this.nome}
        Codinome: ${this.codinome}
        Arma Principal: ${this.armaPrincipal}
        Arma Secundária: ${this.armaSecundaria || '—'}
        Velocidade: ${this.velocidade}
        Força: ${this.forca}
        Resistência: ${this.resistencia}`;
    }
}

const thor = {
    nome: 'Thor',
    codinome: 'Thor',
    armaPrincipal: "Myolnir",
    armaSecundaria: '',
    velocidade: 85,
    forca: 95,
    resistencia: 80,
    descricao() {
        return `Nome: ${this.nome}
        Codinome: ${this.codinome}
        Arma Principal: ${this.armaPrincipal}
        Arma Secundária: ${this.armaSecundaria || '—'}
        Velocidade: ${this.velocidade}
        Força: ${this.forca}
        Resistência: ${this.resistencia}`;
    }
}

personagens = [capitaoAmerica, homemDeFerro, viuvaNegra, gaviaoArqueiro, homemAranha, thor]

function comparaHerois(lista){
    for (let i = 0 ;i < lista.length; i++) {
        for (let y = i + 1; y < lista.length; y++) {
            let heroi1 = lista[i]
            let heroi2 = lista[y]

            let heroi1Pontos = 0
            let heroi2Pontos = 0

            console.log('---- Nova Comparação ----')
            console.log(`\n ${heroi1.codinome} VS ${heroi2.codinome}\n`)
            console.log(`Heroi 1: \n ${heroi1.descricao()}\n`)
            console.log(`Heroi 2: \n ${heroi2.descricao()}\n`)
            
            if (heroi1.velocidade > heroi2.velocidade) heroi1Pontos++
            else if (heroi1.velocidade < heroi2.velocidade) heroi2Pontos++
            else {heroi1Pontos++, heroi2Pontos++}

            if (heroi1.forca > heroi2.forca) heroi1Pontos++
            else if (heroi1.forca < heroi2.forca) heroi2Pontos++
            else {heroi1Pontos++, heroi2Pontos++}

            if (heroi1.resistencia > heroi2.resistencia) heroi1Pontos++
            else if (heroi1.resistencia < heroi2.resistencia) heroi2Pontos++
            else {heroi1Pontos++, heroi2Pontos++}

            console.log(`Pontos: ${heroi1.codinome} = ${heroi1Pontos} | ${heroi2.codinome} = ${heroi2Pontos}\n`)

            if (heroi1Pontos > heroi2Pontos) {
                console.log(`${heroi1.codinome} Venceu !`)
            }else if (heroi1Pontos < heroi2Pontos){
                console.log(`${heroi2.codinome} Venceu !`)
            }else{
                console.log('Foi um Empate !')
            }
            console.log('-------------------------\n')

        }
    }
}

comparaHerois(personagens)

//console.log(personagens[0].descricao())