import { displayBooks, addFormEventListener } from '../module/awesomebooks.js';
import showComponent from '../module/component.js';
import { DateTime } from '../module/luxon.js';

const formElem = document.querySelector('form');
const containerElem = document.getElementById('book-detail');
const navLinks = document.querySelectorAll('.menu-items li');
const currentDateEl = document.getElementById('current-date');

setInterval(() => {
  currentDateEl.textContent = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
}, 1000);

showComponent(navLinks);
displayBooks(containerElem);
addFormEventListener(formElem, containerElem);