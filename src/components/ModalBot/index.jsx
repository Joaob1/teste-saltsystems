import botAvatar from "../../assets/bot.png";
import { Avatar, CloseButton, Modal, ModalBackground } from "./styles";
import closeIcon from "../../assets/close.png";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { app } from "../../../firebase/firebaseConfig";
export default function ModalBot({ open, setOpen }) {
  const auth = getAuth(app);
  const [user, setUser] = useState();
  const getUser = () => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  };
  useEffect(getUser, []);

  return (
    <ModalBackground>
      <Modal>
        <>
          <CloseButton
            src={closeIcon}
            alt="Fechar"
            onClick={() => setOpen(false)}
          />
          <Avatar src={botAvatar} alt="Bot Avatar" />
          {user && (
            <p>
              Olá, {user.displayName}! Eu sou o Salt Systems Bot. <br /> Estarei
              sempre presente nesse chat para ajudá-lo. <br /> Digite
              "#commands" para ver a lista de comandos disponíveis.
            </p>
          )}
        </>
      </Modal>
    </ModalBackground>
  );
}
