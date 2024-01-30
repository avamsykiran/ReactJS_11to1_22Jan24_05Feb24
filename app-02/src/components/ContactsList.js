import { Component } from 'react';
import ContactsListHeader from './ContactsListHeader';
import ContactsListItem from './ContactsListItem';

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

    render() {

        let {contacts} = this.state;

        return (
            <section className='container-fluid p-4'>
                <h4>Contacts List</h4>

                <ContactsListHeader />
                {contacts && contacts.length>0 && contacts.map( c => (
                    <ContactsListItem contact={c} />
                ))}
            </section>
        );
    }
}

export default ContactsList;