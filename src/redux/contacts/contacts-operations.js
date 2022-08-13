import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import {
//   deleteContactError,
//   deleteContactRequest,
//   deleteContactSuccess,
//   addContactError,
//   addContactRequest,
//   addContactSuccess,
//   fetchContactsError,
//   fetchContactsRequest,
//   fetchContactsSuccess,
// } from './contact-actions';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const { data } = await axios.get('/contacts');
    return data;
  }
);

export const fetchAddContact = createAsyncThunk(
  'contacts/fetchAddContact',
  async ({ name, phone }) => {
    const { data } = await axios.post('/contacts', { name, number: phone });
    console.log(data);
    return data;
  }
);

export const fetchDeleteContact = createAsyncThunk(
  'contacts/fetchDeleteContact',
  async id => {
    await axios.delete(`/contacts/${id}`);
    return id;
  }
);

// export const fetchContacts = () => async dispatch => {
//   dispatch(fetchContactsRequest());
//   try {
//     const { data } = await axios.get('/contacts');
//     dispatch(fetchContactsSuccess(data));
//   } catch (error) {
//     dispatch(fetchContactsError(error));
//   }
// };

// export const addContact = () => async dispatch => {
//   dispatch(addContactRequest(contact));
//   try {
//     const { data } = await axios.post('/contacts', contact);
//     dispatch(addContactSuccess(data));
//   } catch (error) {
//     dispatch(addContactError(error));
//   }
// };

// export const deleteContact = id => async dispatch => {
//   dispatch(deleteContactRequest());
//   try {
//     await axios.delete(`/contacts/${id}`);
//     dispatch(deleteContactSuccess(id));
//   } catch (error) {
//     dispatch(deleteContactError(error));
//   }
// };
