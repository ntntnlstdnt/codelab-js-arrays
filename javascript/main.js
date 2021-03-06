var todos = []

var newTodoInput = document.getElementById('new-todo-input')
var todoList = document.getElementById('todo-list')
var numOfTodos = document.getElementById('number-of-todos')

function renderTodos() {
  todoList.innerHTML = todos.map(function(todo, index) {
    var string ='<li>' +
      todo +
      ' <button class="remove-todo" data-index="' + index + '">X</button>'
    if (index === 0){
      string += ' <button class="move-todo-down" data-index="' + index + '">&#8595</button>' +
    '</li>'
    } else if (index === todos.length - 1) {
      string +=  ' <button class="move-todo-up" data-index="' + index + '">&#8593</button>' +
      '</li>'
    } else {
      string += ' <button class="move-todo-up" data-index="' + index + '">&#8593</button>' +
      ' <button class="move-todo-down" data-index="' + index + '">&#8595</button>' +
      '</li>'
    }
    return string
  }).join('')
}

function renderNumberOfTodos(){
  numOfTodos.innerHTML = todos.length
}


function clearAll(){
  todos = []
  renderAll()
}

function renderAll(){
  renderTodos()
  renderNumberOfTodos()
}

function randomTodo(){
  var rand = todos[Math.floor(Math.random()*todos.length)]
  alert(rand)
  renderAll()
}

renderAll()

newTodoInput.onkeypress = function(event) {
  if (event.which === 13) {
    todos.push(this.value)
    this.value = ''
    renderAll()
  }
}

todoList.onclick = function(event) {
  var clickedElement = event.target
  var idx = clickedElement.dataset.index
  if (clickedElement.className === 'remove-todo') {
    todos.splice(idx, 1)
  } else if (clickedElement.className === 'move-todo-up') {
    var temp = todos[idx]
    todos[idx] = todos[idx - 1]
    todos[idx -1] = temp
  } else if (clickedElement.className === 'move-todo-down') {
    var temp = todos[idx]
    todos[idx] = todos[idx - (-1)]
    todos[idx - (-1)] = temp
  }
  renderAll()
}
