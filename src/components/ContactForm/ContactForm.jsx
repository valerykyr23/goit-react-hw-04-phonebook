// eslint-disable-next-line
import React, { useState} from 'react';
import css from './ContactForm.module.css';

export const ContactForm = ({onSubmit}) => {
  

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  

  const handleInputChange = (event) => {
   
    

    switch (event.currentTarget.name) {

      case 'name':
        setName(event.currentTarget.value)
        break;
      
      case 'number':
        setNumber(event.currentTarget.value)
        break;
      
      default:

        console.log("default")
        break;

    }
  };
  
  
  
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  
  

  return (
      
    <form className={css.mainForm} onSubmit={handleSubmit}>
      <div>
        <label className={css.formLabel}>
          
          Name
          <input
            className={css.formInput}
            value={name}
            onChange={handleInputChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
      </div>

      <div>
        <label className={css.formLabel}>
          
          Number
          <input
            className={css.formInput}
            value={number}
            onChange={handleInputChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
      </div>

      <button className={css.addButton} type="submit"> Add contact</button>
    </form>
  );
  
}
  

