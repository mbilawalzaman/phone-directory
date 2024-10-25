import React, { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import useContactStore from "./Zs_Store/useContactStore";
import "./App.css";

function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const { contacts, addContact, deleteContact, clearContacts } =
    useContactStore();

  const handleClearContacts = () => {
    clearContacts(); // Call the clearContacts function from your Zustand store
  };

  return (
    <div className="bg-gray-100 p-4">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-6">Phone Directory</h1>
      </div>
      <div className="space-x-10">
        <button
          onClick={() => setIsFormVisible(true)}
          className="bg-blue-500 text-white p-2 rounded mb-4"
        >
          Add Contact
        </button>
        <button
          onClick={() => handleClearContacts(true)}
          className="bg-red-500 text-white p-2 rounded mb-4"
        >
          Reset
        </button>
      </div>

      <ContactList contacts={contacts} deleteContact={deleteContact} />

      {/* Modal */}
      {isFormVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md relative">
            <button
              onClick={() => setIsFormVisible(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl"
              aria-label="Close"
            >
              &times;
            </button>

            <ContactForm addContact={addContact} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
