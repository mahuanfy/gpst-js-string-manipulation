function generateTodoHtml(todoItems) {
  let count = 0
  let result = `
<section>
    <header>
        <h1>todos</h1>
        <form><input type="text" autofocus="" placeholder="What needs to be done?"/></form>
    </header>
    <section>
        <input type="checkbox"/>
        <label for="toggle-all">Mark all as complete</label>
        <ul>\n`
        todoItems.map(item => {
          count = !item.completed ? count + 1 :count
            result +=`            <li>
                <div><input type="checkbox"${item.completed?` checked="checked"`:""}/><label>${item.name}</label></div>
                <form><input type="text"/></form>
            </li>\n`
          })
            
  result += `        </ul>
    </section>
    <footer>
        <strong>${count}</strong> items left
        <ul>
            <li><a href="#/">All</a></li>
            <li><a href="#/active">Active</a></li>
            <li><a href="#/completed">Completed</a></li>
        </ul>
        <button>Clear completed</button>
    </footer>
</section>
`
  
  return result;
}

module.exports = {
  generateTodoHtml: generateTodoHtml
}