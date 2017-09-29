//jshint esversion: 6

let list = new ShoppingList();

let listItem = list.render();

let content = document.getElementById("content");
content.innerHTML = listItem;

let title = document.getElementById("title");
let description = document.getElementById("description");