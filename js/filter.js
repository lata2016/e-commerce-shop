const products = [
    {
      title: "Paint brushes 1",
      price: 24,
      image: "img/product1.jpeg",
    },
    {
      title: "Abstract paint 2",
      price: 30,
      image: "img/product2.jpeg",
    },
    {
      title: "Visual 3",
      price: 14,
      image: "img/product3.jpeg",
    },
    {
      title: "Art details 4",
      price: 64,
      image: "img/product4.jpeg",
    },
    {
      title: "Colours 5",
      price: 80,
      image: "img/product5.jpeg",
    },
    {
      title: "Simple pictures 6",
      price: 54,
      image: "img/product6.jpeg",
    },
    {
      title: "Wall art 7",
      price: 204,
      image: "img/product7.jpeg",
    },
    {
      title: "Fire 8",
      price: 74,
      image: "img/product8.jpeg",
    },
    {
      title: "Black and white picture 9",
      price: 40,
      image: "img/product9.jpeg",
    },
    {
      title: "Water picture 10",
      price: 37,
      image: "img/product10.jpeg",
    },
    {
      title: "Home studio 11",
      price: 22,
      image: "img/product11.jpeg",
    },
    {
      title: "Art 12",
      price: 12,
      image: "img/product12.jpeg",
    },
    {
      title: "Crystal 13",
      price: 11,
      image: "img/product13.jpeg",
    },
    {
      title: "Architecture 14",
      price: 49,
      image: "img/product14.jpeg",
    },
    {
      title: "Galaxy 15",
      price: 63,
      image: "img/product15.jpeg",
    },
    {
      title: "Angel 16",
      price: 100,
      image: "img/product16.jpeg",
    },
    {
      title: "History 17",
      price: 103,
      image: "img/product17.jpeg",
    },
    {
      title: "Hear my voice 18",
      price: 70,
      image: "img/product18.jpeg",
    },
    {
      title: "Feel free 19",
      price: 60,
      image: "img/product19.jpeg",
    },
    {
      title: "Cat 20",
      price: 15,
      image: "img/product20.jpeg",
    },
  ];
  

  const priceFilter = document.getElementById("price-filter");
  priceFilter.addEventListener("change", handlePriceFilter);

  function handlePriceFilter() {
    const selectedOption = priceFilter.value;
    filterAndDisplayProducts(selectedOption);
  }

  function filterAndDisplayProducts(selectedOption) {
    let filteredProducts = products.slice(); 
    if (selectedOption === "low-to-high") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (selectedOption === "high-to-low") {
      filteredProducts.sort((a, b) => b.price - a.price);
    }

    displayProducts(filteredProducts);
  }

  function displayProducts(products) {
    const productContainer = document.querySelector(""); 
  
    // Clear the current products
    productContainer.innerHTML = '';
  
    products.forEach((product) => {
      const productBox = document.createElement("div");
      productBox.classList.add("product-box");
  
      // Create an image element for the product
      const productImage = document.createElement("img");
      productImage.src = product.image;
      productImage.alt = product.title;
      productImage.classList.add("product-img");
  
      // Create an element for the product title
      const productTitle = document.createElement("h2");
      productTitle.innerText = product.title;
      productTitle.classList.add("product-title");
  
      // Create an element for the product price
      const productPrice = document.createElement("span");
      productPrice.innerText = product.price + "$";
      productPrice.classList.add("price");
  
      // Append the productImage, productTitle, and productPrice to the productBox
      productBox.appendChild(productImage);
      productBox.appendChild(productTitle);
      productBox.appendChild(productPrice);
  
      productContainer.appendChild(productBox);
    });
  }
  
  displayProducts(products);
 