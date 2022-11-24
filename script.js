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

    myLibrary.forEach(myLibrary => {
        const card = document.createElement("div");
        card.classList.add ("card");
        books.appendChild(card);
        
        // button to remove bookCard
        const delBtn = document.createElement("button")
        delBtn.id = 'delBtn';
        delBtn.innerHTML = 'X';
        card.appendChild(delBtn);

        delBtn.addEventListener('click', function handleClick(event) {
            card.remove();
        })

        // create Title, Author and Pages paragrafs
        for (let key in myLibrary) {
            console.log(`${key}: ${myLibrary[key]}`);
            const para = document.createElement("p");
            para.textContent = (`${key}: ${myLibrary[key]}`);
            card.appendChild(para);
        }

        //button to change read status color
        const readBtn = document.createElement("button");
        readBtn.id = 'readBtn';
        readBtn.innerHTML = 'Read'
        card.appendChild(readBtn);

        let index = 0;

        const colors = ['#ff0000', 'green'];

        readBtn.addEventListener('click', function onClick() {
        readBtn.style.backgroundColor = colors[index];

        index = index >= colors.length -1 ? 0 : index + 1;
        })
    })
}


// addBookToLibrary ("Title1", "Author1", "Page1");
// addBookToLibrary ("Title2", "Author2", "Page2");
// addBookToLibrary ("Title3", "Author3", "Page3");
// addBookToLibrary ("Title4", "Author4", "Page4");
// addBookToLibrary ("Title5", "Author5", "Page5");
// addBookToLibrary ("Title6", "Author6", "Page6");








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



