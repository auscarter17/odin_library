const myLibrary = []

function Book(id, title, author, pages, read) {
  this.id = id
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return `${title}, ${author}, ${pages}, ${read}`
  }
}

//theHobbit.info(); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
//const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295 pages", "Not read yet")

function addBook(id, title, author, pages, read) {
  const newBook = new Book (id, title, author, pages, read)
  myLibrary.push(newBook)
}

addBook(1,"The Hobbit", "J.R.R. Tolkien", "295 pages", "Not read yet")

console.log(myLibrary)