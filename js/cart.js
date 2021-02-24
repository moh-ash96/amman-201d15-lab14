/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  localStorage.clear();
}
// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  
  // TODO: Find the table body
  let tBody = document.getElementsByTagName('tbody')[0];
  
  
  // TODO: Iterate over the items in the cart
  for ( let i = 0; i < cart.items.length; i++){
    
    // TODO: Create a TR
    let tableRaw = document.createElement('tr');
    tBody.appendChild(tableRaw);
    
    let tableDataRemove = document.createElement('td');
    tableRaw.appendChild(tableDataRemove);
    
    let tableDataQuantity = document.createElement('td');
    tableRaw.appendChild(tableDataQuantity);
    tableDataQuantity.textContent=cart.items[i].quantity;



    let tableDataItem = document.createElement('td');
    tableRaw.appendChild(tableDataItem);
    tableDataItem.textContent=cart.items[i].product;
    // TODO: Create a TD for the delete link, quantity,  and the item
    
    let img = document.createElement('img');
    tableDataRemove.appendChild(img);
    img.src="assets/cross.png";
    let src= document.getElementById('cart-container');
    src.appendChild(img);
    tableDataRemove.appendChild(img);
    img.addEventListener('click',removeItemFromCart);
    //console.log(img);
    // tableDataRemove.textContent('123')
    // console.log(tableDataRemove);




    // console.log(tBody);
    console.log(cart.items[i]);
  }
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
}
function removeItemFromCart(event) {
  
  event.preventDefault();
  
   cart.removeItem();

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage


  console.log(event);
  cart.saveToLocalStorage();
  // TODO: Re-draw the cart table
  renderCart();



}

// This will initialize the page and draw the cart on screen
renderCart();
