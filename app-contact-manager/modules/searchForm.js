import { addMessage, clearMessages } from './notificationBar.js';
import { findContacts } from './query.js';
import createMessage from './message.js';
import { pluralize } from './utils.js';

const searchForm = document.querySelector('.search-form');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();

  //current target este elementul pe care am rulat addEventListener
  const form = event.currentTarget;
  const querryInput = form.q;
  //q = numele inputului
  const querryString = querryInput.value;

  clearMessages();

  // alert(querryString);

  const contacts = findContacts(querryString);
  const contactsCount = contacts.length;

  if (contacts.length < 1) {
    // console.log('No contacts found');
    // const element = document.createElement('div');
    // element.classList.add('alert');
    // element.classList.add('alert-warning');
    // element.innerText = 'No contacts found!';
    // am refactorizat codul: fara chestii de DOM
    addMessage(createMessage('No contacts found!', 'warning'));
  } else {
    addMessage(
      createMessage(
        `Found ${pluralize(contactsCount, {
          one: 'contact',
          many: 'contacts',
        })}.`,
      ),
    );
  }

  // goleste autmat formularul unde caut nume
  querryInput.value = '';
});

export default searchForm;
