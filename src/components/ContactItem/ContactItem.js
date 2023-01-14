import propTypes from 'prop-types';
import { DelButton, ListItem } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <ListItem>
      <span>{name}: </span>
      <span>{number}</span>
      <DelButton type="button" onClick={() => onDelete(id)}>
        Delete
      </DelButton>
    </ListItem>
  );
};

ContactItem.propTypes = {
  name: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
  onDelete: propTypes.func.isRequired,
};
