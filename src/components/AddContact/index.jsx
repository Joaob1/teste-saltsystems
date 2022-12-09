import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { app, databaseApp } from "../../../firebase/firebaseConfig";
import {
  Avatar,
  ButtonAdd,
  CloseButton,
  Modal,
  ModalBackground,
  DivButtons,
  EnterButton,
  ClearButton,
} from "./styles";
import toastSuccess from "../../../helpers/ToastSuccess";
import botAvatar from "../../assets/bot.png";
import close from "../../assets/close.png";
import { TextField } from "@mui/material";
import users from "../../../helpers/users";
import { collection, query } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

const auth = getAuth(app);
export default function AddContact() {
  const usersRef = collection(databaseApp, "users");
  const queryUsers = query(usersRef);
  const [Users] = useCollectionData(queryUsers);
  const [open, setOpen] = useState(false);
  const [inputEmail, setInputEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newContact = await users.addContact(inputEmail, Users);
    if (newContact) {
      return setOpen(false);
    }
  };
  const openModal = () => {
    setOpen(true);
    setInputEmail("");
  };
  return (
    <>
      <ButtonAdd onClick={openModal}>Adicionar Contato</ButtonAdd>
      {open && (
        <ModalBackground>
          <Modal onSubmit={handleSubmit}>
            <CloseButton
              src={close}
              alt="close"
              onClick={() => setOpen(false)}
            />
            <Avatar src={botAvatar} />
            <p>Insira o e-mail do contato que deseja adicionar!</p>
            <TextField
              fullWidth
              sx={{
                marginTop: "2rem",
                "@media(min-width: 1200px)": { width: "50%" },
              }}
              InputProps={{ style: { fontSize: "1.5rem", fontWeight: 500 } }}
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
            />
            <DivButtons>
              <EnterButton type="submit">Confirmar</EnterButton>
              <ClearButton type="button" onClick={() => setInputEmail("")}>
                Limpar
              </ClearButton>
            </DivButtons>
          </Modal>
        </ModalBackground>
      )}
    </>
  );
}
