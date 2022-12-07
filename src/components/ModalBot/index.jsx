import botAvatar from "../../assets/bot.png";
import { Avatar, CloseButton, Modal, ModalBackground } from "./styles";
import closeIcon from "../../assets/close.png";
export default function ModalBot({ open, setOpen }) {
  return (
    <ModalBackground>
      <Modal>
        <CloseButton
          src={closeIcon}
          alt="Fechar"
          onClick={() => setOpen(false)}
        />
        <Avatar src={botAvatar} alt="Bot Avatar" />
        <p>
          Olá! Eu sou o Salt Systems Bot. <br /> Estarei sempre presente nesse
          chat para ajudá-lo. <br /> Digite "#commands" para ver a lista de
          comandos disponíveis.
        </p>
      </Modal>
    </ModalBackground>
  );
}
