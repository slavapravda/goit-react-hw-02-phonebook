import { Component } from 'react';
// import { nanoid } from 'nanoid';
import Form from './Phonebook/Form';
import Filter from './Phonebook/Filter';
import ContactList from './Phonebook/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    // const {contacts} = this.state

    this.setState(prevState => ({
      contacts: [data, ...prevState.contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  filterChange = event => {
    const { value } = event.currentTarget;
    this.setState({
      filter: value,
    });
  };

  filterState = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
      const contacts = this.filterState()
    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter onChange={this.filterChange}/>
        <ContactList contacts={contacts} deleteContact={this.deleteContact}/>
      </div>
    );
  }
}
