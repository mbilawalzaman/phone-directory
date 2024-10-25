import React, { useState, useEffect } from "react";

function ContactForm({ addContact, existingContact }) {
  const [name, setName] = useState(existingContact ? existingContact.name : "");
  const [phone, setPhone] = useState(
    existingContact ? existingContact.phone : ""
  );
  const [error, setError] = useState(""); // State for error messages
  const [success, setSuccess] = useState(""); // State for success message

  useEffect(() => {
    if (existingContact) {
      setName(existingContact.name);
      setPhone(existingContact.phone);
    }
  }, [existingContact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) {
      setError("Please fill in both fields.");
      return;
    }
    setError(""); // Clear error message if inputs are valid

    addContact({ name, phone });
    setSuccess(
      existingContact
        ? "Contact updated successfully!"
        : "Contact added successfully!"
    );
    setName("");
    setPhone("");

    // Clear success message after a few seconds
    setTimeout(() => {
      setSuccess("");
    }, 3000);
  };

  return (
    <div className="border rounded-lg shadow-lg p-6 bg-white max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">
        {existingContact ? "Update Contact" : "Add New Contact"}
      </h2>
      <form onSubmit={handleSubmit}>
        {error && <div className="text-red-600 mb-4">{error}</div>}
        {success && <div className="text-green-600 mb-4">{success}</div>}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => {
              const value = e.target.value;
              // Allow only digits and limit to 10 characters
              if (/^\d{0,10}$/.test(value)) {
                setPhone(value);
              }
            }}
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
            maxLength="10" // Limits the input to 10 characters
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded-md w-full hover:bg-blue-700 transition"
        >
          {existingContact ? "Update Contact" : "Add Contact"}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
