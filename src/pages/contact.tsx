import React from 'react';
import Addcontact from '../components/contactpage/addcontact';
import Displaycontact from '../components/contactpage/displaycontact';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Contactpage: React.FC = () => {
  // Get the contactList from the Redux store using the useSelector hook
  const contactList = useSelector((state: RootState) => state);

  return (
    <div className="h-screen overflow-y-auto">
      <h1 className="text-3xl font-bold underline text-green-600 text-center mb-5 pt-20 lg:pt-5">
        Page to Manage All Contacts!!!
      </h1>
      {/* Render the component to add a new contact */}
      <Addcontact />

      <div className="container mx-auto">
        {/* Check if there are contacts in the contactList */}
        {contactList.length > 0 ? (
          <>
            {/* If there are contacts, display them in a grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
              {contactList.map((item) => {
                return <Displaycontact key={item.id} item={item} />;
              })}
            </div>
          </>
        ) : (
          <>
            {/* If there are no contacts, show a message */}
            <div className="grid grid-cols-1 mt-5 mx-auto">
              <div className="bg-slate-100 lg:w-1/2 p-5 mx-2 text-center mx-auto">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg p-5">
                  <p className="text-slate-500 text-lg font-semibold mb-4">
                    No Contact Found
                  </p>
                  <p className="text-slate-600 mb-3">
                    Please add a contact from the "Create contact" button.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Contactpage;
