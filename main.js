let salário = prompt('Entre com um salário entre 1300-5000:')

if (salário >= 4000) {
    alert('Você é chéfe')
}
else if (salário >= 3000) {
    alert('Você ganha muito bem.')
}
else if (salário >= 2000) {
    alert('Você ganha bem.')
}
else if (salário >= 1300) {
    alert('Você tem um salário mínimo.')
}
else {  //retorno padrão/defult
      //programação defensiva  
    alert('Inválido!')
}