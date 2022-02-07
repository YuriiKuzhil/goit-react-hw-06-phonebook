import { useDispatch, useSelector } from 'react-redux';
import { Label, Input, SearchIcon } from './ContactsFilter.styled';
import actions from '../../../redux/contacts/contacts-actions';

const ContactsFilter = () => {
  const value = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        value={value}
        onChange={e => dispatch(actions.changeFilter(e.target.value))}
      />
      <SearchIcon />
    </Label>
  );
};

export default ContactsFilter;
