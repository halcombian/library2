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
	checkRead();

	addBookWindow.style.visibility = "hidden";
	addBookForm.reset();
});

//Closes add book window and clears form
const closeBtn = document.getElementById("close-btn");
const addBookForm = document.getElementById("add-book-form");
closeBtn.addEventListener("click", (event) => {
	event.preventDefault();
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

	const bookCon = document.getElementById("book-con");
	const bookCard = document.createElement("div");
	const bookInfo = document.createElement("span");
	const bookCheckbox = document.createElement("input");

	bookCard.className = "book-card";
	bookInfo.className = "book-info";
	bookCheckbox.className = "book-checkbox";

	bookInfo.innerHTML =
		newBook.title +
		"<br>" +
		newBook.author +
		"<br>" +
		newBook.pages +
		"<br>" +
		newBook.read;

	bookCheckbox.type = "checkbox";

	bookCon.appendChild(bookCard);
	bookCard.appendChild(bookInfo);
	bookCard.appendChild(bookCheckbox);
}

function checkRead() {
	for (let i = 0; i < myLibrary.length; i++) {
		const bookChex = document.getElementsByClassName("book-checkbox");
		bookChex[i].addEventListener("click", () => {
			if (bookChex[i].checked) {
				myLibrary[i].read = "read";
			} else {
				myLibrary[i].read = "unread";
			}
			console.log(myLibrary[i].read);
		});
		if (myLibrary[i].read === "read") {
			bookChex[i].checked = true;
		} else {
			bookChex[i].checked = false;
		}
	}
}
