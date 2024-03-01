const objeto ={

 listaDeNomes: ["Bruno", "Gabriel", "Amanda", "Carolinna"]

}
let maiorNome = ""
let nomesSemEspacos = ""
for (let nome of objeto.listaDeNomes){
    nomesSemEspacos = nome.replace (/\s/g,"")
    if (nome.length > maiorNome.length){
        maiorNome = nome
    }
}
console.log("Maior nome:"+ maiorNome)