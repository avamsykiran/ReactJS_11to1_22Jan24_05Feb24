
const ContactsListItem = ({ contact }) => (
    <div className='row border-bottom border-primary p-2'>
        <div className='col-1 text-end'>{contact.id}</div>
        <div className='col'>{contact.name}</div>
        <div className='col-2 text-center'>{contact.dob}</div>
        <div className='col-2'>{contact.mail}</div>
        <div className='col-2 text-center'>{contact.mobile}</div>
        <div className='col-2 text-center'>
            <button type="button" className="btn btn-sm btn-secondary me-1">EDIT</button>
            <button type="button" className="btn btn-sm btn-danger">DELETE</button>
        </div>
    </div>
);

export default ContactsListItem;