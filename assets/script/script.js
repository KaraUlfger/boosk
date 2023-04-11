// API for Quotes,will use it later
//var requestUrl = 'https://type.fit/api/quotes';
// APIkey for BOOK API
var apiKey = "AIzaSyARQ1qCRDIdDsr2uR4uXZZnybC2lbkOA8w";
// URL with search key as an input
//var requestUrl = 'https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=' + apiKey;

function getApi() {
    // fetch request gets a list of all the repos for the node.js organization
    var requestUrl = 'https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=' + apiKey;
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
        var books = data.items;
        //var tableHeader = document.createElement('th');
        //tableHeader.textContent = "Title";
  
        //tableBody.appendChild(tableHeader);
  
        //Loop over the data to generate a table, each table row will have a link to the repo url
        for (var i = 0; i < books.length; i++) {
          var bookTitle = books[i].volumeInfo.authors;
          console.log(books[i].volumeInfo.title);
          // Creating elements, tablerow, tabledata, and anchor
          //var tableRow = document.createElement('tr');
          //var tableData = document.createElement('td');
          //var pTag = document.createElement('p');
  
          //pTag.textContent = bookTitle;
  
          // // Appending the link to the tabledata and then appending the tabledata to the tablerow
          // // The tablerow then gets appended to the tablebody
        //   tableData.appendChild(pTag);
        //   tableRow.appendChild(tableData);
        //   tableBody.appendChild(tableRow);
        }
  
        
      });
  }