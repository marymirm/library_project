let myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

// // Buttons:
const add_book = document.querySelector('.add_book');
const enterButton = document.getElementById('enterButton');

// // Form functionality linked with css #form: display none:
const button = document.getElementById('add_book');
button.addEventListener('click', () => {
    const form = document.getElementById('form');
    
    if (form.style.display === 'flex') {
      form.style.display = 'none';

    } else {
      form.style.display = 'flex';
    }
});

enterButton.addEventListener('click', () => {
    formInputData();
})

function formInputData () {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;

    if ((title == "") || (author == "") || (pages == "")) {
        return;
    }

    addBookToLibrary(title, author, pages);
    clearForm();
}

function clearForm() {
    title.value = "";
    author.value = "";
    pages.value = "";
}

function addBookToLibrary(title, author, pages) {
	const newBook = new Book(title, author, pages);
	myLibrary.push(newBook);

    displayBooksOnPage();
}


function displayBooksOnPage() {
    let books = document.querySelector(".books");
    let card = books.querySelectorAll(".card");
    card.forEach((card) => card.remove());


    // const removeDivs = document.querySelectorAll(".card");
    // for (let i = 0; i < removeDivs.lenght; i++) {
    //     removeDivs[i].remove();
    // }

    myLibrary.forEach(myLibrary => {
        const card = document.createElement("div");
        card.classList.add ("card");
        books.appendChild(card);
        for (let key in myLibrary) {
            console.log(`${key}: ${myLibrary[key]}`);
            const para = document.createElement("p");
            para.textContent = (`${key}: ${myLibrary[key]}`);
            card.appendChild(para);
        }
    })
}









// function clearAndShow () {
//     let myLibrary = "";

//     titleInput.value = "";
//     authorInput.value = "";
//     pagesInput.value = "";

//     for (let i = 0; i < titles.length; i++) {
//         myLibrary += "Title: " + titles[i] + "<br>";
//     }
//     for (let i = 0; i < authors.length; i++) {
//         myLibrary += "Author: " + authors[i] + "<br>";
//     }
//     for (let i = 0; i < pages.length; i++) {
//         myLibrary += "Pages: " + pages[i];
//     }
    
//     let bookCard = document.createElement("book_card");
//     card_container.insertAdjacentElement('beforeend', bookCard);

//     document.getElementById('book_card').innerHTML = myLibrary;
// };


    // titleInput.value = "";
    // authorInput.value = "";
    // pagesInput.value = "";

    // bookCard.innerHTML = "";
    
    // bookCard.innerHTML += "Title: " + titles.join(", ") + "<br/>";
    // bookCard.innerHTML += "Author: " + authors.join(", ") + "<br/>";
    // bookCard.innerHTML += "Number of pages: " + pages.join(", ");



