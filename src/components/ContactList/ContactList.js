import propTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContactItem';
import { ContactListStyled } from './ContactList.styled';

export const ContactList = ({ filterContacts, onDelete }) => {
  return (
    <ContactListStyled>
      {filterContacts().map(({ name, number, id }) => (
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
  filterContacts: propTypes.func.isRequired,
  onDelete: propTypes.func.isRequired,
};
