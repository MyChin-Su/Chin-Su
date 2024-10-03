// Get all buttons with the class 'dropdownButton'
var dropdownButtons = document.getElementsByClassName('dropdownButton');

// Loop through the buttons to attach an event listener to each
for (var i = 0; i < dropdownButtons.length; i++) {
  dropdownButtons[i].addEventListener('click', function () {
    // Find the corresponding dropdown list (next sibling element)
    var productList = this.nextElementSibling;
    productList.classList.toggle('show');
  });
}