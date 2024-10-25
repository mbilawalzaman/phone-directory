import { create } from "zustand";
const initialContacts = [
  { name: "Alice Johnson", phone: "0323-4567890" },
  { name: "Bob Smith", phone: "0300-5678901" },
  { name: "Charlie Brown", phone: "0345-6789012" },
];

const useContactStore = create((set) => ({
  contacts: initialContacts,
  addContact: (contact) =>
    set((state) => ({
      contacts: [...state.contacts, contact],
    })),
  deleteContact: (index) =>
    set((state) => ({
      contacts: state.contacts.filter((_, i) => i !== index),
    })),
  clearContacts: () => set({ contacts: initialContacts }),
  updateContact: (index, updatedContact) =>
    set((state) => ({
      contacts: state.contacts.map((contact, i) =>
        i === index ? updatedContact : contact
      ),
    })),
}));

export default useContactStore;
