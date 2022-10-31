// check if the localStorage has a item
let collections = JSON.parse(localStorage.getItem('books-collection')) || [];

// create collection as page load
const createCollection = (book, bookContainer) => {
  const content = `
    <article class="book">
      <p>"${book.name.charAt(0).toUpperCase() + book.name.slice(1)}" by ${book.author.charAt(0).toUpperCase() + book.author.slice(1)}</p>
      <button id="${book.id}">Remove</button>
    </article>
  `;
  // append to the DOM
  bookContainer.insertAdjacentHTML('beforeend', content);
};

// add event listener to button
const removeBook = (id) => {
  const btn = document.getElementById(`${id}`);

  // onclick remove item from localStorage and collections
  btn.addEventListener('click', (event) => {
    event.target.parentElement.remove();
    collections = collections.filter((book) => book.id !== id);
    // add filtered collections to localStorage
    localStorage.setItem('books-collection', JSON.stringify(collections));
  });
};

export const displayBooks = (booksContainer) => {
  collections.forEach((book) => {
    createCollection(book, booksContainer);
    removeBook(book.id);
  });
};

export const addFormEventListener = (form, booksContainer) => {
  form.addEventListener('submit', (event) => {
    // prevent default behavior of form
    event.preventDefault();

    const book = {
      name: form['book-title'].value,
      author: form['book-author'].value,
      // getting the ID value
      id:
        collections.length === 0 ? 1 : parseInt(collections.at(-1).id, 10) + 1,
    };

    // add book to the end of the collections
    collections.push(book);
    localStorage.setItem('books-collection', JSON.stringify(collections));

    // function call to create an item
    createCollection(book, booksContainer);
    // function call to remove item
    removeBook(book.id);
    form.reset();
  });
};
