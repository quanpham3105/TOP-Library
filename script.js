const onePiece = new Book("Eiichiro Oda", "One Piece", "21,450 pages")

const myLibrary = [onePiece];

// const index = 1;

function Book(author, title, pages) {
    this.author = author;
    this.title = title;
    this.pages = pages;
}

function addBookToLibrary(author, title, pages) {
    let book = new Book(author, title, pages);
    myLibrary.push(book);
}

// function incrementIndex() {
//     index++;
// }

function displayBook() {
    const parentDiv = document.getElementById("display")
    parentDiv.innerHTML = "";
    for (book of myLibrary) {
        let newDiv = document.createElement("div");
        let authorDiv = document.createElement("div");
        let titleDiv = document.createElement("div");
        let pagesDiv = document.createElement("div");
        let deleteButton = document.createElement("button");
        // deleteButton.setAttribute("indexNumber", index);
        deleteButton.innerHTML = "Delete";
        deleteButton.classList.add("deleteButton");
        authorDiv.innerHTML = book.author;
        titleDiv.innerHTML = book.title;
        pagesDiv.innerHTML = book.pages;
        newDiv.appendChild(authorDiv);
        newDiv.appendChild(titleDiv);
        newDiv.appendChild(pagesDiv);
        newDiv.appendChild(deleteButton);
        newDiv.classList.add("card"); //Book cards have class card
        parentDiv.appendChild(newDiv);
        // incrementIndex();
    }
}

displayBook();

const add_button = document.getElementById("add");
const dialog = document.querySelector("dialog");
add_button.addEventListener("click", () => {
    dialog.showModal();
});

const dialogAdd = document.getElementById("dialog-add");

dialogAdd.addEventListener("click", () => {
    let author = document.getElementById("author").value
    let title = document.getElementById("title").value
    let pages = document.getElementById("pages").value
    addBookToLibrary(author, title, pages);
    dialog.close();
    displayBook();
})

const close = document.getElementById("close");

close.addEventListener("click", () => {
    dialog.close();
});

const deleteButton = document.getElementsByClassName("deleteButton");

deleteButton.addEventListener("click", () => {
});