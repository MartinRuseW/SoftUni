function addItem() {
    //read input value
    const text = document.getElementById('newItemText').value;

    //create new <li>
    const li = document.createElement('li');
    li.textContent = text;

    //create delete button
    const deleteBtn = document.createElement('a');
    deleteBtn.href = '#';
    deleteBtn.textContent = '[Delete]';

    //delete the input item
    deleteBtn.addEventListener('click', () => li.remove());

    //add button to <li>
    li.appendChild(deleteBtn);

    //obtain reference to list element
    const list = document.getElementById('items');

    //add new li to list
    list.appendChild(li);
}