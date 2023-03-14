import React, { Component } from 'react';
import { Section } from 'components/Section/Section';
import { AddContactsForm } from 'components/AddContactsForm/AddContactsForm';
// import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
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
  }
  render() {
    return (
      <>
        <Section title="Phonebook">
          <AddContactsForm formSubmit={()=>this.formSubmit()}/>
        </Section>
        <Section title="Contacts"></Section>
      </>
    );
  }
}
