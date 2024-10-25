import React, { useState, useEffect } from "react";

function ContactForm({ addContact, existingContact }) {
  const [name, setName] = useState(existingContact ? existingContact.name : "");
  const [phone, setPhone] = useState(
    existingContact ? existingContact.phone : ""
  );
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const formatPhoneNumber = (value) => {
    const cleaned = value.replace(/\D/g, "");
    if (cleaned.length > 4) {
      return cleaned.slice(0, 4) + "-" + cleaned.slice(4, 11);
    }
    return cleaned;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) {
      setError("Please fill in both fields.");
      return;
    } else if (phone.replace(/-/g, "").length < 11) {
      setError("Please ensure the phone number is valid.");
      return;
    }
    setError("");
    addContact({ name, phone });
    setSuccess("Contact added successfully!");
    setName("");
    setPhone("");

    setTimeout(() => {
      setSuccess("");
    }, 3000);
  };

  const handlePhoneChange = (e) => {
    const formattedPhone = formatPhoneNumber(e.target.value);
    setPhone(formattedPhone);
  };

  useEffect(() => {
    if (existingContact) {
      setName(existingContact.name);
      setPhone(existingContact.phone);
    }
  }, [existingContact]);

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
            type="tel"
            id="phone"
            placeholder="Enter phone number"
            value={phone}
            onChange={handlePhoneChange}
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
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
