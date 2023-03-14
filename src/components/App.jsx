import React, { Component } from 'react';
import { Section } from 'components/Section/Section';
import { AddContactsForm } from 'components/AddContactsForm/AddContactsForm';
import { ContactList } from 'components/ContactList/ContactList';
// import { Statistics } from 'components/Statistics/Statistics';

export class App extends Component {
  state = {
    contacts: [],
  };

  formSubmit = data => {
    console.log(this.state);
    // const isMatch = this.state.contacts.find(
    //   contact => contact.name.toLowerCase() === data.name.toLowerCase()
    // );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const {contacts} = this.state;
    return (
      <>
        <Section title="Phonebook">
          <AddContactsForm formSubmit={() => this.formSubmit()} />
        </Section>
        <Section title="Contacts">
          <ContactList contacts={contacts} onDeleteContact={this.deleteContact} />
        </Section>
      </>
    );
  }
}
