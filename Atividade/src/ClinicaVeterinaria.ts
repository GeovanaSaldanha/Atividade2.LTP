export class Animal {
    nome: string
    idade: number
    peso: number

    constructor(nome: string, idade: number, peso: number) {
        this.nome = nome
        this.idade = idade
        this.peso = peso
    }

    fichaClinica(): string {
        return `Nome: ${this.nome} | Idade: ${this.idade} anos | Peso: ${this.peso} kg`
    }

    calcularIdadeHumana(): number {
        return this.idade
    }
}

export class Domestico extends Animal {
    dono: string

    constructor(nome: string, idade: number, peso: number, dono: string) {
        super(nome, idade, peso)
        this.dono = dono
    }

    fichaClinica(): string {
        return `${super.fichaClinica()} | Dono: ${this.dono}`
    }
}

export class Silvestre extends Animal {
    habitat: string

    constructor(nome: string, idade: number, peso: number, habitat: string) {
        super(nome, idade, peso)
        this.habitat = habitat
    }

    fichaClinica(): string {
        return `${super.fichaClinica()} | Habitat: ${this.habitat}`
    }
}

export class Mamifero extends Animal {}
export class Ave extends Animal {}
export class Reptil extends Animal {}
export class Anfibio extends Animal {}

export class Cachorro extends Domestico {
    raca: string

    constructor(nome: string, idade: number, peso: number, dono: string, raca: string) {
        super(nome, idade, peso, dono)
        this.raca = raca
    }

    fichaClinica(): string {
        return `${super.fichaClinica()} | Tipo: Mamífero | Raça: ${this.raca}`
    }

    calcularIdadeHumana(): number {
        return this.idade * 7
    }
}

export class Gato extends Domestico {
    raca: string

    constructor(nome: string, idade: number, peso: number, dono: string, raca: string) {
        super(nome, idade, peso, dono)
        this.raca = raca
    }

    fichaClinica(): string {
        return `${super.fichaClinica()} | Tipo: Mamífero | Raça: ${this.raca}`
    }

    calcularIdadeHumana(): number {
        return this.idade * 6
    }
}

export class Coruja extends Silvestre {
    especie: string

    constructor(nome: string, idade: number, peso: number, habitat: string, especie: string) {
        super(nome, idade, peso, habitat)
        this.especie = especie
    }

    fichaClinica(): string {
        return `${super.fichaClinica()} | Tipo: Ave | Espécie: ${this.especie}`
    }

    calcularIdadeHumana(): number {
        return this.idade * 5
    }
}

export class Cobra extends Silvestre {
    raca: string

    constructor(nome: string, idade: number, peso: number, habitat: string, raca: string) {
        super(nome, idade, peso, habitat)
        this.raca = raca
    }

    fichaClinica(): string {
        return `${super.fichaClinica()} | Tipo: Réptil | Raça: ${this.raca}`
    }

    calcularIdadeHumana(): number {
        return this.idade * 4
    }
}