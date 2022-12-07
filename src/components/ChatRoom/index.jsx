import {
  addDoc,
  collection,
  limit,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { app, databaseApp } from "../../../firebase/firebaseConfig";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useEffect, useRef, useState } from "react";
import {
  EmojiContainer,
  FormSendMessage,
  Main,
  PickerContainer,
} from "./styles";
import ChatMessage from "../ChatMessage";
import { getAuth } from "firebase/auth";
import chatBot from "../../../helpers/ChatBot";
import botImage from "../../assets/bot.png";
import EmojiPicker from "emoji-picker-react";
import emojiIcon from "../../assets/emoji.png";

const auth = getAuth(app);
export default function ChatRoom() {
  const [openEmoji, setOpenEmoji] = useState(false);
  const messagesRef = collection(databaseApp, "messages");
  const queryMessages = query(
    messagesRef,
    orderBy("createdAt"),
    limit(Infinity)
  );
  const [messages] = useCollectionData(queryMessages, { idField: "id" });
  const [inputValue, setInputValue] = useState("");
  const dummy = useRef();
  useEffect(() => {
    dummy.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  const sendMessage = async (e) => {
    e.preventDefault();
    const { photoURL, uid, displayName } = auth.currentUser;
    await addDoc(messagesRef, {
      text: inputValue,
      uid,
      photoURL,
      createdAt: serverTimestamp(),
      name: displayName,
    });
    if (inputValue[0] === "#") {
      await addDoc(messagesRef, {
        text: chatBot(inputValue),
        uid: 1,
        photoURL: botImage,
        createdAt: serverTimestamp(),
        name: "Salt Systems Bot",
      });
    }
    setInputValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };
  const setEmoji = (emoji) => {
    setInputValue(`${inputValue}${emoji.emoji}`);
  };
  return (
    <>
      <Main>
        {messages &&
          messages.map((msg, index) => (
            <ChatMessage key={index} message={msg} />
          ))}
        {openEmoji && (
          <PickerContainer>
            <EmojiPicker
              onEmojiClick={(emoji) => setEmoji(emoji)}
              height={"320px"}
            />
          </PickerContainer>
        )}
        <div ref={dummy}></div>
        <FormSendMessage onSubmit={(e) => sendMessage(e)}>
          <EmojiContainer
            onClick={() => setOpenEmoji(!openEmoji)}
            src={emojiIcon}
          />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit" disabled={!inputValue}>
            Enviar
          </button>
        </FormSendMessage>
      </Main>
    </>
  );
}
