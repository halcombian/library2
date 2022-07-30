//Variable for add book window used for styling visibility
const addBookWindow = document.getElementById("add-book-window");

//Add book button makes window appear
const addBookBtn = document.getElementById("add-book-btn");
addBookBtn.addEventListener("click", () => {
	addBookWindow.style.visibility = "visible";
});

//Add button "submits" add book form
const addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", (event) => {
	event.preventDefault(); //disables default submit functionality
	readUnread(); //checks if read checkbox is checked
	addBookToLibrary(); //adds new Book object to library array

	addBookWindow.style.visibility = "hidden";
	addBookForm.reset();
});

//Closes add book window and clears form
const closeBtn = document.getElementById("close-btn");
const addBookForm = document.getElementById("add-book-form");
closeBtn.addEventListener("click", () => {
	addBookWindow.style.visibility = "hidden";
	addBookForm.reset();
});

//Array to store Book objects
let myLibrary = [];

//Constructor for new books
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");
function Book(title, author, pages, read) {
	this.title = title.value;
	this.author = author.value;
	this.pages = pages.value;
	this.read = read.value;
}

//Checks if read checkbox is checked
function readUnread() {
	if (read.checked) {
		read.value = "read";
	} else {
		read.value = "unread";
	}
}

//adds new Book object to library array
function addBookToLibrary() {
	let newBook = new Book(title, author, pages, read);
	myLibrary.push(newBook);
	for (let i = 0; i < myLibrary.length; i++) {
		console.log(myLibrary[i]);
	}
}
