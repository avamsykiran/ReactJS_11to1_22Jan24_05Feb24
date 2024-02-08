
import { WAIT,ERR,REFRESH, MARK_CONTACT_EDITABLE, UNMARK_CONTACT_EDITABLE } from './actions';

const initData = () => ({
    contacts: null,
    msg:null,
    errMsg:null
});

const contactsReducer = (state = initData(), action) => {
    let { contacts, msg,errMsg } = state;

    msg=null;
    errMsg=null;

    switch (action.type) {
        case WAIT:
            msg = action.msg;
            break;
        case ERR:
            errMsg = action.errMsg;
            break;
        case REFRESH:
            contacts = [...action.contacts];
            break;
        case MARK_CONTACT_EDITABLE:
            contacts = contacts.map(c => c.id === action.id ? { ...c, isEditing: true } : c);
            break;
        case UNMARK_CONTACT_EDITABLE:
            contacts = contacts.map(c => c.id === action.id ? { ...c, isEditing: undefined } : c);
            break;
    }

    return { contacts, msg, errMsg };
}

export default contactsReducer;