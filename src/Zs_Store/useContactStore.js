import { create } from "zustand";

const useContactStore = create((set) => ({
  contacts: [
    { name: "Alice Johnson", phone: "123-456-7890" },
    { name: "Bob Smith", phone: "234-567-8901" },
    { name: "Charlie Brown", phone: "345-678-9012" },
  ],
  addContact: (contact) =>
    set((state) => ({
      contacts: [...state.contacts, contact],
    })),
  deleteContact: (index) =>
    set((state) => ({
      contacts: state.contacts.filter((_, i) => i !== index),
    })),
  clearContacts: () =>
    set({
      contacts: [
        { name: "Alice Johnson", phone: "123-456-7890" },
        { name: "Bob Smith", phone: "234-567-8901" },
        { name: "Charlie Brown", phone: "345-678-9012" },
      ],
    }),
}));

export default useContactStore;
