// 1: Set the text of the <h1> element
// 2: Set the color of the <h1> to a different color
// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag

// 4: Set the class of the <ul> to 'list'
// 5: Create a new list item and add it to the <ul>


// 6: Change all <input> elements from text fields to checkboxes


// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>


// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button



let title = "My Activities List",
    titleText = document.querySelector('h1');
    titleText.innerHTML = title;
    titleText.style.color = "teal";

document.getElementsByClassName("desc")[0].innerHTML = "<p>A list of fun things I want to do.</p>";

var element = document.querySelector('ul');
element.classList.add('list');

var lastText = document.createElement("li");
var lastLi = document.createElement("input");
lastText.innerHTML = '<input> Biking </input>';

document.querySelector('ul').appendChild(lastText);

