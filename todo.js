$(document).ready(function() {
  function initialize() {
    $('body').append($('<h1>App of Todo-ness</h1>'));
    $('body').append($('<input placeholder="Whatcha wanna do?"></input>'));
    $('body').append($('<ul>'));
    $('body').append($('<p id="itemsLeft"></p>'));
    $('body').append($('<button id="deleteAll">Exterminate Completed</button>'));
    $('input').keypress(entering);
    $('ul').on('click', 'li', toggleComplete);
    $('ul').on('click', 'span', deleteOneThing);
    $('#deleteAll').on('click', deleteAllTheThings);
  }

  function addAThing(thingToDo) {
    var newThingTodo = '<li>' + thingToDo + '<span class="delete">Delete</span></li>';
    $('ul').append($(newThingTodo));
    countEmUp();
  }

  function entering(e) {
    if (e.which != 13) { return; }
    var newTodo = $('input').val();
    addAThing(newTodo);
    $('input').val("");
  }

  function countEmUp() {
    var count = $('ul li').length - $('li.completed').length;
    var itemsLeftString = count + ' left to finish';
    $('#itemsLeft').html(itemsLeftString);
  }

  function toggleComplete() {
    $(this).toggleClass('completed');
    countEmUp();
  }

  function deleteOneThing() {
    $(this).parent().remove();
  }

  function deleteAllTheThings() {
    $("li.completed").fadeOut(300, function() {
      $(this).remove();
    });
  }

  initialize();
  countEmUp();

});
