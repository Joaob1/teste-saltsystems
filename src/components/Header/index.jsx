import { getAuth } from "firebase/auth";
import { app } from "../../../firebase/firebaseConfig";
import { HeaderApp, LogoSalt } from "./styles";
import { useNavigate } from "react-router-dom";
import { clearToken } from "../../../helpers/token";
import saltLogo from "../../assets/logo_salt.png";

export default function Header() {
  const navigate = useNavigate();
  const auth = getAuth(app);
  const logout = () => {
    auth.signOut();
    clearToken();
    navigate("/");
  };
  return (
    <HeaderApp>
      <LogoSalt src={saltLogo} alt="" />
      <h1>Salt Chat</h1>
      <button onClick={() => logout()}>Sair</button>
    </HeaderApp>
  );
}
