import { Contact } from "utils/types";

const ContactElement: React.FC<{ contact: Contact }> = ({ contact }) => {
  return (
    <li>
      <span>{contact.name}</span>

      {contact.address && <address>{contact.address}</address>}

      <a href={`mailto:${contact.email}`}>{contact.email}</a>

      {contact.phone && <a href={`tel:${contact.phone}`}>{contact.phone}</a>}
    </li>
  );
};

export default ContactElement;
