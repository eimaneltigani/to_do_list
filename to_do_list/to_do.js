
var submit = document.getElementById('submit');

// add new list item when submitted 
function addLi () {
    var input = document.getElementById('todo').value;
    var list = document.querySelector('#list');
    var newLi = document.createElement('li');
    var output = document.createTextNode(input);

    if (input === '') {
        alert("You sure you have nothing else to do?");
    }  else {
        newLi.appendChild(output);
        list.appendChild(newLi);
    }

    // clear input box
    document.getElementById("todo").value='';
}

// remove list item when clicked
const listItems = document.querySelectorAll('li');
let listArray  =  Array.from(listItems);

for (var i = 0; i < listArray.length; i++) {
    listItems[i].addEventListener('click', function() {
        this.parentNode.removeChild(this);
    })
}



