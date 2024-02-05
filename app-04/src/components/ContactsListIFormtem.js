import { useState } from 'react';

const ContactsListFormItem = ({ contact, save, cancelEdit }) => {

    let [id, setId] = useState(contact ? contact.id : 0);
    let [name, setName] = useState(contact ? contact.name : "");
    let [dob, setDob] = useState(contact ? contact.dob : new Date().toISOString().substring(0, 10));
    let [mail, setMail] = useState(contact ? contact.mail : "");
    let [mobile, setMobile] = useState(contact ? contact.mobile : "");
    let isEditing = contact ? contact.isEditing : false;

    const reset = () => {
        setId(0);
        setName("");
        setDob(new Date().toISOString().substring(0, 10));
        setMail("");
        setMobile("");
    }

    const saveBtnClicked = e => {
        let contact = { id, name, dob, mail, mobile };
        save(contact);
        reset();
    };

    const cancelBtnClicked = e => (isEditing ? cancelEdit(id) : reset());

    return (
        <form className='row border-bottom border-primary p-2 text-center'>
            <div className='col-1'>{id}</div>
            <div className='col'>
                <input type="text" className='form-control' value={name}
                    onChange={e => setName(e.target.value)} />
            </div>
            <div className='col-2'>
                <input type="date" className='form-control' value={dob}
                    onChange={e => setDob(e.target.value)} />
            </div>
            <div className='col-2'>
                <input type="text" className='form-control' value={mail}
                    onChange={e => setMail(e.target.value)} />
            </div>
            <div className='col-2'>
                <input type="text" className='form-control' value={mobile}
                    onChange={e => setMobile(e.target.value)} />
            </div>
            <div className='col-2'>
                <button type="button" className="btn btn-sm btn-primary me-1" onClick={saveBtnClicked}>
                    SAVE
                </button>
                <button type="button" className="btn btn-sm btn-danger" onClick={cancelBtnClicked}>
                    CANCEL
                </button>
            </div>
        </form>
    );
}

export default ContactsListFormItem;