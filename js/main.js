//cart
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

//pagination
const itemsPerPage = 6;
let currentPage = 1;

const productBoxes = document.querySelectorAll(".product-box");

//open cart
cartIcon.onclick = () => {
    cart.classList.add("active");
};

//close cart
closeCart.onclick = () => {
    cart.classList.remove("active");
};

if (document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded",ready);

}else{
    ready();
}

function ready(){
    var removeCartButtons = document.getElementsByClassName("cart-remove")
    console.log(removeCartButtons)
    for ( var i = 0;i < removeCartButtons.length;i++){
        var button = removeCartButtons[i]
        button.addEventListener('click', removeCartItem)

    }


    //quantity changes
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
         input.addEventListener("change", quantityChanged);
        input.addEventListener("input", quantityChanged); // Add input event listener
    }


    //add to cart
    var addCart = document.getElementsByClassName("add-cart");
    for ( var i = 0;i < addCart.length;i++) {
        var button = addCart[i];
        button.addEventListener("click",addCartClicked);
             
    
    }

}


function updateTotal() {
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;

    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
        total += price * quantity;
    }

    total = Math.round(total * 100) / 100;
    var totalElement = document.getElementsByClassName("total-price")[0];
    totalElement.innerText = "$" + total;

    if (cartBoxes.length === 0) {
        cart.classList.remove("active"); // Hide the cart if it's empty
    }

}

function addCartClicked(event) {
    var button = event.target;
    var shopProduct = button.parentElement; // Get the parent of the button, which is the product box
    var title = shopProduct.querySelector(".product-title").innerText;
    var price = shopProduct.querySelector(".price").innerText;
    var productImg = shopProduct.querySelector(".product-img").src;
    addProductToCart(title, price, productImg);
    updateTotal();
}

function addProductToCart(title, price, productImg) { 
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");

    // Create and append elements to cartShopBox

    // Create a div for the product details
    var productDetails = document.createElement("div");
    productDetails.classList.add("detail-box");
    
    // Create an image element for the product
    var productImage = document.createElement("img");
    productImage.src = productImg;
    productImage.alt = title;
    productImage.classList.add("cart-img");

    // Create a div for the product title
    var productTitle = document.createElement("div");
    productTitle.innerText = title;
    productTitle.classList.add("cart-product-title");

    // Create a div for the product price
    var productPrice = document.createElement("div");
    productPrice.innerText = price;
    productPrice.classList.add("cart-price");

    // Create an input element for quantity
    var quantityInput = document.createElement("input");
    quantityInput.type = "number";
    quantityInput.value = "1";
    quantityInput.min = "1";
    quantityInput.classList.add("cart-quantity");

    // Create a remove button
    var removeButton = document.createElement("i");
    removeButton.classList.add("bx", "bxs-trash-alt", "cart-remove");
    removeButton.onclick = removeCartItem;

    // Append the elements to productDetails
    productDetails.appendChild(productImage);
    productDetails.appendChild(productTitle);
    productDetails.appendChild(productPrice);
    productDetails.appendChild(quantityInput);

    // Append productDetails and removeButton to cartShopBox
    cartShopBox.appendChild(productDetails);
    cartShopBox.appendChild(removeButton);

    // Append cartShopBox to the cart content
    var cartContent = document.getElementsByClassName("cart-content")[0];
    cartContent.appendChild(cartShopBox);

    updateTotal();
}
function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateTotal();
}



function removeCartItem(event) {
    var buttonClicked = event.target;
    var cartItem = buttonClicked.parentElement;
    cartItem.remove(); // Remove the cart item that contains the product

    updateTotal();
}

function updateTotal() {
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;

    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
        total += price * quantity;
    }

    total = Math.round(total * 100) / 100;
    var totalElement = document.getElementsByClassName("total-price")[0];
    totalElement.innerText = "$" + total;

    if (cartBoxes.length === 0) {
        cart.classList.remove("active"); // Hide the cart if it's empty
    }
}       

//pagination function
function showPage(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    productBoxes.forEach((productBox, index) => {
        if (index >= start && index < end) {
            productBox.style.display = "block";
        } else {
            productBox.style.display = "none";
        }
    });
}

document.querySelector('.next').addEventListener('click', () => {
    const maxPage = Math.ceil(productBoxes.length / itemsPerPage);
    if (currentPage < maxPage) {
        currentPage++;
        showPage(currentPage);
        updatePageNumber();
    }
});

document.querySelector('.prev').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
        updatePageNumber();
    }
});

showPage(currentPage);
updatePageNumber();