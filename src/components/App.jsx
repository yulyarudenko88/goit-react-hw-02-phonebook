import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { Section } from 'components/Section/Section';
import { AddContactsForm } from 'components/AddContactsForm/AddContactsForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';

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

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const isExistName = this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExistName) {
      alert(`${name} is already in contacts list!`);
    } else {
      // console.log(contact);
      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
    }
  };

  deleteContact = contactId => {
    // console.log(contactId);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }));
  };

  changeFilter = e => this.setState({ filter: e.target.value });

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedContact = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedContact)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <Section title="Phonebook">
          <AddContactsForm onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactsList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}
