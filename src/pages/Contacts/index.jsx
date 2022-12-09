import { collection, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { databaseApp } from "../../../firebase/firebaseConfig";
import users from "../../../helpers/users";
import Header from "../../components/Header";
import { ContactsList, Container, StyledContact, UserLetter } from "./styles";

export default function Contacts() {
  const [contacts, setContacts] = useState([]);
  const usersRef = collection(databaseApp, "users");
  const queryUsers = query(usersRef);
  const [Users] = useCollectionData(queryUsers);

  useEffect(() => {
    if (Users) {
      const data = users.getContacts(Users);
      setContacts(data);
    }
  }, [Users]);
  return (
    <>
      <Header />
      <Container>
        <ContactsList>
          {!contacts[0] && (
            <h1 style={{ textAlign: "center" }}>
              Você ainda não tem contatos adicionados.
            </h1>
          )}
          {contacts.map((contact) => (
            <StyledContact key={contact.email}>
              <UserLetter
                bgColor={`#${Math.floor(Math.random() * 16777215).toString(
                  16
                )}`}
              >
                {contact.name[0]}
              </UserLetter>
              <strong>Nome: {contact.name}</strong>
              <span>E-mail: {contact.email}</span>
            </StyledContact>
          ))}
        </ContactsList>
      </Container>
    </>
  );
}
