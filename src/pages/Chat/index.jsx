import { useState } from "react";
import ChatRoom from "../../components/ChatRoom";
import Header from "../../components/Header";
import ModalBot from "../../components/ModalBot";
import { Container } from "./styles";

export default function ChatPage() {
  const [openModal, setOpenModal] = useState(true);
  return (
    <Container>
      {openModal && <ModalBot open={openModal} setOpen={setOpenModal} />}
      <Header />
      <ChatRoom />
    </Container>
  );
}
