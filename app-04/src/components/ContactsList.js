import { useState } from 'react';
import ContactsListHeader from './ContactsListHeader';
import ContactsListItem from './ContactsListItem';
import ContactsListFormItem from './ContactsListIFormtem';

const ContactsList = () => {

    let [contacts, setContacts] = useState([
        { id: 1, name: "Vamsy", dob: "1985-06-11", mail: "vamsy@gmail.com", mobile: "9052224753" },
        { id: 2, name: "Sagar", dob: "1987-05-02", mail: "sagar@gmail.com", mobile: "9052044753" }
    ]);

    let [nextContactId, setNextContactId] = useState(3);

    const addContact = contact => {
        contact.id = nextContactId;
        setContacts([...contacts, contact]);
        setNextContactId(nextContactId + 1);
    }

    const delContact = id => setContacts(contacts.filter(c => c.id !== id));

    const markEditiing = id => setContacts(contacts.map(c => c.id === id ? { ...c, isEditing: true } : c));

    const unmarkEditiing = id => setContacts(contacts.map(c => c.id === id ? { ...c, isEditing: undefined } : c));

    const updateContact =
        contact => setContacts(contacts.map(c => c.id === contact.id ? { ...contact, isEditing: undefined } : c));

    return (
        <section className='container-fluid p-4'>
            <h4>Contacts List</h4>
            <ContactsListHeader />

            <ContactsListFormItem save={addContact} />

            {contacts && contacts.length > 0 && contacts.map(c => (
                c.isEditing ?
                    <ContactsListFormItem
                        key={c.id}
                        contact={c}
                        save={updateContact}
                        cancelEdit={unmarkEditiing} /> :
                    <ContactsListItem
                        key={c.id}
                        contact={c}
                        delContact={delContact}
                        markEditiing={markEditiing} />
            ))}
        </section>
    );
}

export default ContactsList;