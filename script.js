let refrigerante = 1.99 * 3
let macarrao  = 6.99 * 4
let ervilha = 6.99 * 3
let arroz = 22.99 * 3 
let feijao = 11.89 * 2
let vinho = 70.00 * 3

let total = refrigerante + macarrao + ervilha + arroz + feijao + vinho

console.log(total)

if(total % 1 == 0 ){
    console.log(`Total é ${total}, Cada amigo paga a parte igual da Compra`)
}else{
    console.log(`O total é ${total}, Você pagará metade e seu amigo pagará metade mais o valor do vinho`)
}
    //------------Extra

/*
 let precoRefrigerante = parseFloat(prompt("Digite o valor do Refrigerante"))
let quantidadeRefrigerante = parseInt(prompt("Quantas Unidades ?"))
let totalRefrigerante = precoRefrigerante * quantidadeRefrigerante

let precoMacarrao = parseFloat(prompt("Digite o valor do macarrão"))
let quantidadeMacarrao = parseInt(prompt("Quantas Unidades ?"))
let totalMarcarrao = precoMacarrao * quantidadeMacarrao

let precoErvilha = parseFloat(prompt("Digite o valor do Ervilha"))
let quantidadeErvilha = parseInt(prompt("Quantas Unidades ?"))
let totalErvilha = precoErvilha * quantidadeErvilha

let precoArroz = parseFloat(prompt("Digite o valor do Arroz"))
let quantidadeArroz = parseInt(prompt("Quantas Unidades ?"))
let totalArroz = precoArroz * quantidadeArroz

let precoFeijao = parseFloat(prompt("Digite o valor do Feijao"))
let quantidadeFeijao = parseInt(prompt("Quantas Unidades ?"))
let totalfeijao = precoFeijao * quantidadeFeijao

let precoVinho = parseFloat(prompt("Digite o valor do Vinho"))
let quantidadeVinho = parseInt(prompt("Quantas Unidades ?"))
let totalVinho = (precoVinho * quantidadeVinho)


let precoTotal = totalMarcarrao + totalRefrigerante + totalErvilha +  totalArroz + totalfeijao  + totalVinho

alert(`Valor total a ser pago: ${precoTotal}`) 
*/