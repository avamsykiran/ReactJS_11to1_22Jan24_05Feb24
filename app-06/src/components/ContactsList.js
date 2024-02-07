import { useSelector } from 'react-redux';
import ContactsListHeader from './ContactsListHeader';
import ContactsListItem from './ContactsListItem';
import ContactsListFormItem from './ContactsListIFormtem';

const ContactsList = () => {

    let contacts = useSelector(state => state.contacts);

    return (
        <section className='container-fluid p-4'>
            <h4>Contacts List</h4>
            <ContactsListHeader />

            <ContactsListFormItem />

            {contacts && contacts.length > 0 && contacts.map(c => (
                c.isEditing ? <ContactsListFormItem key={c.id} contact={c} /> : <ContactsListItem key={c.id} contact={c} />
            ))}
        </section>
    );
}

export default ContactsList;