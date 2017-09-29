//jshint esversion: 6

let list = new ShoppingList();

let listItem = list.render();

let content = document.getElementById("content");
content.innerHTML = listItem;

let title = document.getElementById("title");
let description = document.getElementById("description");

function add_to_shopping_list(){
  let new_shopping_list_item = new ShoppingListitem(title.value, description.value);
  list.addItem(new_shopping_list_item);
  content.innerHTML = list.render();
}

function changeCheckedStatus(idx, checkbox){

}