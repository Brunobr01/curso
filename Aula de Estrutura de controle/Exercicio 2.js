let calculadora = window.prompt("Qual é o sinal?")
        let num1, num2
        num1 = Number(prompt("primeiro valor: "))
        num2 = Number(prompt("segundo valor: "))

switch (calculadora){
    case "+":
        document.write(`${num1} + ${num2} = ${num1 + num2}`)
         break
        }