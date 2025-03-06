import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global/";

// GET @ /contacts
export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// POST @ /contacts
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", newContact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// DELETE @ /contacts/:id
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
//PATCH/contacts/{contactId}
export const patchContact = createAsyncThunk(
  "contacts/patchContact",
  async ({ contactId, data }, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${contactId}`, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
