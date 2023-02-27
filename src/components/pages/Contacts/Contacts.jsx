// import { token } from 'components/http/http';
import { Notify } from 'notiflix';

import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';

import { contactsFilterAction } from 'redux/contacts/contacts.slice';

import {
  Main,
  MainTitle,
  SecondartTitle,
  LoadingTitle,
} from 'components/TitleAndMainStyled/TitleAndMainStyled.styled';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

import {
  addContactThunk,
  getContactsThunk,
  deleteContactsThunk,
} from 'redux/contacts/contacts.thunk';

import {
  selectFilterContacts,
  selectIsLoading,
  selectFilteredContacts,
} from 'redux/contacts/contacts.selectors';

import { selectAuthIsLoggedIn } from 'redux/auth/auth-selectors';

export const Contacts = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterContacts);
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  useEffect(() => {
    isLoggedIn && dispatch(getContactsThunk());
  }, [isLoggedIn, dispatch]);

  const addUser = data => {
    const findExistsName = contacts?.some(
      contact => contact.name === data.name
    );

    if (findExistsName) {
      Notify.warning(`${data.name} is already in contacts`);
      return;
    } else {
      const newAbonent = {
        ...data,
      };

      dispatch(addContactThunk(newAbonent));
    }
  };

  const handleSearch = e => {
    dispatch(contactsFilterAction(e.target.value));
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContactsThunk(contactId));
  };

  const contactsLenght = contacts.length;

  return (
    <>
      <Main>
        <MainTitle>PhoneBook</MainTitle>
        <ContactForm onSubmit={addUser} />
        <SecondartTitle>Contacts</SecondartTitle>
        <Filter filterValue={filter} onSearch={handleSearch} />
        {isLoading && <LoadingTitle>Processing your request...</LoadingTitle>}
        {contactsLenght > 0 && (
          <ContactList users={contacts} onDeleteContact={handleDeleteContact} />
        )}
      </Main>
    </>
  );
};
