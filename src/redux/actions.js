import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const addContact = createAction('contact/add', ({ name, number }) => ({
  payload: {
    id: nanoid(5),
    name,
    number,
  },
}));

const deleteContact = createAction('contact/delete');
const changeFilter = createAction('contact/changeFilter');
const themeChange = createAction('contact/themeChange');

const contactsActions = {
  addContact,
  deleteContact,
  changeFilter,
  themeChange,
};
export default contactsActions;
