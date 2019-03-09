// 1. Show the hidden restaurant review, or use an animation method to reveal it. 
$('.review').fadeIn();

// 2. Set the title of the existing restaurant review.  
$('.review h3').text('Dat Dog');

// 3. Change the text of the restaurant review. The review should contain HTML, such as a strong tag or a span element. 
$('.review p').html('The <strong>very</strong> best gator sausage in the nation!');

// 4. Change the name of the app. Change *only* the text inside the span element within the h1. 
$('h1 span').text('Yodel!');

// 5. Create an animation for the paragraph with the id of "flashMessage." Chain an animation that 
$('#flashMessage')
  // slides the message down for 1 second
  .slideDown(1000)
  // delays the message for 2 seconds 
  .delay(2000)
  // slides the message up for 1 second 
  .slideUp(1000);

// 6. Inside the click handler, create a working restaurant review form.
$('#submitBtn').click(function(){
  //  a. Use the val() method to get the values from the restaurant name and restaurant review  input fields. Save them both to variables.
  const restaurantName = $('#restaurantNameInput').val();
  const restaurantReview = $('#restaurantReviewInput').val();
  //  b. Insert the restaurant name value into the #newRestaurant h3 tag 
  $('#newRestaurant h3').text(restaurantName);
  //  c. Insert the restaurant review value into the #newRestaurant paragraph tag
  $('#newRestaurant p').text(restaurantReview);
});








