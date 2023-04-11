var bookDescription = document.querySelector("#bookDescription");
var bookPhoto = document.querySelector("#bookPhoto");
var authorName = document.querySelector("#authorName");
var Title = document.querySelector("#bookTitle");
var apiKey = "AIzaSyARQ1qCRDIdDsr2uR4uXZZnybC2lbkOA8w";
function getApi() {
       var input = document.querySelector(".input");
       console.log(input.value);
       // collects the data from the user
       var data = input.value; 

      //fetch request gets a list of all the repos for the node.js organization
   var requestUrl = 'https://www.googleapis.com/books/v1/volumes?q=' + data + '&key=' + apiKey;
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
     })
     .then(function (data) {
         console.log(data)
        var books = data.items;
        for (var i = 0; i < books.length; i++) {
          Title.textContent ="the title of the Book is: " + books[i].volumeInfo.title;
          authorName.textContent = "This book is written by: " + books[i].volumeInfo.authors;
          bookDescription.textContent ="About the Book: " + books[i].volumeInfo.description;
          // have to make this url into a image and display
          bookPhoto.textContent ="Book image is: " + books[i].volumeInfo.imageLinks.thumbnail;
          }
  });
  }
  
  genNow.addEventListener('click', getApi);
  
  