import PropTypes from 'prop-types';
import {Button} from 'components/Button/Button';
import {Item} from './ContactListItem.styled';

const ContactListItem = ( {name, number, id , onClick }) => {
  return (
    <Item>
      {name}: {number} <Button title="Delete" type="button" onClick={() => onClick(id)} />
    </Item>
  );
};

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}