$( document ).ready(function() {
  console.log("Working");
  $('body').append($('<h1>App of Todo-ness</h1>'));
  $('body').append($('<input placeholder="Whatcha wanna do?"></input>'));

  $('body').append($('<ul>'));
  $('ul').append($('<li>Thing?<span class="delete">Delete</span></li>'));
  $('ul').append($('<li>Another thing?<span class="delete">Delete</span></li>'));

  $('body').append($('<p id="itemsLeft"></p>'));
  countEmUp();
  $('body').append($('<button id="deleteAll">Exterminate Completed</button>'));

  var addAThing = function(thingToDo) {
    var newThingTodo = '<li>' + thingToDo + '<span class="delete">Delete</span></li>';
    $('ul').append($(newThingTodo));
    countEmUp();
  };

  $('input').keypress(function(e) {
    if (e.which == 13) {
      var newTodo = $('input').val();
      addAThing(newTodo);
      $('input').val("");
    }
  });

  function countEmUp() {
    var count = $('ul li').length - $('li.completed').length;
    var itemsLeftString = count + ' left to finish';
    $('#itemsLeft').html(itemsLeftString);
  }

  $('ul').on('click', 'li', function() {
    $(this).toggleClass('completed');
    countEmUp();
  });

  $('ul').on('click', 'span', function(){
    $(this).parent().remove();
  });

  $('#deleteAll').on('click', function() {
    $('li.completed').fadeOut(300, function() {
      $(this).remove();
    });
  });
});
