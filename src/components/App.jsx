// eslint-disable-next-line

import { nanoid } from 'nanoid';
import  { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';


export const App = ()  => {

  const [contacts, setContacts] = useState( () => JSON.parse(window.localStorage.getItem('contacts')) ?? []);
  const [filter, setFilter] = useState('');


  useEffect(() => {

    window.localStorage.setItem('contacts', JSON.stringify(contacts))
  },
    [contacts]);

  
  
  
//     componentDidMount() {
  
//       console.log("Замаунтился")
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);
//      if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
// }

  
  //фильтр имен работает
 
  const changeFilter = (event, prevState) => {

    setFilter(event.currentTarget.value);

  }

  // кнопка удаления работает
  
  const deleteContact = (contactID) => {
    setContacts(prevState => prevState.filter(contact => contact.id !== contactID));
    
  };


  const formSubmithandler = (data,prevState) => {
    
    console.log(data);
    const newContact = {
      id: nanoid(),
      name: data.name,
      number: data.number
    }

    contacts.find(contact => contact.name.toLowerCase().includes(data.name.toLowerCase())) ? alert(`${data.name} is already in contacts.`) :
      setContacts( prevState => [newContact, ...prevState]);

    
  }

  const normalizedFilter = filter.toLocaleLowerCase();
  const visibleContactsList = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  
    
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

        <ContactForm  onSubmit = {formSubmithandler}></ContactForm>

        <h2>Contacts</h2>

        <Filter filterValue={filter} onChange={changeFilter}></Filter>
        <ContactList contactsList={visibleContactsList} onDeleteContact={deleteContact}></ContactList>
        
      </div>
    
    )
 }

