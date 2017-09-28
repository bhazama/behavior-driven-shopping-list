//jshint esversion: 6
const expect = chai.expect;
const should = chai.should;


describe('ShoppingListItem', function(){
  let listItem = new ShoppingListItem();

  // it("should be a class", function(){
  //   expect(listItem).to.be.a.(function);
  // });

  it("expect item to have a name property", function(){
    expect(listItem).to.have.property("name");
  });

  it("expect item to have a description property", function(){
    expect(listItem).to.have.property("name");
  });

  it("expect item to have a is_done property", function(){
    expect(listItem).to.have.property("is_done");
  });

  it("expect item constructor to have two arguments", function(){
    expect(listItem.constructor).to.have.length(2);
  });








});














