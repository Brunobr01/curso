let Compras = {
    Produtos: {
        'Cafe': 5,
        'Açúcar': 3,
        'Nescau': 8,
        'leite': 4,
        'Biscoito': 5
    }
}
let soma = 0; 
console.log(Compras.Produtos)
for (let i in Compras.Produtos){
    soma = soma + Compras.Produtos [i]
}
console.log(soma)



// outra forma, só que ainda consertar.

let soma2 = 0
for(let Compras of Object.values(Compras.Produtos)){
    soma2 += Compras
}
console.log(soma2)

