import PropTypes from 'prop-types';
import { FiUser } from 'react-icons/fi';
// import { Button } from 'components/Button/Button';
import { Contact } from './ContactsList.styled';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  // console.log(onDeleteContact);

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id} >
          <FiUser />
          {name}: {number}
          {/* <Button type="submit" onClick={() => onDeleteContact(id)}>
            Delete
          </Button> */}
          <button type="button"  onClick={() => onDeleteContact(id)}>
          Delete
        </button>
        </Contact>
      ))}
    </ul>
  );
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
