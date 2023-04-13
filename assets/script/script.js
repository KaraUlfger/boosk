var bookDescription = document.querySelector("#bookDescription");
var bookPhoto = document.querySelector("#bookPhoto");
var authorName = document.querySelector("#authorName");
var Title = document.querySelector("#bookTitle");
var img = document.querySelector("#img");
var adviceBtn = document.querySelector("#advice");
var staffPickBtn = document.querySelector("#staffPickBtn")
var apiKey = "AIzaSyARQ1qCRDIdDsr2uR4uXZZnybC2lbkOA8w";
var volumeIds = [" ","SIDbnAAACAAJ", "PEpoEAAAQBAJ", "o1vmzQEACAAJ", "jsxaDwAAQBAJ","qRMqB2BSJr4C "];
//initial value of the array of books and advice is 0, displays a new quotes and books on each click
var idx = 0;
Title.textContent =" ";
authorName.textContent =" ";
bookDescription.textContent =" ";
bookPhoto.textContent =" ";
img.src = " ";

// function to fetch book form the API on click.
function getApi() {

        //increasing the array value by +1 on each click
       idx ++;
       var input = document.querySelector(".input");

       // collects the data from the user

       var data = input.value; 

       //fetch request gets a list of all the repos for the node.js organization
        var requestUrl = 'https://www.googleapis.com/books/v1/volumes?q=' + data + '&key=' + apiKey;
  
        fetch(requestUrl)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
          var book = data.items[idx]; 
          // fetches the data from the array based on index
          Title.textContent ="The title of the Book is: " + book.volumeInfo.title;
          authorName.textContent ="This book is written by: " + book.volumeInfo.authors;
          bookDescription.textContent ="About the Book: " + book.volumeInfo.description;
          bookPhoto.textContent ="Book image is: " + book.volumeInfo.imageLinks.thumbnail;
          img.src = book.volumeInfo.imageLinks.thumbnail;   
     });
  }
genNow.addEventListener('click', getApi);

var adviceDisplayauthor = document.createElement('p');
var adviceDisplayContent = document.createElement('h2');
adviceDisplayauthor.textContent = " ";
adviceDisplayContent.textContent = " ";

function getAdvice(){
   // increases the array by one cound on click
   idx++;  
   //Url for the advice 
   var adviceUrl = "https://type.fit/api/quotes"
   fetch(adviceUrl)
   .then(function(response) {
    return response.json();
     })
  .then(function(data) {
    console.log(data);
    adviceDisplayauthor.textContent = data[idx++].author;
    adviceDisplayContent.textContent = data[idx++].text;
    adviceText.append(adviceDisplayauthor);
    adviceText.append(adviceDisplayContent)
    });
 }
 adviceBtn.addEventListener('click', getAdvice);

 //generating the staffPicks
 
 function staffPicks(){
// increases the array index by one on each click
   
   var staffUrl = 'https://www.googleapis.com/books/v1/volumes/' + volumeIds[idx++] + '?key=' + apiKey;

    fetch(staffUrl)
      .then(function (response) {
        return response.json();
     })
     .then(function (data) {
      console.log(data);
        var book = data; 
        // craeted a div to display the staff picks
        var staffPick = document.createElement("div");
        // storing the value of title
        var staffTitle = document.createElement("p");
        staffTitle.textContent = book.volumeInfo.title;
        // creating the img tag
        var staffPickThumbnail = document.createElement("img");
        //when the book has a img to display it display the plceholder
         if (book.volumeInfo.imageLinks === undefined) {
            staffPickThumbnail.src =  "https://place-hold.it/128x192";
        } else {
           staffPickThumbnail.src =  book.volumeInfo.imageLinks.thumbnail;
        }
         var authorNames = document.createElement('p');
         authorNames.textContent = book.volumeInfo.authors;
          //dynamically created tags are appended into the main dev class 
         staffPick.append(staffTitle);
         staffPick.append(staffPickThumbnail);
         staffPick.append(authorNames);
         var displayBooksDiv = document.getElementById("dislayBooks");
         displayBooksDiv.append(staffPick)
       });
   }

staffPickBtn.addEventListener('click',staffPicks);

// creating the modal

document.addEventListener('DOMContentLoaded', () => {
   // Functions to open and close a modal
   function openModal($el) {
     $el.classList.add('is-active');
   }
   function closeModal($el) {
     $el.classList.remove('is-active');
   }
   function closeAllModals() {
     (document.querySelectorAll('.modal') || []).forEach(($modal) => {
       closeModal($modal);
     });
   }
 // Add a click event on buttons to open a specific modal
   (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
     const modal = $trigger.dataset.target;
     const $target = document.getElementById(modal);
     $trigger.addEventListener('click', () => {
       openModal($target);
     });
   });
 // Add a click event on various child elements to close the parent modal
   (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
     const $target = $close.closest('.modal');
     $close.addEventListener('click', () => {
       closeModal($target);
     });
   });
 // Add a keyboard event to close all modals
   document.addEventListener('keydown', (event) => {
     const e = event || window.event;
 if (e.keyCode === 27) { // Escape key
       closeAllModals();
     }
   });
 });