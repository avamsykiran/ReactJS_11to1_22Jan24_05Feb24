
import { ADD_CONTACT, REMOVE_CONTACT, REPLACE_CONTACT, MARK_CONTACT_EDITABLE, UNMARK_CONTACT_EDITABLE } from './actions';

const initData = () => ({
    contacts: [
        { id: 1, name: "Vamsy", dob: "1985-06-11", mail: "vamsy@gmail.com", mobile: "9052224753" },
        { id: 2, name: "Sagar", dob: "1987-05-02", mail: "sagar@gmail.com", mobile: "9052044753" }
    ],
    nextContactId: 3
});

const contactsReducer = (state = initData(), action) => {
    let { contacts, nextContactId } = state;

    switch (action.type) {
        case ADD_CONTACT:
            contacts = [...contacts, { ...action.contact, id: nextContactId }];
            nextContactId = nextContactId + 1;
            break;
        case REPLACE_CONTACT:
            contacts = contacts.map(c => c.id === action.contact.id ? {...action.contact,isEditing:undefined} : c);
            break;
        case REMOVE_CONTACT:
            contacts = contacts.filter(c => c.id !== action.id);
            break;
        case MARK_CONTACT_EDITABLE:
            contacts = contacts.map(c => c.id === action.id ? { ...c, isEditing: true } : c);
            break;
        case UNMARK_CONTACT_EDITABLE:
            contacts = contacts.map(c => c.id === action.id ? { ...c, isEditing: undefined } : c);
            break;
    }

    return { contacts, nextContactId };
}

export default contactsReducer;