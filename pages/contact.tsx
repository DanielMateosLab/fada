import { css, useTheme } from "@emotion/react";
import ContactElement from "components/ContactElement";
import Container from "components/Container";
import type { NextPage } from "next";
import { contactInfo } from "utils/data";
import { Contact } from "utils/types";

const Contact: NextPage = () => {
  const theme = useTheme();

  return (
    <Container marginBottom>
      <title>Accés et Contact - FADA | Outrevert. Châteauvert, Var.</title>

      <h1>Contact</h1>
      <div
        css={css`
          display: flex;
          flex-direction: column-reverse;
          gap: 2rem;
          ${theme.mq.md} {
            display: grid;
            grid-template-columns: 2fr 3fr;
            column-gap: 2rem;
          }
        `}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2893.9235196320587!2d6.022914!3d43.503931!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6740f7642cd01300!2sCentre%20d&#39;art%20contemporain%20de%20Ch%C3%A2teauvert!5e0!3m2!1sfr!2sfr!4v1653406050811!5m2!1sfr!2sfr"
          css={css`
            width: 100%;
            height: 100%;
            min-height: 250px;
            border: 0;
            background: ${theme.color.gray};
          `}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div
          css={css`
            > :first-of-type {
              margin-bottom: 2rem;
            }
          `}
        >
          <ContactInfoSection contacts={contactInfo.Outrevert} />
          <ContactInfoSection contacts={contactInfo.Fada} />
        </div>
      </div>
    </Container>
  );
};

export default Contact;

const ContactInfoSection: React.FC<{ contacts: Contact[] }> = (props) => {
  const theme = useTheme();
  return (
    <ul
      css={[
        theme.flatList,
        css`
          padding: 0;
        `,
      ]}
    >
      {props.contacts.map((contact) => (
        <ContactElement contact={contact} key={contact.name} />
      ))}
    </ul>
  );
};
