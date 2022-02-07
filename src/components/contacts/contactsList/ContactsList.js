import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import actions from '../../../redux/contacts/contacts-actions';
import ContactsItem from './contactsItem';
import { List, Message } from './ContactsList.styled';
import { FaFrown } from 'react-icons/fa';

const ContactsList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  const deleteContact = id => {
    dispatch(actions.deleteContact(id));

    toast.success(`Contact deleted!`, {
      style: {
        border: '1px solid #49FF71',
      },
    });
  };
  return (
    <List>
      {filteredContacts.length === 0 ? (
        <Message>
          <FaFrown /> Sorry! No contacts
        </Message>
      ) : (
        filteredContacts.map(({ name, id, number }) => (
          <ContactsItem
            key={id}
            name={name}
            number={number}
            onClick={() => deleteContact(id)}
          />
        ))
      )}
    </List>
  );
};

export default ContactsList;
