import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Contact } from "../models/Contact";
import { v4 as uuidv4 } from "uuid";

const initialState = [] as Contact[];

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: {
      reducer: (state, action: PayloadAction<Contact>) => {
        state.push(action.payload);
      },
      prepare: (fname: string,lname:string,status:boolean) => ({
        payload: {
          id: uuidv4(),
          fname,
          lname,
          status,
        } as Contact,
      }),
    },
    removeContact(state, action: PayloadAction<string>) {
      const index = state.findIndex((contact) => contact.id === action.payload);
      state.splice(index, 1);
    },
    setContactStatus(
      state,
      action: PayloadAction<{ status: boolean, id: string, fname:string, lname:string }>
    ) {
      const index = state.findIndex((contact) => contact.id === action.payload.id);
      state[index].status = action.payload.status;
      state[index].fname=action.payload.fname;
      state[index].lname=action.payload.lname;
    },
  },
});

export const { addContact, removeContact, setContactStatus } = contactSlice.actions;
export default contactSlice.reducer;