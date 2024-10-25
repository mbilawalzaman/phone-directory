import React, { useState } from "react";

function ContactForm({ addContact }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(""); // State for error messages
  const [success, setSuccess] = useState(""); // State for success message

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) {
      setError("Please fill in both fields.");
      return;
    }
    setError(""); // Clear error message if inputs are valid
    addContact({ name, phone });
    setSuccess("Contact added successfully!"); // Set success message
    setName("");
    setPhone("");

    // Clear success message after a few seconds
    setTimeout(() => {
      setSuccess("");
    }, 3000);
  };

  return (
    <div className="border rounded-lg shadow-lg p-6 bg-white max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Add New Contact</h2>
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
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium mb-1">
            Phone Number
          </label>
          <input
            type="number" // Changed to 'tel'
            id="phone"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded-md w-full hover:bg-blue-700 transition"
        >
          Add Contact
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
