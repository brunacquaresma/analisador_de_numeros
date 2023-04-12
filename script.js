let numerosAdicionados = [];

function adicionar() {
let number = document.querySelector('input#number')
let res = document.getElementById('analisador')

    if(number.value.length == 0 || number.value > 100 || number.value < 1 || numerosAdicionados.includes(Number(number.value))) {
        alert('Valor inválido ou já encontrado na lista')
    } else {
            numerosAdicionados.push(Number(number.value))
            let item = document.createElement('option')
            item.text = `Valor ${number.value} adicionado.`
            res.appendChild(item)
    }
    number.value = ''
    number.focus()  // Apaga o valor digitado para add e coloca o foco no input novamente, flui melhor.
}

function finalizar() {
    if(numerosAdicionados == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
    let aoTodo = document.getElementById('aotodo')
    aoTodo.innerHTML = `Ao todo, temos ${numerosAdicionados.length} números cadastrados.`

    let maiorValor = document.getElementById('maiorvalor')
    let maiorValore = Math.max(...numerosAdicionados)  // o método Math.max() é usado para encontrar o maior valor na lista numerosAdicionados. O spread operator ... é usado para transformar o array em uma lista de argumentos, que é passada para o método Math.max(). O resultado é armazenado na variável maiorValore, que é usada para exibir a mensagem de saída no console e também atualizar o elemento HTML com ID "maiorvalor" usando o método innerHTML.
    maiorValor.innerHTML = `O maior valor informado foi ${maiorValore}.`

    let menorValor = document.getElementById('menorvalor')
    let menorValore = Math.min(...numerosAdicionados)
    menorValor.innerHTML = `O menor valor informado foi ${menorValore}.`

    let soma = document.getElementById('soma')
    let Soma = 0
        for(let i = 0; i < numerosAdicionados.length; i++){
            Soma += numerosAdicionados[i]
        }
    soma.innerHTML = `Somando todos os valores, temos ${Soma}.`

    let media = document.getElementById('media')
    let Media = Soma / numerosAdicionados.length
    media.innerHTML = `A média dos valores digitados é ${Media}.`
    }
}
