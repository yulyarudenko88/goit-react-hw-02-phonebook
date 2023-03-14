import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { Section } from 'components/Section/Section';
import { AddContactsForm } from 'components/AddContactsForm/AddContactsForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
// import { Statistics } from 'components/Statistics/Statistics';

export class App extends Component {
  state = {
    contacts: [],
  };

  
  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    console.log(contact);
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    console.log(contactId);
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <>
        <Section title="Phonebook">
          <AddContactsForm onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <ContactsList
            contacts={contacts}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}
