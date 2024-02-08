import axios from 'axios';

const apiEndPoint = "http://localhost:9999/contacts";

//action type constants
export const WAIT = "wait";
export const ERR = "error";
export const REFRESH = "refresh";
export const MARK_CONTACT_EDITABLE = " mark contact editable";
export const UNMARK_CONTACT_EDITABLE = " un mark contact editable";

//action creator methods
export const createWaitAction = msg => ({ type: WAIT, msg });
export const createErrAction = errMsg => ({ type: ERR, errMsg });
export const createRefreshAction = contacts => ({ type: REFRESH, contacts });
export const createMarkContactEditbleAction = id => ({ type: MARK_CONTACT_EDITABLE, id });
export const createUnMarkContactEditbleAction = id => ({ type: UNMARK_CONTACT_EDITABLE, id });

//thunk action creator methods
export const createLoadContactsAction = () => (dispatch => {
    dispatch(createWaitAction("Please wait while we load data...!"));
    axios.get(apiEndPoint)
        .then(resp => dispatch(createRefreshAction(resp.data)))
        .catch(resp => { console.log(resp); dispatch(createErrAction("Unable to load data! Please try later!")) })
});

export const createAddContactAction = contact => (dispatch => {
    dispatch(createWaitAction("Please wait while we save data...!"));
    contact.id=undefined;
    axios.post(apiEndPoint,contact)
        .then(resp => createLoadContactsAction()(dispatch) )
        .catch(resp => { console.log(resp); dispatch(createErrAction("Unable to save data! Please try later!")) })
 });

export const createReplaceContactAction = contact => (dispatch => { 
    dispatch(createWaitAction("Please wait while we save data...!"));
    contact.isEditing = undefined;
    axios.put(apiEndPoint +"/"+contact.id,contact)
        .then(resp => createLoadContactsAction()(dispatch) )
        .catch(resp => { console.log(resp); dispatch(createErrAction("Unable to save data! Please try later!")) })
});

export const createRemoveContactAction = id => (dispatch => { 
    dispatch(createWaitAction("Please wait while we delete data...!"));
    axios.put(apiEndPoint +"/"+id)
        .then(resp => createLoadContactsAction()(dispatch) )
        .catch(resp => { console.log(resp); dispatch(createErrAction("Unable to delete data! Please try later!")) })
});
