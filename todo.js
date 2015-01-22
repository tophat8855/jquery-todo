$( document ).ready(function() {
  console.log("Working");
  $('body').append($('<h1>App of Todo-ness</h1>'));
  $('h1').append($('<input placeholder="Whatcha wanna do?"></input>'));

  $('body').append($('<ul>'));
  $('ul').append($('<li>Thing?<span class="delete">Delete</span></li>'));
  $('ul').append($('<li>Another thing?<span class="delete">Delete</span></li>'));

  $('body').append($('<p id="itemsLeft">number left </p>'));
  $('body').append($('<button id="deleteAll">Exterminate Completed</button>'));
});
