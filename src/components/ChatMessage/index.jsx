import { getAuth } from "firebase/auth";
import { app } from "../../../firebase/firebaseConfig";
import userIcon from "../../assets/user.png";
import { DefaultIcon, MessageReceived, MessageSent } from "./styles";
const auth = getAuth(app);
export default function ChatMessage(props) {
  const { text, uid, photoURL, name } = props.message;
  if (uid === auth.currentUser.uid) {
    return (
      <MessageSent>
        {photoURL ? (
          <img src={photoURL} alt="Profile Image" />
        ) : (
          <DefaultIcon src={userIcon} alt="User avatar" />
        )}
        <p>{text}</p>
      </MessageSent>
    );
  }
  return (
    <MessageReceived>
      <span>{name}</span>
      <div>
        {photoURL ? (
          <img src={photoURL} alt="Profile Image" />
        ) : (
          <DefaultIcon src={userIcon} alt="User avatar" />
        )}
        <p>{text}</p>
      </div>
    </MessageReceived>
  );
}
