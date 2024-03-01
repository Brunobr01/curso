let livros = {
    'livro1': 8,
    'livro2': 0,
    'livro': 4
}
for (let livro in livros) {
    if (livros [livro] === 0){
        console.log(livro)
    }
}
//segunda forma de fazer

for (let entrada of Object.entries(livros)) {
    if (entrada [1] === 0){
        console.log(entrada[0])
    }
}
//terceira forma de fazer

for (let [name, valor] of Object.entries(livros)) {
    if (valor === 8){
        console.log(nome)}
    }
