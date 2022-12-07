import { getAuth } from "firebase/auth";
import { app } from "../../../firebase/firebaseConfig";
import { MessageReceived, MessageSent } from "./styles";
const auth = getAuth(app);
export default function ChatMessage(props) {
  const { text, uid, photoURL, name } = props.message;
  if (uid === auth.currentUser.uid) {
    return (
      <MessageSent>
        <img src={photoURL} alt="Profile Image" />
        <p>{text}</p>
      </MessageSent>
    );
  }
  return (
    <MessageReceived>
      <span>{name}</span>
      <div>
        <img src={photoURL} alt="Profile Image" />
        <p>{text}</p>
      </div>
    </MessageReceived>
  );
}
