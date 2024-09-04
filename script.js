const myLibrary = [];

const add_button = document.getElementById("add");
const dialog = document.querySelector("dialog");
const dialogAdd = document.getElementById("dialog-add");
const close = document.getElementById("close");
const read_Button = document.getElementsByClassName("readButton")

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read
}

function addBookToLibrary(author, title, pages, read) {
    let book = new Book(author, title, pages, read);
    myLibrary.push(book);
}

function displayBook() {
    const parentDiv = document.getElementById("display")
    parentDiv.innerHTML = "";
    myLibrary.forEach((book, index) => {

        let newDiv = document.createElement("div");
        let authorDiv = document.createElement("div");
        let titleDiv = document.createElement("div");
        let pagesDiv = document.createElement("div");
        let readDiv = document.createElement("div");
        let deleteButton = document.createElement("button");
        let readButton = document.createElement("button");

        deleteButton.setAttribute('data-index', index)
        deleteButton.classList.add("deleteButton");

        newDiv.classList.add('container-card');

        readButton.classList.add("readButton");
        if (book.read) {
            newDiv.style.backgroundColor = "green"
        }
        else {
            newDiv.style.backgroundColor = "red"
        }

        authorDiv.innerHTML = book.author;
        titleDiv.innerHTML = book.title;
        pagesDiv.innerHTML = book.pages;
        deleteButton.innerHTML = "Delete";
        readButton.innerHTML = "Read";

        newDiv.appendChild(authorDiv);
        newDiv.appendChild(titleDiv);
        newDiv.appendChild(pagesDiv);
        newDiv.appendChild(deleteButton);
        newDiv.appendChild(readButton);

        newDiv.classList.add("card"); //Book cards have class card
        parentDiv.appendChild(newDiv);
    });

    document.querySelectorAll('.deleteButton').forEach(button => {
        button.addEventListener('click', deleteBook);
    });

    document.querySelectorAll('.readButton').forEach(button => {
        button.addEventListener('click', changeColor)
    });

}

function changeColor(event) {
    let target = event.target;
    let parent = target.parentElement;
    if (parent.style.backgroundColor == "green") {
        parent.style.backgroundColor = 'red';
    }
    else {
        parent.style.backgroundColor = 'green';
    }
}

add_button.addEventListener("click", () => {
    dialog.showModal();
});

dialogAdd.addEventListener("click", () => {
    let author = document.getElementById("author").value
    let title = document.getElementById("title").value
    let pages = document.getElementById("pages").value
    // let readOrNot = document.getElementsByName("button-read").value;
    let radioButton = document.getElementById('button-read');
    if (radioButton.checked) {
        addBookToLibrary(author, title, pages, true);
    }
    else {
        addBookToLibrary(author, title, pages, false);
    }
    document.getElementById("author").value = ''
    document.getElementById("title").value = ''
    document.getElementById("pages").value = ''
    dialog.close();
    displayBook();
})

close.addEventListener("click", () => {
    dialog.close();
});

function deleteBook(e) {
    const index = e.target.getAttribute('data-index');
    myLibrary.splice(index, 1);
    displayBook();
}