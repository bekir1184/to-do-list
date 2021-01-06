const addItems = document.querySelector('.add-items')
const itemsList = document.querySelector('.todo')
const items = []

function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text,
        done: false
    }

    items.push(item)
    populateList(items, itemsList)
    this.reset()


}

function populateList(todos = [], todosList) {
    todosList.innerHTML = todos.map((todo, i) => {
        return `
        <li>
          <input type="checkbox" data-index=${i} id="item${i}" ${todo.done ? 'checked' : ''} />
          <label for="item${i}">${todo.text}</label>
        </li>
      `;
    }).join('');
}
addItems.addEventListener('submit', addItem)
populateList(items, itemsList);