import React from "react";

const ContactList = ({ contacts, deleteContact, openUpdateModal }) => {
  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-2">Contact List</h2>
      <ul className="list-disc list-inside">
        {contacts.map((contact, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            <span>{`${contact.name}: ${contact.phone}`}</span>
            <div>
              <button
                onClick={() => openUpdateModal(index)}
                className="text-blue-600 hover:underline mr-2"
              >
                Update
              </button>
              <button
                onClick={() => deleteContact(index)}
                className="text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
