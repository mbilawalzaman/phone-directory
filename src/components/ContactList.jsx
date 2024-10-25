import React from "react";

function ContactList({ contacts, deleteContact }) {
  return (
    <div className="mt-4 w-full max-w-md mx-auto">
      {contacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        <ul className="space-y-2">
          {contacts.map((contact, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-2 border rounded-md bg-gray-50"
            >
              <div>
                <p className="font-medium">{contact.name}</p>
                <p className="text-sm text-gray-500">{contact.phone}</p>
              </div>
              <button
                onClick={() => deleteContact(index)} // Call deleteContact on click
                className="text-red-600 hover:text-red-800"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ContactList;
