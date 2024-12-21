# To-Do List

Este é um simples projeto de lista de tarefas (To-Do List) desenvolvido com HTML, CSS e JavaScript. Ele permite que o usuário adicione, marque como concluída e exclua tarefas, além de salvar a lista de tarefas no `localStorage` para que as tarefas sejam mantidas mesmo após o fechamento do navegador.

## Funcionalidades

- **Adicionar tarefas**: O usuário pode adicionar tarefas à lista de afazeres.
- **Marcar tarefas como concluídas**: Ao clicar no ícone de check, a tarefa é marcada como concluída.
- **Excluir tarefas**: O usuário pode excluir tarefas da lista.
- **Persistência de dados**: As tarefas são salvas no `localStorage` do navegador, garantindo que elas não desapareçam quando a página for recarregada.

## Tecnologias utilizadas

- **HTML**: Para a estrutura da página.
- **CSS**: Para o estilo visual da lista de tarefas.
- **JavaScript**: Para a lógica do funcionamento das tarefas, manipulação do DOM e armazenamento local.

## Como usar

1. Clone o repositório ou baixe os arquivos.
2. Abra o arquivo `index.html` em seu navegador.
3. Comece a adicionar, concluir e excluir tarefas diretamente na interface.

### Requisitos

- Um navegador moderno que suporte JavaScript e `localStorage`.

## Estrutura do projeto

/to-do-list │ ├── index.html # Arquivo HTML principal ├── style.css # Arquivo de estilos ├── scripts.js # Arquivo JavaScript com a lógica das tarefas ├── /img # Pasta de imagens (ícones de check e lixeira) │


## Como funciona

1. **Adicionar uma nova tarefa**: O usuário insere o texto da tarefa no campo de entrada e clica em "Adicionar". A tarefa é então adicionada à lista.
2. **Concluir tarefa**: Ao clicar no ícone de "check", a tarefa é marcada como concluída, com um efeito de riscado e mudança de cor.
3. **Excluir tarefa**: Ao clicar no ícone de "lixeira", a tarefa é removida da lista.
4. **Persistência de dados**: As tarefas são salvas no `localStorage`, de forma que, mesmo após o fechamento do navegador, a lista de tarefas será recuperada.

## Personalização

- Você pode alterar o estilo visual no arquivo `style.css` para ajustar a aparência do aplicativo conforme suas preferências.
- Para adicionar novos ícones ou modificar os existentes, basta substituir os arquivos na pasta `img/`.

## Contribuições

Sinta-se à vontade para contribuir com melhorias ou correções. Para isso, basta fazer um fork deste repositório e enviar um pull request.


## GitHub Pages
Você pode acessar a aplicação através do seguinte link: https://mrjack357.github.io/to-do-list/

## Licença

Este projeto é de código aberto e distribuído sob a [MIT License](LICENSE).
