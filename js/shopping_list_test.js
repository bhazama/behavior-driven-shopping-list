//jshint esversion: 6
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should;


//TESTS FOR ShoppingListItem CLASS

describe('ShoppingListItem', function(){
  let listItem = new ShoppingListItem();

  it("should be a class", function(){
    expect(ShoppingListItem).to.be.a('function');
    expect(listItem).to.be.an('object');
  });

  it("expect item to have a name property", function(){
    expect(listItem).to.have.property("name");
  });

  it("expect item to have a description property", function(){
    expect(listItem).to.have.property("description");
  });

  it("expect item to have a is_done property", function(){
    expect(listItem).to.have.property("is_done");
  });

  it("expect item constructor to have two arguments", function(){
    expect(listItem.constructor).to.have.length(2);
  });

  // it("expect item to have a check method", function(){
  //   listItem.check.should.be.a.function;
  // });
});

//TESTS FOR CHECK METHOD

describe('check', function(){
  let listItem = new ShoppingListItem();

  it("should be a method", function(){
    expect(listItem.check).to.be.a('function');

  });

  it("should set is_done to true", function(){
    listItem.check();
    expect(listItem.is_done).to.be.true;
  });

});

//TEST FOR UNCHECK METHOD

  describe('uncheck', function(){
    let listItem = new ShoppingListItem();

    it("should be a method", function(){
      expect(listItem.uncheck).to.be.a('function');
    });

    it("should set is_done to false", function(){
      expect(listItem.is_done).to.be.false;
    });

  });

  //TEST FOR RENDER METHOD

  describe("render", function(){
    let listItem = new ShoppingListItem("cardinal", "bird");

    it("should be a method", function(){
      expect(listItem.render).to.be.a('function');
      });

    it("should return a string", function(){
      expect(listItem.render()).to.be.a('string');
    });

    it("should return an html formatted string", function(){
      expect(listItem.render()).to.equal(`<li class="completed_${listItem.is_done}"><span>${listItem.name}</span><span>${listItem.description}</span></li>`);
    });





  });

  //TESTS FOR ShoppingList CLASS

  describe("ShoppingList", function(){
    let list = new ShoppingList();

  it("should be a class", function(){
    expect(ShoppingList).to.be.a('function');
  });

  it("should have an items property", function(){
    expect(list).to.have.property("items");
  });

  it("should have 1 constructor argument", function(){
    expect(list.constructor).to.have.length(1);
  });

  it("items should be an empty array", function(){
    expect(list.items).to.be.empty;
  });

});

 // TESTS FOR addItem METHOD

 describe("addItem", function(){
  let list = new ShoppingList();
  let food = new ShoppingListItem("broccoli");
  // list.addItem();

  it("should be a method", function(){
    expect(list.addItem).to.be.a('function');
  });

  // it("should have a property called ShoppingListItem", function(){
  //   expect(list).to.have.property("ShoppingListItem");
  // });

  it("ShoppingListItem should be added to items array", function(){
    list.addItem("broccoli");
    expect(list.items).to.include("broccoli");
    expect(list.addItem("carrots")).to.be.a("string");
  });

  it("should throw error if not a ShoppingListItem", function(){
    expect(list.addItem.bind(list, Number)).to.throw(Error);
  });

 });
















