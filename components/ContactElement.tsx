import { css, useTheme } from "@emotion/react";
import { Contact } from "utils/types";
import AppLink from "./AppLink";

const ContactElement: React.FC<{ contact: Contact }> = ({ contact }) => {
  const EmailMapper = () =>
    Array.isArray(contact.email) ? (
      contact.email.map((email) => (
        <AppLink href={`mailto:${email}`}>{email}</AppLink>
      ))
    ) : (
      <AppLink href={`mailto:${contact.email}`}>{contact.email}</AppLink>
    );

  return (
    <li
      css={css`
        display: flex;
        flex-direction: column;
        margin-bottom: 0.25rem;
      `}
    >
      <span
        css={css`
          font-weight: bold;
        `}
      >
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

      <div
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        {EmailMapper()}
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
