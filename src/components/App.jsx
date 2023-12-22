// eslint-disable-next-line

import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';


export class App extends Component  {

state = {
  contacts: [],
  filter: ''
  }




  componentDidUpdate(prevProps, prevState) {
     
    console.log("Апдейтнулся")
  
    if (this.state.contacts !== prevState.contacts) {
      

      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
}

  
    componentDidMount() {
  
      console.log("Замаунтился")
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
     if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
}

 
  changeFilter = (event) => {
    this.setState({
      filter: event.currentTarget.value
    })
  }
  
  deleteContact = (contactID) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactID)
    }))
  };


  formSubmithandler = (data) => {
    
  
    const newContact = {
      id: nanoid(),
      name: data.name,
      number: data.number
    }

    

this.state.contacts.find(contact=> contact.name.toLowerCase().includes(data.name.toLowerCase())) ? alert(`${data.name} is already in contacts.`) :

    this.setState(prevState => ({
      contacts: [newContact,...prevState.contacts]
    }))
  }

  
  render() {

    const { filter } = this.state;

    const normalizedFilter = this.state.filter.toLowerCase();
  const visibleContactsList = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  
    
    return (
      
      <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
          color: '#010101',
          flexDirection: 'column',
      }}
    >
        <h1>Phonebook</h1>

        <ContactForm  onSubmit = {this.formSubmithandler}></ContactForm>

        <h2>Contacts</h2>

        <Filter filterValue={filter} onChange={this.changeFilter}></Filter>
        <ContactList contactsList={visibleContactsList} onDeleteContact={this.deleteContact}></ContactList>
        
      </div>
    
    )
 }
};
