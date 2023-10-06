// =================================== To Welcome the users =================================== //

window.alert('Welcome to Borjan Online shopping center');
//window.print();

var btn = document.createElement('Button');

btn.innerText = "Hi";




// =================================== Product Details JavaScript =================================== //        

// How to change product image on click

let changeImage = (imgName) => {
    let img = document.querySelector('#productImg');
    img.setAttribute("src", imgName)
}

// When i click on color imge it will show color name

const colorImage = document.getElementById("colorImage");
const colorName = document.getElementById("colorName");

colorImage.addEventListener("click", () => {
    const altText = colorImage.alt;
    colorName.textContent = altText;
    colorName.style.display = "Contents";
});

// When i click on Size of product it will show on size

function updateSize(size) {
    document.getElementById('productSize').textContent = size;
    size.style.display = "block";
}


// To  handle the quantity of product

function increaseValue() {
    var value = parseInt(document.getElementById('quantity').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('quantity').value = value;
}

function decreaseValue() {
    var value = parseInt(document.getElementById('quantity').value, 10);
    value = isNaN(value) ? 0 : value;
    if (value > 0) {
        value--;
        document.getElementById('quantity').value = value;
    }
}



// ================================ To Open Shopping Cart with JavaScript ================================ //  

// Get references to the cart container and the "Add to Cart" button
const cartContainer = document.getElementById("cart");
const addToCartButton = document.getElementById("addToCartButton");

// Add a click event listener to the "Add to Cart" button
addToCartButton.addEventListener("click", () => {
    // Toggle the visibility of the cart container by updating its right position
    if (cartContainer.style.right === "0%") {
        cartContainer.style.right = "-50%";
    } else {
        cartContainer.style.right = "0%";
    }
});


// To close the shopping cart view 
function closeCart() {
    // Hide the cart
    cartContainer.style.right = '-50%';
}

function openCart() {
    // Hide the cart
    cartContainer.style.right = '0%';
}

// ================================ To Open Search option with JavaScript ================================ //  

// Get references to the cart container and the "Add to Cart" button
const searchContainer = document.getElementById("search");

// To close the shopping cart view 
function closeSearch() {
    // Hide the cart
    searchContainer.style.right = '-30%';
}

function openSearch() {
    // Hide the cart
    searchContainer.style.right = '0%';
}

// ============================= To add data in Shopping Cart with JavaScript ============================= //

const cartItems = [];

// Function to add a product to the cart
function addProductToCart() {
    // Get product details
    const productName = document.getElementById('productName').textContent;
    const productPrice = document.getElementById('productPrice').textContent;
    const productColor = document.getElementById('colorName').textContent;
    const productSize = document.getElementById('productSize').textContent;
    const actualPrice = document.getElementById('productPrice').textContent;
    const barcode = document.getElementById('barcode').textContent;
    const productQuantity = parseInt(document.getElementById('quantity').value);

    // Calculate total price for this product
    const totalPrice = productQuantity * parseFloat(productPrice.replace('PKR ', ''));

    // Create a new cart item object
    const cartItem = {
        name: productName,
        price: productPrice,
        color: productColor,
        size: productSize,
        actualPrice: productPrice,
        price: productPrice,
        barcode: barcode,
        total: totalPrice,
        quantity: productQuantity
    };

    // Add the item to the cartItems array
    cartItems.push(cartItem);

    // Update the cart table
    updateCartTable();

    // Optionally, you can clear the quantity input or show a confirmation message
    document.getElementById('quantity').value = '0';
}

// Function to update the cart table
function updateCartTable() {
    const cartTable = document.getElementById('cart-items');
    cartTable.innerHTML = ''; // Clear the table content

    // Loop through the cart items and add rows to the table
    for (const item of cartItems) {
        const row = cartTable.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);

        // Add product image or a placeholder
        const productImage = '<img src="images/s1.png" alt="Product Image" loading="lazy" class="cartImg">';
        cell1.className = "td1";
        cell1.innerHTML = productImage;

        // Create product details string
        const productDetails = `
                    <p class="gig">GIG</p>
                    <p class="pname"><a href="">${item.name}</a></p>
                    <p class="pprice">${item.price}</p>
                    <p class="color">Color: <span class="pcolor">${item.color}</span></p>
                    <p class="">Size: <span class="psize">${item.size}</span></p>
                    <p class="">Actual Price: <span class="actp">${item.price}</span></p>
                    <p class="">Barcode: <span class="barcode">${item.barcode}</span></p>
                    <p class="ttp-p">PKR <span class="ttp">${item.total.toFixed(2)}</span></p>
                    <p class="pq">${item.quantity}</p>
                    <div class="quantity">
                                <a class="qbtn1" onclick="decreaseValue()">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-dash" viewBox="0 0 16 16">
                                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                                    </svg>
                                </a>
                                <input class="btnqun" type="text" id="quantity" value="1">
                                <a class="qbtn2" onclick="increaseValue()">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-plus" viewBox="0 0 16 16">
                                        <path
                                            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                    </svg>
                                </a>
                            </div>
                `;
        cell2.innerHTML = productDetails;
    }
}

// Call this function when the page loads to set up the initial cart
window.onload = function () {
    updateCartTable();
};

// ============================= To scroll cards with JavaScript ============================= //

// JavaScript to handle scrolling
const productContainer = document.querySelector('#scrollProduct');
const scrollLeft = document.querySelector('#scrollLeft');
const scrollRight = document.querySelector('#scrollRight');

scrollLeft.addEventListener('click', () => {
    productContainer.scrollBy({
        left: -200, // Adjust the scroll distance as needed
        behavior: 'smooth',
    });
});

scrollRight.addEventListener('click', () => {
    productContainer.scrollBy({
        left: 200, // Adjust the scroll distance as needed
        behavior: 'smooth',
    });
});


// ============================= Click on image to view with JavaScript ============================= //

document.addEventListener('DOMContentLoaded', function () {
    // Get references to the prevButton, nextButton, and productImg elements
    const prevButton = document.querySelector('.prevButton');
    const nextButton = document.querySelector('.nextButton');
    const productImg = document.getElementById('productImg');

    // Define an array of image sources
    const imageSources = ['images/s1.png', 'images/s2.png', 'images/s3.png'];

    // Initialize a variable to keep track of the current image index
    let currentImageIndex = 0;

    // Function to update the productImg source
    function changeImage(imageSrc) {
        productImg.src = imageSrc;
    }

    // Event listener for the previous button
    prevButton.addEventListener('click', () => {
        currentImageIndex--;
        if (currentImageIndex < 0) {
            currentImageIndex = imageSources.length - 1; // Wrap around to the last image
        }
        changeImage(imageSources[currentImageIndex]);
    });

    // Event listener for the next button
    nextButton.addEventListener('click', () => {
        currentImageIndex++;
        if (currentImageIndex >= imageSources.length) {
            currentImageIndex = 0; // Wrap around to the first image
        }
        changeImage(imageSources[currentImageIndex]);
    });
});




const firstElements = document.querySelectorAll('.firstClass');
const secondElements = document.querySelectorAll('.secondClass');

// Check if there is at least one element with both classes
if (firstElements.length >= 1 && secondElements.length >= 1) {
    // Hide the first element with 'firstClass'
    firstElements[0].style.display = 'none';

    // Display the second element with 'secondClass'
    secondElements[0].style.display = 'block';
}



//  ============  JavaScript code for the hamburger menu functionality ============ //

document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const menuContainer = document.querySelector(".menu-container");

    // Toggle the menu when the hamburger icon is clicked
    hamburgerMenu.addEventListener("click", function () {
        if (menuContainer.style.left === "0%") {
            menuContainer.style.left = "-91%";
        } else {
            menuContainer.style.left = "0%";
        }
    });
});


