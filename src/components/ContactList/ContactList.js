import propTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContactItem';
import { ContactListStyled } from './ContactList.styled';

export const ContactList = ({ filterContacts, onDelete }) => {
  return (
    <ContactListStyled>
      {filterContacts.map(({ name, number, id }) => (
        <ContactItem
          key={id}
          name={name}
          id={id}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </ContactListStyled>
  );
};

ContactList.propTypes = {
  filterContacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  onDelete: propTypes.func.isRequired,
};
