import React from 'react';

function Contact({ contact }) {
  return (
    <li>
      {contact.name}: {contact.phone}
    </li>
  );
}

export default Contact;
