import propTypes from 'prop-types';
import { FilterContainer, FilterInput } from './Filter.styled';

export const Filter = ({ filter, onFilter }) => {
  return (
    <FilterContainer>
      <label htmlFor="filter">Find contacts by name</label>

      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={onFilter}
      />
    </FilterContainer>
  );
};

Filter.propTypes = {
  onFilter: propTypes.func.isRequired,
  filter: propTypes.string.isRequired,
};
