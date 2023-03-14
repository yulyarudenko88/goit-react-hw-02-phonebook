import PropTypes from 'prop-types';
import ContactListItem from 'components/ContactListItem/ContactListItem';

const ContactList = ({ contacts, onClick }) => (
  <ul>
    {contacts.map(({ name, number, id }) => {
      return (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          id={id}
          onClick={onClick}
        />
      );
    })}
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