function fatorial(n) {
    let fat = 1
    for(let c = n; c> 1; c--){
        fat *= c
    }
    return fat
}

console.log(fatorial(5)) //me mostra na tela o fatorial de 5

//5!(fatorial) é o mesmo de dizer 5 x 4 x 3 x 2 x 1 = 120