//array din memorie e considerat backendul nostru
//acest query e API-ul oe care il folosim pt a primi informatiile

import contacts from './data.js';

export const findContacts = (needle = 'query') => {
  // needle = ac din carul cu fan

  const results = contacts.filter((contact) => {
    return needle.trim() === contact.name;
  });
  // trim ia si cu spatii inainte dupa nume
  return results;
};
