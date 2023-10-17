const pageNavigation = document.querySelector('.page-navigation');
const pageSpan = document.querySelector('.page-num');
let currentPage = 1; // Initialize the current page to 1
const productsPerPage = 6; // Number of products per page
const totalProducts = 20; 

// Function to update the page number 
function updatePageNumber() {
  pageSpan.textContent = `Page ${currentPage}`;
}

// Function to handle the "Next" button click
function onNextClick() {
  const lastPage = Math.ceil(totalProducts / productsPerPage);
  if (currentPage < lastPage) {
    currentPage++;
    updatePageNumber();
  }
}

// Function to handle the "Previous" button click
function onPrevClick() {
  if (currentPage > 1) {
    currentPage--;
    updatePageNumber();
  }
}

// Add event listeners to the "Next" and "Previous" buttons
pageNavigation.querySelector('.next').addEventListener('click', onNextClick);
pageNavigation.querySelector('.prev').addEventListener('click', onPrevClick);

updatePageNumber();

function onNextClick() {
    const lastPage = Math.ceil(totalProducts / productsPerPage);
    if (currentPage < lastPage) {
      currentPage++;
      showProductsForPage(currentPage);
      updatePageNumber();
    }
  }
  
  // Function to handle the "Previous" button click
  function onPrevClick() {
    if (currentPage > 1) {
      currentPage--;
      showProductsForPage(currentPage);
      updatePageNumber();
    }
}
updatePageNumber();
showProductsForPage(currentPage); 

function showProductsForPage(page) {
  const startIndex = (page - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  
  productBoxes.forEach((box, index) => {
    if (index >= startIndex && index < endIndex) {
      box.style.display = "block";
    } else {
      box.style.display = "none";
    }
  });
}









