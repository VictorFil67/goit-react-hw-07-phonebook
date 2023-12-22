import { createSlice } from '@reduxjs/toolkit';
import {
  createContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
} from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    // createContactAction:
    //   (state, action) => {
    //     state.contacts.items.push(action.payload);
    //   },

    // deleteContactAction: (state, action) => {
    //   state.contacts.items = state.contacts.items.filter(
    //     contact => contact.id !== action.payload
    //   );
    // },
    setFilterAction: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.items = payload;
        state.contacts.isLoading = false;
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.contacts.items = state.contacts.items.filter(
          item => item.id !== payload.id
        );
      })
      .addCase(createContactThunk.fulfilled, (state, { payload }) => {
        state.contacts.items.push(payload);
      })
      .addCase(fetchContactsThunk.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(fetchContactsThunk.rejected, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = payload;
      });
  },
});

export const contactsReduser = contactsSlice.reducer;
export const {
  createContactAction,
  deleteContactAction,
  setFilterAction,
  fetchingData,
  isPending,
  isError,
} = contactsSlice.actions;
