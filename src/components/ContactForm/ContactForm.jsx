// eslint-disable-next-line
import React, { Component } from 'react';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  
  state = {
  
  name: '',
  number: ''
}

  handleInputChange = (event) => {
   
    const { name, value } = event.currentTarget;
  this.setState ({[name]: value})
  }
  
  
  
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: "", number: "" });
  }

  
  
  
  
  render() {

    return (
      
    <form className={css.mainForm} onSubmit={this.handleSubmit}>
      <div>
        <label className={css.formLabel}>
          
          Name
            <input
              className={css.formInput}
            value={this.state.name}
            onChange={this.handleInputChange}
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
            value={this.state.number}
            onChange={this.handleInputChange}
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
  
  
};
