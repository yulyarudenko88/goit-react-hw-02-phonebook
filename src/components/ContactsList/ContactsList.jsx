import PropTypes from 'prop-types';
import { Button } from 'components/Button/Button';
import {Contact} from './ContactsList.styled';

export const ContactsList = ({ contacts, onDeleteContact
}) => {
  console.log(onDeleteContact);
  
  return <ul>
  {contacts.map(({ name, number, id}) => (
    <Contact key={id}> 
      {name}: {number}
      <Button title="Delete" type="button" onClick={() => onDeleteContact(id)} />
    </Contact>
  ))}
</ul>
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      onClick: PropTypes.func,
    })
  ),
};
