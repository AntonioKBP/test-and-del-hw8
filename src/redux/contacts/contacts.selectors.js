import { createSelector } from '@reduxjs/toolkit';

export const selectFilterContacts = state => {
  return state.contacts.filter;
};
export const selectContacts = state => {
  return state.contacts.contacts.items;
};
export const selectIsLoading = state => {
  return state.contacts.contacts.isLoading;
};

// this selector wil trigger rerendering on every input tap in search input,
// but  also with other redux selectors

// export const selectFilteredContacts = state => {
//   const contacts = selectContacts(state);
//   const filter = selectFilterContacts(state);
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );
// };

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilterContacts], // array of selectors
  (contacts, filter) => {
    // function witch will be memomized
    return contacts?.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

// This is selector with something like useMemo but for selectors,
// cos we can't use useMemo here
// will rerender on only search input
