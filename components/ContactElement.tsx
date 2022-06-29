import { css, useTheme } from "@emotion/react";
import { Contact } from "utils/types";
import AppLink from "./AppLink";

const ContactElement: React.FC<{ contact: Contact }> = ({ contact }) => {
  return (
    <li
      css={css`
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
      `}
    >
      <span
        css={css`
          font-weight: bold;
        `}
      >
        {contact.title && `${contact.title}: `}
        {contact.name}
      </span>

      {contact.address && (
        <address
          css={css`
            font-style: normal;
          `}
        >
          {contact.address}
        </address>
      )}

      <div>
        <AppLink href={`mailto:${contact.email}`}>{contact.email}</AppLink>
      </div>

      {contact.phone && (
        <div>
          <AppLink href={`tel:${contact.phone}`}>{contact.phone}</AppLink>
        </div>
      )}
    </li>
  );
};

export default ContactElement;
