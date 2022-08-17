import { Component } from 'react';
// import { nanoid } from 'nanoid';
import Form from './Phonebook/Form';

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
    this.setState(prevState => ({
      contacts: [data, ...prevState.contacts]
    }))

  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <label>Find contacts by name
          <input type="text" name='filter' placeholder='...'/>
        </label>
        <ul>
          {this.state.contacts.map(({id, name, number}) => <li key={id}>{name} : {number}</li>)}
        </ul>
      </div>
    );
  }
}
