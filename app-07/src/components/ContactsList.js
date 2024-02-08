import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { createLoadContactsAction } from '../state/actions';

import ContactsListHeader from './ContactsListHeader';
import ContactsListItem from './ContactsListItem';
import ContactsListFormItem from './ContactsListIFormtem';

const ContactsList = () => {

    const dispatch = useDispatch();

    useEffect(() => dispatch(createLoadContactsAction()), []);

    let contacts = useSelector(state => state.contacts);
    let msg = useSelector(state => state.msg);
    let errMsg = useSelector(state => state.errMsg);

    return (
        <section className='container-fluid p-4'>
            <h4>Contacts List</h4>

            {errMsg && (
                <div className='alert alert-danger p-2 fw-bold'>
                    {errMsg}
                </div>
            ) }

            <ContactsListHeader />
            <ContactsListFormItem />

            {msg && (
                <div className='alert alert-info p-2 fw-bold'>
                    {msg}
                </div>
            ) }

            {contacts && contacts.length > 0 && contacts.map(c => (
                c.isEditing ? <ContactsListFormItem key={c.id} contact={c} /> : <ContactsListItem key={c.id} contact={c} />
            ))}
        </section>
    );
}

export default ContactsList;