//https://658476f04d1ee97c6bcfcd6d.mockapi.io/contacts
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://658476f04d1ee97c6bcfcd6d.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'fetchContacts',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('contacts');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'deleteContact',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`contacts/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'createContactThunk',
  async ({ name, number }, thunkAPI) => {
    try {
      const { data } = await axios.post('contacts', {
        name: name,
        phone: number,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const fetchContactsThunk = () => async dispatch => {
//   try {
//     dispatch(isPending());
//     const { data } = await axios.get('contacts');
//     console.log(data);
//     dispatch(fetchingData(data));
//   } catch (error) {
//     dispatch(isError(error.message));
//   }
// };
// export const deleteContactThunk = id => async dispatch => {
//   try {
//     // dispatch(isPending());
//     const { data } = await axios.delete(`contacts/${id}`);
//     console.log(data);
//     dispatch(deleteContactAction(data.id));
//     return;
//     // return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
// export const createContactThunk =
//   ({ name, number }) =>
//   async dispatch => {
//     try {
//       const { data } = await axios.post('contacts', {
//         name: name,
//         phone: number,
//       });
//       console.log(data);
//       dispatch(createContactAction(data));
//     } catch (error) {
//       dispatch(isError(error.message));
//     }
//   };
