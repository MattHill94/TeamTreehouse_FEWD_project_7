const alertContainer = document.querySelector('.alert-container');
const alert = document.querySelector('.btn-alert');
const dot = document.querySelector('.dot');
const bell = document.querySelector('.header-icon');
const messageFieldsHeight = document.querySelector('.message-fields').clientHeight;
const userFields = document.querySelector('.user-fields');
const dashboardSearch = document.querySelector('.dashboard-search');
const magBG = document.querySelector('.mag-bg');
const userSearch = document.querySelector('.user-search');
const userMessage = document.querySelector('.user-message');

// Removes the alert when "X" is clicked
alert.addEventListener('click', () => {
  alertContainer.innerHTML = "";
  dot.style.display = "none";
});

// Displays pop-up windows
bell.addEventListener('click', () => {
  window.alert('Please read the alert in the banner below.');
  window.alert('When you\'re done, click the X to close the alert.');
});

// Creates box shadow on dashboard-search:focus
dashboardSearch.addEventListener('focus', () => {
  magBG.style.boxShadow = '4px 0 4px 2px rgba(140, 140, 140, 0.2)';
});

// Removes box shadow after dashboard-search:blur
dashboardSearch.addEventListener('blur', () => {
  magBG.style.boxShadow = '';
});

// Sets height of user-fields div equal to height of message-fields div
userFields.style.height = messageFieldsHeight + 'px';

// Listens for submit event on any child element in user-fields (through event bubbling)
userFields.addEventListener('submit', (e) => {
  e.preventDefault();
  let user = userSearch.value;
  let message = userMessage.value;
  if (user == '' && message == '') {
    window.alert('You haven\'t entered a user or message.');
  } else if (user == '') {
    window.alert('You haven\'t entered a user.');
  } else if (message == '') {
    window.alert('You haven\'t entered a message.');
  } else {
    window.alert('Your message has been delivered.');
  }
});

function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
