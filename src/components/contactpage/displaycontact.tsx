import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { removeContact, setContactStatus } from "../../redux/contactSlice";

// Define the data type for each contact item
type DataType = {
  id: string;
  fname: string;
  lname: string;
  status: boolean;
};

// Props interface for the Displaycontact component
interface DataProps {
  item: DataType;
}

// Displaycontact component to render each contact item
const Displaycontact: React.FC<DataProps> = ({ item }) => {
  // State variables for handling form input and modal visibility
  const [id, setId] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [status, setStatus] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  // React Redux Hooks
  const dispatch = useDispatch<AppDispatch>();

  // Event handler for changing the status (active/inactive)
  const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value === 'true';
    setStatus(val);
  };

  return (
    <>
      {/* Check if edit mode is active */}
      {showEdit ?
        // If in edit mode, show the edit modal
        <>
          <div className="flex justify-center items-center backdrop-blur bg-gray-500 bg-opacity-50 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full my-6 mx-auto max-w-3xl ">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="text-center flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">EDIT CONTACT</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowEdit(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-6 w-6">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="w-full grid relative p-6 ">
                  {/* Form inputs for editing contact */}
                  {/* First Name */}
                  <div className="relative mb-3">
                    <input
                      type="text"
                      className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                      id="floatingInput"
                      name='fname'
                      value={fname}
                      onChange={(e) => setFname(e.target.value)}
                    />
                    <label
                      htmlFor="floatingInput"
                      className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                    >First Name</label
                    >
                  </div>
                  {/* Last Name */}
                  <div className="relative mb-3">
                    <input
                      type="text"
                      className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                      id="floatingInput"
                      name='lname'
                      value={lname}
                      onChange={(e) => setLname(e.target.value)}
                    />
                    <label
                      htmlFor="floatingInput"
                      className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                    >Last Name</label
                    >
                  </div>
                  {/* Status (active/inactive) */}
                  <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      type="radio"
                      name="status"
                      value='true'
                      id="active"
                      checked={status}
                      onChange={handleStatusChange} />
                    <label
                      className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                      htmlFor="active">
                      Active
                    </label>
                  </div>
                  <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      type="radio"
                      name="status"
                      value='false'
                      id="inactive"
                      checked={!status}
                      onChange={handleStatusChange} />
                    <label
                      className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                      htmlFor="radioDefault02">
                      Inactive
                    </label>
                  </div>
                  {/* Buttons for updating contact */}
                  <button
                    className="inline-block bg-green-800 rounded p-3  text-sm font-semibold text-white mr-2 mb-2 mt-3 "
                    onClick={() => {
                      // Dispatch the action to update the contact in Redux store
                      dispatch(setContactStatus({ status, id, fname, lname }));
                      // Clear the input fields and reset status to false
                      setFname("");
                      setLname("");
                      setStatus(false);
                      // Close the edit modal
                      setShowEdit(false);
                    }}
                  >
                    Make Changes
                  </button>
                  <button
                    className="inline-block bg-red-800 rounded p-3  text-sm font-semibold text-white mr-2 mb-2 mt-3 "
                    onClick={() => {
                      // Cancel edit mode and close the modal
                      setShowEdit(false);
                    }}>Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </>
        :
        // If not in edit mode, show the contact details
        <>
          <div className="rounded-lg overflow-hidden shadow-md p-4 mt-4 bg-white mx-2 text-center">
            <div className="font-bold underline text-2xl mb-2 text-gray-800">
              {item.fname} {item.lname}
            </div>
            <p className={`text-lg ${item.status ? 'text-green-500' : 'text-red-500'}`}>
              {item.status ? 'Active' : 'Inactive'}
            </p>

            <div className="flex justify-center mt-4">
              {/* Button to delete the contact */}
              <button
                className="bg-red-500 hover:bg-red-700 text-white px-3  rounded-md mr-2 focus:outline-none focus:ring focus:ring-red-300 transition-colors duration-300"
                onClick={() => {
                  // Dispatch the action to remove the contact from Redux store
                  dispatch(removeContact(item.id));
                }}
              >
                Delete
              </button>

              {/* Button to enter edit mode */}
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-1 rounded-md ml-2 focus:outline-none focus:ring focus:ring-blue-300 transition-colors duration-300"
                onClick={() => {
                  // Set the form values with the contact data for editing
                  setFname(item.fname);
                  setLname(item.lname);
                  setId(item.id);
                  setStatus(item.status);
                  // Enter edit mode
                  setShowEdit(true);
                }}
              >
                Edit
              </button>
            </div>
          </div>
        </>
      }
    </>
  );
};

export default Displaycontact;
