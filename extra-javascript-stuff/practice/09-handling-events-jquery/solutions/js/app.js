// 1. When the user's mouse passes over the text "How are these ranked?", hide/show the text inside the #helpText span element. (Hint: use the jQuery toggle() method inside your event handler) 
$('#helpText').on('mouseover', function(){
  $('#helpText span').toggle();
});

// 2. Append a new restaurant to the restaurant list when the user enters a value into the #newRestaurant input and clicks on the #addNew button. 
$('#addNew').on('click', function(){
  const newRestaurant = $('#newRestaurantInput').val();
  $('ul').append(newRestaurant);
 });

  // BONUS: Before appending the new restaurant to the list, use string concatentation to make sure the new restaurant name is surrounded by an opening and closing <li> tag. 
  //$('ul').append('<li>' + newRestaurant + '</li>');

// 3. Add the class "strike" to the restaurant name each time it's double clicked. Use event delegation on the ul element to listen for a click event on the ul's list items
$('ul').on('dblclick', 'li', function(event){
  $(event.target).addClass('strike');
});
//BONUS: Refactor your code above using the "this" keyword.
//BONUS: Look up a jQuery method that will let you toggle the .strike class on and off. 
//$('ul').on('dblclick', 'li', function(){
//  $(this).toggleClass('strike);
//});
