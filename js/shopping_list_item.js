//jshint esversion: 6

class ShoppingListItem {
  constructor(name, description){
    this.name = name;
    this.description = description;
    this.is_done = false;

  }

  check() {
    this.is_done = true;
    return this.is_done;
  }

  uncheck(){
    this.is_done = false;
    return this.is_done;

  }

  render(){
    var htmlString = `<li class="completed_${this.is_done}"><span>${this.name}</span><span>${this.description}</span></li>`;
    return htmlString;
  }


}


var firstItem = new ShoppingListItem("rare candy", "1 level up");
//console.log(firstItem.render());

module.exports = ShoppingListItem;