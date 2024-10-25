import React, { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import useContactStore from "./Zs_Store/useContactStore";
import "./App.css";

function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const { contacts, addContact, deleteContact } = useContactStore();

  return (
    <div className="bg-gray-100 p-4">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-6">Phone Directory</h1>
        {!isFormVisible && (
          <button
            onClick={() => setIsFormVisible(true)}
            className="bg-blue-500 text-white p-2 rounded mb-4"
          >
            Add Contact
          </button>
        )}
        {isFormVisible && <ContactForm addContact={addContact} />}
        <ContactList contacts={contacts} deleteContact={deleteContact} />
      </div>
    </div>
  );
}

export default App;
