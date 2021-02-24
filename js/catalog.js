/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);
//console.log(typeof cart)
let newArr=[];

let count=0;


// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  for (let i in Product.allProducts) {
    let itemName=document.createElement('option')
    selectElement.appendChild(itemName).setAttribute('value',Product.allProducts[i].name);
    itemName.textContent=Product.allProducts[i].name;
    //console.log(Product.allProducts);

  //console.log(itemName);



  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
//console.log('hi');
  // TODO: Prevent the page from reloading
  event.preventDefault();
 count++;

  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  /*let sel=document.getElementById(items);
  let opt =sel.itemName[sel.selectedIndex];
 

  console.log(opt.value);
  console.log(opt.text);
  console.log( sel.value );*/
  let x=document.getElementById("items").value;
  console.log(x);

  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  let getQuantity=document.getElementById("quantity").value;
  console.log(getQuantity);
  // TODO: using those, add one item to the Cart
cart.addItem(x,getQuantity);
//Cart.newItem;
//console.log(Cart);
//console.log(newArr);
//console.log(newItem);
 //console.log(count);
 
}


// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  /*let updateCartCount=document.getElementById("itemCount");
  let pCount= document.createElement('p');
  updateCartCount.appendChild(pCount);
  pCount.textContent=count;*/
 //let listItem=document.getElementById('itemCount');
 //itemCount.innerHTML=listItem.length;
 document.getElementById('itemCount').textContent = cart.items.length;

}


// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  let listDiv= document.getElementById("cartContents");
  listDiv.innerHTML="";
  let unordered=document.createElement("ul");
  listDiv.appendChild(unordered);

  for (let i = 0; i < cart.items.length; i++) {
    let newList=document.createElement("li");
    unordered.appendChild(newList);
    newList.textContent=cart.items[i].product+cart.items[i].quantity;

  }
 // console.log(typeof product);

  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);


// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
//cart.addItem();
//cart.saveToLocalStorage();
