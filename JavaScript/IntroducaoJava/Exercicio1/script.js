const botao1 = document.querySelector(".executa01")

/*
//Obtem valor:

const obtemValor = seletor =>{
    const val = document.querySelector(seletor).innerHTML = `<h3>${valor}</h3>`
}

//Calcula soma
const somar = (num1 + num2) => num1 + num2

//Atividade 1
botao1.addEventListener("click", () =>{
    const num1 = obtemValor("questao01-val01")
    const num2 = obtemValor("questao01-val02")
    escreveValor("#resp01".somar(num1, num2))
 
 })


*/

botao1.addEventListener("click", () =>{
   const val1 = document.querySelector("#questao01-val01")
   const val2 = document.querySelector("#questao01-val02")
   const soma = parseFloat(val1.value) + parseFloat(val2.value)
  //Inserção de conteudos na pag
   document.querySelector("#resp01").innerHTML = "<h3>" + soma + "</h3>"

})