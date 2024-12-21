const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')

let minhaListaDeTarefas = []

function adicionarNovaTarefa() {
    if (input.value.trim() !== "") {
        minhaListaDeTarefas.push({ 
            tarefa: input.value.trim(),
            concluida: false
        })
        input.value = ''
        mostrarTarefas()
    } else {
        alert("Por favor, insira uma tarefa válida.")
    }
}

function mostrarTarefas() {
    let novaLi = ''

    minhaListaDeTarefas.forEach((item, posicao) => {
        novaLi += `
            <li class="task ${item.concluida ? 'done' : ''}">
                <img src="./img/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${posicao})">
                <p>${item.tarefa}</p>
                <img src="./img/trash.png" alt="tarefa-para-o-lixo" onclick="deletarItem(${posicao})">
            </li>
        `
    })

    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(minhaListaDeTarefas))

}

function concluirTarefa(posicao) {
    minhaListaDeTarefas[posicao].concluida = !minhaListaDeTarefas[posicao].concluida
    mostrarTarefas()
}

function deletarItem(posicao) {
    minhaListaDeTarefas.splice(posicao, 1)
    mostrarTarefas()
}

function recarregarLista() {
    const tarefasDoLocalStorage = localStorage.getItem('lista')
    if (tarefasDoLocalStorage) {
        minhaListaDeTarefas = JSON.parse(tarefasDoLocalStorage)
        mostrarTarefas()
    }
}
recarregarLista()
button.addEventListener('click', adicionarNovaTarefa)