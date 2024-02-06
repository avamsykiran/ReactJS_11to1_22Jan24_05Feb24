
//action type constants

export const ADD_CONTACT = " add contact";
export const REPLACE_CONTACT = " replace contact";
export const REMOVE_CONTACT = " remove contact";
export const MARK_CONTACT_EDITABLE = " mark contact editable";
export const UNMARK_CONTACT_EDITABLE = " un mark contact editable";

//action creator methods

export const createAddContactAction = contact => ({type:ADD_CONTACT, contact});
export const createReplaceContactAction = contact => ({type:REPLACE_CONTACT, contact});
export const createRemoveContactAction = id => ({type:REMOVE_CONTACT, id});
export const createMarkContactEditbleAction = id => ({type:MARK_CONTACT_EDITABLE, id});
export const createUnMarkContactEditbleAction = id => ({type:UNMARK_CONTACT_EDITABLE, id});

