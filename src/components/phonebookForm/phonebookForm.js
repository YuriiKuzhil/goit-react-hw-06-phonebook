import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { nanoid } from 'nanoid';
import actions from '../../redux/actions';
import {
  Form,
  Button,
  Label,
  Input,
  UserIcon,
  PhoneIcon,
} from './phonebookForm.styled';

export default function PhonebookForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const item = useSelector(state => state.contacts.items);

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const compareNames = name => {
    const normalizeName = name.toLowerCase();
    return item.some(contact => contact.name.toLowerCase() === normalizeName);
  };
  const addContact = e => {
    e.preventDefault();

    const contact = {
      id: nanoid(5),
      name,
      number,
    };

    if (compareNames(contact.name)) {
      toast.error(`${contact.name} is already in contacts`, {
        style: {
          border: '1px solid #E8301C',
          color: '#E8301C',
        },
      });
      setName('');
      setNumber('');
      return;
    }
    dispatch(actions.addContact(contact));
    toast.success(`Contact ${contact.name} added!`, {
      style: {
        border: '1px solid #49FF71',
      },
    });

    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={addContact}>
      <Label>
        Name
        <Input
          onChange={handleChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <UserIcon />
      </Label>
      <Label>
        Phone Number
        <Input
          onChange={handleChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <PhoneIcon />
      </Label>

      <Button type="submit">Add contact</Button>
    </Form>
  );
}
