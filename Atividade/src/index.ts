import { Cachorro, Gato, Coruja, Cobra } from "./ClinicaVeterinaria"

const animais = [
    new Cachorro("Rabito", 11, 9, "Geovana", "Dachshund e vira-lata"),
    new Gato("Blue", 1, 3.5, "Geovana", "SRD cinza"),
    new Coruja("Delta", 6, 0.8, "Áreas rurais e celeiros", "Suindara"),
    new Cobra("Maru", 8, 1.8, "Florestas e áreas abertas", "Corn Snake")
]

animais.forEach(animal => {
    console.log(animal.fichaClinica())
    console.log("Idade humana:", animal.calcularIdadeHumana())
    console.log("-------------------")
})