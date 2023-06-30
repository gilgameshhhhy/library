let myLibrary = [];

const bookTitle = document.getElementById("booktitle")
const bookAuthor = document.getElementById("bookauthor")
const bookPages = document.getElementById("bookpages")
const bookStatus = document.getElementById("bookstatus")

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary(title, author, pages, status) {
  const newBook = new Book(title, author, pages, status);
  myLibrary.push(newBook);
}

function displayBooks() {
  for (let n = 0; n < myLibrary.length; n++) {
    bookTitle.textContent = myLibrary[n].title;
    bookAuthor.textContent = myLibrary[n].author;
    bookPages.textContent = myLibrary[n].pages;
    bookStatus.textContent = myLibrary[n].status;
  }
}

function changeStatus(book) {
  if (myLibrary[book].status === read) {
    myLibrary[book].status = "unread";
  } else {
    myLibrary[book].status = "read";
  }
}