import React from "react";
import Addcontact from "../components/contactpage/addcontact";
import Displaycontact from '../components/contactpage/displaycontact'

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { addContact, removeContact, setContactStatus } from "../redux/contactSlice";

const Contactpage =()=>{

    const contactList = useSelector((state: RootState) => state);


    return(
        <div>
            <h1 className="text-3xl font-bold underline text-red-600 mb-5 ">
                Add Contact
            </h1>
            <Addcontact/>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3  mt-5">
                    {
                        contactList.length>0 ?
                        <>
                            {contactList.map((item)=>{
                                return <Displaycontact key={item.id} item={item}/>
                            })}
                        </> 
                        :
                        <></>
                    }
                </div>
            </div>
        </div>
    )
}
export default Contactpage