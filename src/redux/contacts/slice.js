import { createSlice } from "@reduxjs/toolkit";
import { logOut } from "../auth/operations";
import {
  fetchContacts,
  addContact,
  deleteContact,
  patchContact,
} from "../contacts/operations";

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
    selectedContact: "",
    isUpdating: false,
    isRemoving: false,
  },
  reducers: {
    changeContact: (state, action) => {
      state.selectedContact = action.payload;
      state.isUpdating = true;
    },
    openModal: (state, action) => {
      state.selectedContact = action.payload;
      state.isRemoving = true;
    },
    closeModal: (state) => {
      state.isRemoving = false;
    },
    cancel: (state) => {
      state.isUpdating = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.isRemoving = false;
        state.error = null;
        const index = state.items.findIndex(
          (contact) => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isRemoving = false;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.items = [];
        state.error = null;
        state.loading = false;
      })
      .addCase(patchContact.pending, handlePending)
      .addCase(patchContact.fulfilled, (state, action) => {
        state.loading = false;
        state.isUpdating = false;
        state.error = null;
        const index = state.items.findIndex(
          (contact) => contact.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
      })
      .addCase(patchContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isUpdating = false;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { changeContact, openModal, closeModal, cancel } =
  contactsSlice.actions;
