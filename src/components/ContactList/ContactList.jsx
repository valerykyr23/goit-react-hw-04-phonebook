import css from "./ContactList.module.css";
import PropTypes from 'prop-types';

export const ContactList = ({ contactsList, onDeleteContact }) => {
    
    return (
        <ul className={css.contactsList}>
            {contactsList.map(({ id, name, number }) => (<li className={css.contactItem} key={id}><p>{name}:</p> <span>{number}</span> <button className={css.delButton} onClick={() => onDeleteContact(id)} >Delete</button></li>))}
        </ul>
    )
}


ContactList.propTypes = {
    contactsList: PropTypes.array,
    onDeleteContact: PropTypes.func
}