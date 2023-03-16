import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../../index.css'

import Form from './Form';
import PhoneBookList from './PhoneBookList';
import Filter from './Filter';

import {
  fetchContacts,
  fetchAddContact,
  fetchDeleteContact,
} from 'redux/contacts/contacts-operations';
import { getFilterContacts } from 'redux/contacts/contacts-selectors';

import { getFilter } from 'redux/filter/filter-selectors';
import { setFilter } from 'redux/filter/filter-slice';

export default function PhoneBook() {
  const contacts = useSelector(store => store.contacts.items);
  const visibleContacts = useSelector(getFilterContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onAddContact = ({ name, number }) => {
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].name === name) {
      return alert("we are have problem");
      }
    }
    dispatch(fetchAddContact({ name, number }));
  };

  const onDeleteContact = id => {
    dispatch(fetchDeleteContact(id));
  };
  return (
    <>
      <Form onSubmit={onAddContact} />
      {contacts.length > 0 && (
        <>
          <Filter
            value={filter}
            onChange={({ target }) => dispatch(setFilter(target.value))}
          />
          <PhoneBookList
            contacts={visibleContacts}
            type="button"
            text="delete"
            onClick={onDeleteContact}
          />
        </>
      )}
    </>
  );
}
