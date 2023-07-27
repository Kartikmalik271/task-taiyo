import {useState} from 'react'
import './App.css'
import { BrowserRouter as Router, Route,Routes,Link } from 'react-router-dom'

import Sidebar from './components/sidebar'
import Chartsmaps from './pages/chartsmaps' 

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux/store";
import { addContact, removeContact, setContactStatus } from "./redux/contactSlice";

import  Contactpage  from './pages/contact'

function App() {

  const contactList = useSelector((state: RootState) => state);
  

    return (
        <div className=' grid grid-flow-col h-full bg-red-100'>
            <Router>
                <div className='navbar col-span-2 lg:col-span-1  bg-red-100 hidden md:block flex h-screen items-center  p-2 text-center '>
                    <div className='nav-body m-auto'>

                        
                            <Link to='/'>contacts</Link><br/>
                        
                            <Link to='/charts'>Charts & Maps</Link>
                        
                    </div>

                </div>
                <div className='content col-span-12 md:col-span-10 lg:col-span-11 bg-green-100 h-full h-screen'>
                    <Routes>
                        <Route path='/' element={<Contactpage/>}/>
                        <Route path='charts' element={<Chartsmaps/>}/>
                    </Routes>
                </div>
            </Router>
      </div>
    );
  }
  
  export default App;