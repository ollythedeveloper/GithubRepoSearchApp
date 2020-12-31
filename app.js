'use strict';
const rootURL = 'https://api.github.com/users/'

function displayResults(responseJson){
  console.log(responseJson)
  $('#results-list').empty();
  for (let i = 0; i < responseJson.length; i++){
    $('#results-list').append(
      `<li><h3><a href=${responseJson[i].html_url}>${responseJson[i].name}</a></h3>
      </li>`
    )};
  $('#results').removeClass('hidden');
};

function getUserRepos(username){
  const url = rootURL + username +'/repos';
  fetch(url)
  .then(response => response.json())
  .then(responseJson => displayResults(responseJson));
}

function watchForm(){
  $('#js-form').submit(event => {
    event.preventDefault();
    const username = $('#js-username').val();
    getUserRepos(username);
  });
}


$(function(){
  console.log('App loaded!');
  watchForm();
});