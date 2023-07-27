import {useState} from 'react'

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux/store";
import { addContact, removeContact, setContactStatus } from "./redux/contactSlice";

import  Contactpage  from './pages/contact'

function App() {

  const contactList = useSelector((state: RootState) => state);
  

    return (
      <div >
        <Contactpage/>
      </div>
    );
  }
  
  export default App;