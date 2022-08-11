import { createReducer } from '@reduxjs/toolkit';
import { filterUser } from './contacts-actions';
import { combineReducers } from 'redux';

import {
  fetchContacts,
  fetchAddContact,
  fetchDeleteContact,
} from './contacts-operations';

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [fetchAddContact.fulfilled]: (state, { payload }) => [payload, ...state],
  [fetchDeleteContact.fulfilled]: (state, { payload }) =>
    state.filter(el => el.id !== payload),
});

const filter = createReducer('', {
  [filterUser]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [fetchAddContact.pending]: () => true,
  [fetchAddContact.fulfilled]: () => false,
  [fetchAddContact.rejected]: () => false,
  [fetchDeleteContact.pending]: () => true,
  [fetchDeleteContact.fulfilled]: () => false,
  [fetchDeleteContact.rejected]: () => false,
});

export const rootReducer = combineReducers({
  items,
  filter,
  loading,
});

export default rootReducer;
//Hometask7 vers 1
// import { combineReducers } from 'redux';
// import {
//   deleteContactError,
//   deleteContactRequest,
//   deleteContactSuccess,
//   filterContacts,
//   addContactError,
//   addContactRequest,
//   addContactSuccess,
//   fetchContactsError,
//   fetchContactsRequest,
//   fetchContactsSuccess,
// } from './contact-actions';

// const items = createReducer([], {
//   [fetchContactsSuccess]: (_, { payload }) => payload,
//   [addContactRequest]: (state, { payload }) => [...state, payload],
//   [deleteContactRequest]: (state, { payload }) =>
//     state.filter(el => el.id !== payload),
// });

// const filter = createReducer('', {
//   [filterContacts]: (_, { payload }) => payload,
// });

// const loading = createReducer(false, {
//   [fetchContactsRequest]: (state, { payload }) => true,
//   [fetchContactsSuccess]: (state, { payload }) => false,
//   [fetchContactsError]: (state, { payload }) => false,
//   [addContactRequest]: (state, { payload }) => true,
//   [addContactSuccess]: (state, { payload }) => false,
//   [addContactError]: (state, { payload }) => false,
//   [deleteContactRequest]: (state, { payload }) => true,
//   [deleteContactSuccess]: (state, { payload }) => false,
//   [deleteContactError]: (state, { payload }) => false,
// });

// export default combineReducers({
//   items,
//   filter,
//   loading,
// });

//Hometask 6
// const itemReducer = createReducer([], {
//   [addUser]: (state, action) => [...state, action.payload],
//   [deleteUser]: (state, action) => state.filter(el => el.id !== action.payload),
// });

// const filterReducer = createReducer('', {
//   [filterUser]: (_, action) => action.payload,
// });

// export default combineReducers({
//   items: itemReducer,
//   filter: filterReducer,
// });
