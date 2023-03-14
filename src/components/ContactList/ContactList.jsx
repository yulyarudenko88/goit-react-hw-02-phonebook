import PropTypes from 'prop-types';
import { Button } from 'components/Button/Button';
import {Contact} from './ContactList.styled';

export const ContactList = ({ contacts, onClick }) => (
  <ul>
    {contacts.map(({ name, number, id, onClick }) => (
      <Contact>
        {name}: {number}
        <Button title="Delete" type="button" onClick={() => onClick(id)} />
      </Contact>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      onClick: PropTypes.func,
    })
  ),
};
