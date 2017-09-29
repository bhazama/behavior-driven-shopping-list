//jshint esversion: 6

class ShoppingList {
  constructor(items){
    this.items = [];
  }

  addItem(shoppingItem){
    //this.ShoppingListItem =ShoppingListItem;
    if(shoppingItem instanceof ShoppingListItem){
    this.items.push(shoppingItem);}
    else{
      return "not a valid input";
    }
    //console.log(ShoppingListItem, this.items);
  }

  removeItem(shoppingItem){
    let itemArr = this.items;
    if(itemArr.includes(shoppingItem)){
      let itemIndex = itemArr.indexOf(shoppingItem);
      itemArr.splice(itemIndex,1);
    } else if(!shoppingItem && itemArr.length > 0){
      itemArr.splice(itemArr.length - 1, 1);
    }else {
      return "Not a valid input";
    }

  }

  render(){
    let itemArr = [];
    for(let i = 0; i < this.items.length; i++){
      itemArr.push(this.items[i].render(i));
      // console.log(itemArr);
    }
  var strList = itemArr.join(' ');
  console.log(strList);
  return '<ul>' + strList + '</ul>';

  }




}


// var list = new ShoppingList();
// let greenStuff = new ShoppingListItem("broccoli", "vegetable");
// let blueStuff = new ShoppingListItem("blueberries", "fruit");
//   list.addItem(greenStuff);
//   list.addItem(blueStuff);

// console.log(newList.render());









// var foodlandList = new ShoppingList();
// foodlandList.addItem("banana");
// //console.log(ShoppingListItem,this.items);