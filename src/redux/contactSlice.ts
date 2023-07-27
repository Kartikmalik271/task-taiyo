import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Contact } from "../Models/Contact";
import { v4 as uuidv4 } from "uuid";

// Set the initial state to an empty array of Contact objects
const initialState = [] as Contact[];

// Create the contactSlice using createSlice from Redux Toolkit
const contactSlice = createSlice({
  name: "contact", // Name of the slice
  initialState, // Initial state defined above
  reducers: {
    // Reducer to add a new contact to the state
    addContact: {
      reducer: (state, action: PayloadAction<Contact>) => {
        state.push(action.payload);
      },
      // Prepare function to create the payload for addContact action
      prepare: (fname: string, lname: string,phone: string,email: string, status: boolean) => ({
        payload: {
          id: uuidv4(), // Generate a unique ID using uuidv4 for the new contact
          fname,
          lname,
          phone,
          email,
          status,
        } as Contact,
      }),
    },
    // Reducer to remove a contact from the state
    removeContact(state, action: PayloadAction<string>) {
      const index = state.findIndex((contact) => contact.id === action.payload);
      state.splice(index, 1); // Remove the contact from the state array
    },
    // Reducer to update the status and name of a contact in the state
    setContactStatus(
      state,
      action: PayloadAction<{ status: boolean; id: string; fname: string; lname: string;phone: string; email: string }>
    ) {
      const index = state.findIndex((contact) => contact.id === action.payload.id);
      state[index].status = action.payload.status; // Update the status of the contact
      state[index].fname = action.payload.fname; // Update the first name of the contact
      state[index].lname = action.payload.lname; // Update the last name of the contact
      state[index].phone = action.payload.phone; // Update the phone number of the contact
      state[index].email = action.payload.email; // Update the email of the contact
    },
  },
});

// Export the actions created by the contactSlice
export const { addContact, removeContact, setContactStatus } = contactSlice.actions;

// Export the reducer created by the contactSlice
export default contactSlice.reducer;
