var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', delItem);
    
function addItem(e){
    e.preventDefault();
    var newItem = document.getElementById('item').value;
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));
    var btn = document.createElement('button');
    var btn1 = document.createElement('button');
    btn.className ="btn btn-danger btn-sm float-right delete";
    btn.appendChild(document.createTextNode('X'));
    btn1.className ="btn btn-danger btn-sm float-right delete";
    btn1.appendChild(document.createTextNode('EDIT'));
    li.appendChild(btn);
    li.appendChild(btn1);
    
    
    itemList.appendChild(li);
}

function delItem(e){
    e.preventDefault();
    if(e.target.classList.contains('delete')){
        if(confirm('Are you fucking Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }

}