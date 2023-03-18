import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../../index.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Form from './Form';
import ContactsList from './ContactsList';
import Filter from './Filter';

import {
  fetchContacts,
  fetchAddContact,
  fetchDeleteContact,
} from 'redux/contacts/contacts-operations';
import { getFilterContacts } from 'redux/contacts/contacts-selectors';

import { getFilter } from 'redux/filter/filter-selectors';
import { setFilter } from 'redux/filter/filter-slice';

export default function Contacts() {
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
        toast.error('Contact with such name already exists');
        return;
      }
    }
    dispatch(fetchAddContact({ name, number })).then(() => {
      toast.success('Contact added successfully');
    }).catch(() => {
      toast.error('Error occurred while adding a contact');
    });
  };
  
  const onDeleteContact = id => {
    dispatch(fetchDeleteContact(id)).then(() => {
      toast.info('Contact deleted successfully');
    }).catch(() => {
      toast.error('Error occurred while deleting a contact');
    });
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
          <ContactsList
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
