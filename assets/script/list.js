var listLocation = document.querySelector('#listLocation')
var onCall = document.querySelector('#onCall')
var savedBook = JSON.parse(localStorage.getItem("savedBook"))


function readingListButton(){
    var readingListTitle = document.createElement('p');
    readingListTitle.textContent = savedBook
    listLocation.append(readingListTitle)
  }