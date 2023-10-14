// JavaScript to handle image pagination
/*
const images = document.querySelectorAll('.image-list img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const pageNum = document.querySelector('.page-num');

const itemsPerPage = 6;
let currentPage = 1;

function showPage(page) {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  images.forEach((image, index) => {
    if (index >= startIndex && index < endIndex) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });

  pageNum.textContent = `Page ${page}`;
}

function updateButtons() {
  if (currentPage === 1) {
    prevButton.style.display = 'none';
  } else {
    prevButton.style.display = 'block';
  }

  if (currentPage * itemsPerPage >= images.length) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
}

prevButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
    updateButtons();
  }
});

nextButton.addEventListener('click', () => {
  if (currentPage * itemsPerPage < images.length) {
    currentPage++;
    showPage(currentPage);
    updateButtons();
  }
});

// Initialize the pagination
showPage(currentPage);
updateButtons();
*/
