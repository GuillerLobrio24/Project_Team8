if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('removeButton'); 
    for (var i = 0; i < removeCartItemButtons.length;i++) {
        var button = removeCartItemButtons[i];
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input');
    for (var i = 0; i < quantityInputs.length;i++) {
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length;i++) {
        var button = addToCartButtons[i];
        button.addEventListener('click', addToCartClicked);
    }

    document.getElementsByClassName('orderButton')[0].addEventListener('click',
    purchaseClicked);
}

function purchaseClicked() {
    alert('We will Redirect you to Billing Page');
    var cartItems = document.getElementsByClassName('cart-items')[0];
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild);
    }
    updateCartTotal();
}

function removeCartItem(event) {
    var buttonClicked =  event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
}

function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target;
    var shopItem = button.parentElement.parentElement;
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;
    addItemToCart(title, price, imageSrc);
    updateCartTotal();
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div');
    cartRow.classList.add('cart-row');
    cartRow.innerText = title;
    var cartItems = document.getElementsByClassName('cart-items')[0];
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title');
    for (var i = 0; i < cartItemNames.length;i++) {
        if(cartItemNames[i].innerText == title) {
            alert('This Item is Already Added to the Cart')
            return
        }
    }
    var cartRowContents = `
    
    <div class="cart-item cart-column">

        <img class="cart-item-image" src="${imageSrc}" width="100" height="100">

        <span class="cart-item-title">${title}</span>

    </div>

    <span class="cart-price cart-column">${price}</span>

    <div class="cart-quantity cart-column">
    
        <input class="cart-quantity-input" type="number" value="1">

        <button class="btn btn-secondary removeButton" type="button">REMOVE</button>

    </div>`
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName('removeButton')[0].addEventListener('click', removeCartItem);
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged);
}
    
function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    var total = 0;

    for (var i = 0; i < cartRows.length;i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart-price')[0];
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        var price = parseFloat(priceElement.innerText.replace('₱', '₱'));
        var quantity = quantityElement.value;
        total = total + (price * quantity);

    }
    total =  Math.round(total * 100) / 100;
    document.getElementsByClassName('cart-total-price')[0].innerText = '₱' + total + 'k ';
}

// -------------------------------------------------

document.getElementById('Smartphone').onchange = function() {
	if (this.checked) 
    show('apple'),
    show('asus'),
    show('huawei'),
    show('infinix'),
    show('oppo'),
    show('realme'),
    show('samsung'),
    show('vivo'),
    show('xiaomi'),
    hide('accessories'); 
    
    else show('shop-item');
}

document.getElementById('Accessories').onchange = function() {
	if (this.checked) 
    hide('apple'),
    hide('asus'),
    hide('huawei'),
    hide('infinix'),
    hide('oppo'),
    hide('realme'),
    hide('samsung'),
    hide('vivo'),
    hide('xiaomi'),
    show('accessories'); 
    
    else show('shop-item');
}

document.getElementById('Apple').onchange = function() {
	if (this.checked) 
    show('apple'),
    hide('asus'),
    hide('huawei'),
    hide('infinix'),
    hide('oppo'),
    hide('realme'),
    hide('samsung'),
    hide('vivo'),
    hide('xiaomi'),
    hide('accessories'); 
    
    else show('shop-item');
}

document.getElementById('Asus').onchange = function() {
	if (this.checked) 
    hide('apple'),
    show('asus'),
    hide('huawei'),
    hide('infinix'),
    hide('oppo'),
    hide('realme'),
    hide('samsung'),
    hide('vivo'),
    hide('xiaomi'),
    hide('accessories');  
    
    else show('shop-item');
}

document.getElementById('Huawei').onchange = function() {
	if (this.checked) 
    hide('apple'),
    hide('asus'),
    show('huawei'),
    hide('infinix'),
    hide('oppo'),
    hide('realme'),
    hide('samsung'),
    hide('vivo'),
    hide('xiaomi'),
    hide('accessories');  
    
    else show('shop-item');
}

document.getElementById('Infinix').onchange = function() {
	if (this.checked) 
    hide('apple'),
    hide('asus'),
    hide('huawei'),
    show('infinix'),
    hide('oppo'),
    hide('realme'),
    hide('samsung'),
    hide('vivo'),
    hide('xiaomi'),
    hide('accessories'); 
    
    else show('shop-item');
}

document.getElementById('Oppo').onchange = function() {
	if (this.checked) 
    hide('apple'),
    hide('asus'),
    hide('huawei'),
    hide('infinix'),
    show('oppo'),
    hide('realme'),
    hide('samsung'),
    hide('vivo'),
    hide('xiaomi'),
    hide('accessories');  
    
    else show('shop-item');
}

document.getElementById('Realme').onchange = function() {
	if (this.checked) 
    hide('apple'),
    hide('asus'),
    hide('huawei'),
    hide('infinix'),
    hide('oppo'),
    show('realme'),
    hide('samsung'),
    hide('vivo'),
    hide('xiaomi'),
    hide('accessories');  
    
    else show('shop-item');
}

document.getElementById('Samsung').onchange = function() {
	if (this.checked) 
    hide('apple'),
    hide('asus'),
    hide('huawei'),
    hide('infinix'),
    hide('oppo'),
    hide('realme'),
    show('samsung'),
    hide('vivo'),
    hide('xiaomi'),
    hide('accessories');  
    
    else show('shop-item');
}

document.getElementById('Vivo').onchange = function() {
	if (this.checked) 
    hide('apple'),
    hide('asus'),
    hide('huawei'),
    hide('infinix'),
    hide('oppo'),
    hide('realme'),
    hide('samsung'),
    show('vivo'),
    hide('xiaomi'),
    hide('accessories');  
    
    else show('shop-item');
}

document.getElementById('Xiaomi').onchange = function() {
	if (this.checked) 
    hide('apple'),
    hide('asus'),
    hide('huawei'),
    hide('infinix'),
    hide('oppo'),
    hide('realme'),
    hide('samsung'),
    hide('vivo'),
    show('xiaomi'),
    hide('accessories');  
    
    else show('shop-item');
}



function hide(classToHide) {	
    [].forEach.call(document.getElementsByClassName(classToHide), function (el) {
        el.hidden = true;
    });  
}

function show(classToShow) {	
    [].forEach.call(document.getElementsByClassName(classToShow), function (el) {
        el.hidden = false;
      });  
}

function isEmpty(){
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let pnum = document.getElementById("pnum").value;
    let brand = document.getElementById("brand").value;
    let model = document.getElementById("model").value;
    let subject = document.getElementById("concern").value;

    if (fname!="" && lname !="" && pnum !="" && brand != "" && model != "" && subject !=""){
        document.getElementById("Submit").removeAttribute("disabled");
    }
}


function myFunction() {
    var text;
    if (confirm("Confirm?")) {
       text="Appointment has been booked!";
    } else {
      text="";
    }
    document.getElementById("appt").innerHTML = txt;
  }




