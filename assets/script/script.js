var bookDescription = document.querySelector("#bookDescription");
var bookPhoto = document.querySelector("#bookPhoto");
var authorName = document.querySelector("#authorName");
var Title = document.querySelector("#bookTitle");
var img = document.querySelector("#img");
var advice = document.querySelector('#advice')
var apiKey = "AIzaSyARQ1qCRDIdDsr2uR4uXZZnybC2lbkOA8w";
function getApi() {
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
        var book = data.items[0];
        Title.textContent ="The title of the Book is: " + book.volumeInfo.title;
          authorName.textContent ="This book is written by: " + book.volumeInfo.authors;
          bookDescription.textContent ="About the Book: " + book.volumeInfo.description;
          // have to make this url into a image and display
          bookPhoto.textContent ="Book image is: " + book.volumeInfo.imageLinks.thumbnail;
          console.log(book.volumeInfo.imageLinks.thumbnail);
          img.src = book.volumeInfo.imageLinks.thumbnail;   
  });
  }
  
  genNow.addEventListener('click', getApi);
  