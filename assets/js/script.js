var repoList = document.querySelector('ul');
var fetchButton = document.getElementById('fetch-button');

function getAPI() {
  var requestUrl = 'https://api.github.com/users/carterdmorgan/repos';
  fetch(requestUrl)
    .then(function(response) {
      console.log(response.json());
    });
  console.log('starting API');
}

fetchButton.addEventListener('click', getAPI);