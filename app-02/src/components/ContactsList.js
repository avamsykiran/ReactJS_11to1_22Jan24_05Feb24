import { Component } from 'react';
import ContactsListHeader from './ContactsListHeader';
import ContactsListItem from './ContactsListItem';
import ContactsListFormItem from './ContactsListIFormtem';

class ContactsList extends Component {
    constructor() {
        super();
        this.state = {
            contacts: [
                { id: 1, name: "Vamsy", dob: "1985-06-11", mail: "vamsy@gmail.com", mobile: "9052224753" },
                { id: 2, name: "Sagar", dob: "1987-05-02", mail: "sagar@gmail.com", mobile: "9052044753" }
            ],
            nextContactId: 3
        };
    }

    addContact = contact => {
        let { contacts, nextContactId } = this.state;
        contact.id = nextContactId;
        this.setState({ contacts: [...contacts, contact], nextContactId: nextContactId + 1 });
    }

    delContact = id => this.setState({ contacts: this.state.contacts.filter(c => c.id !== id) });

    markEditiing = id =>{
         this.setState({ contacts: this.state.contacts.map(c => c.id === id ? { ...c, isEditing: true } : c) });
    }
    
    unmarkEditiing = id => {
        this.setState({ contacts: this.state.contacts.map(c => c.id === id ? { ...c, isEditing: undefined } : c) });
    }

    updateContact = contact => {
        contact.isEditing=undefined;
        this.setState({ contacts: this.state.contacts.map(c => c.id === contact.id ? contact : c) });
    }

    render() {

        let { contacts } = this.state;

        return (
            <section className='container-fluid p-4'>
                <h4>Contacts List</h4>
                <ContactsListHeader />
                
                <ContactsListFormItem save={this.addContact} />
                
                {contacts && contacts.length > 0 && contacts.map(c => (
                    c.isEditing ?
                        <ContactsListFormItem 
                            contact={c}
                            save={this.updateContact}
                            cancelEdit={this.unmarkEditiing} /> :
                        <ContactsListItem 
                            contact={c} 
                            delContact={this.delContact}
                            markEditiing={this.markEditiing} />

                ))}
            </section>
        );
    }
}

export default ContactsList;