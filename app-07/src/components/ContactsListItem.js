import { useDispatch } from 'react-redux';
import { createRemoveContactAction, createMarkContactEditbleAction } from '../state/actions';

const ContactsListItem = ({ contact }) => {
    const dispatch = useDispatch();

    return (
        <div className='row border-bottom border-primary p-2'>
            <div className='col-1 text-end'>{contact.id}</div>
            <div className='col'>{contact.name}</div>
            <div className='col-2 text-center'>{contact.dob}</div>
            <div className='col-2'>{contact.mail}</div>
            <div className='col-2 text-center'>{contact.mobile}</div>
            <div className='col-2 text-center'>
                <button type="button" className="btn btn-sm btn-secondary me-1"
                    onClick={e => dispatch(createMarkContactEditbleAction(contact.id))}>
                    EDIT
                </button>
                <button type="button" className="btn btn-sm btn-danger"
                    onClick={e => dispatch(createRemoveContactAction(contact.id))} >
                    DELETE
                </button>
            </div>
        </div>
    )
};

export default ContactsListItem;