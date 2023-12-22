import css from "./Filter.module.css"
import PropTypes from 'prop-types';

export const Filter = ({filterValue, onChange}) => {

    return (
       <div className={css.filterBox}>
            <label>Find contacts by name
                <br/>
        <input
            className={css.filterInput}
            type="text"
            name="filter"
            value={filterValue}
            onChange={onChange}
          />
            </label>
            </div>
    )
}


Filter.propTypes = {
  filterValue: PropTypes.string,
  onChange: PropTypes.func
}