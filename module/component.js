const booksSection = document.getElementById('book-container');
const addBookSection = document.getElementById('book-form');
const contactSection = document.getElementById('contact-info');

const showComponent = (componentId) => {
  switch (componentId) {
    case 'book-container':
      booksSection.classList.add('visible');
      addBookSection.classList.remove('visible');
      contactSection.classList.remove('visible');
      break;
    case 'book-form':
      booksSection.classList.remove('visible');
      addBookSection.classList.add('visible');
      contactSection.classList.remove('visible');
      break;
    case 'contact-info':
      booksSection.classList.remove('visible');
      addBookSection.classList.remove('visible');
      contactSection.classList.add('visible');
      break;
    default:
      break;
  }
};

const addNavLinksEventListener = (navLinks) => {
  navLinks.forEach((link) => {
    link.addEventListener('click', (ev) => {
      const componentId = ev.target.getAttribute('showComponent');
      showComponent(componentId);
    });
  });
};

export default addNavLinksEventListener;
