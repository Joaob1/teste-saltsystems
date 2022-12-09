import { getAuth } from "firebase/auth";
import { app } from "../../../firebase/firebaseConfig";
import { HeaderApp, LogoSalt } from "./styles";
import { useNavigate, useLocation } from "react-router-dom";
import { clearToken } from "../../../helpers/token";
import saltLogo from "../../assets/logo_salt.png";
import AddContact from "../AddContact";
import { useEffect, useState } from "react";
import MobileNavbar from "../MobileNavbar";
const auth = getAuth(app);
export default function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const auth = getAuth(app);
  const [isMobile, setMobile] = useState(false);
  const [userAuth, setUserAuth] = useState(false);

  const getUser = async () => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        logout();
      }
      return setUserAuth(user);
    });
  };
  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (window.matchMedia("(max-width: 650px)").matches) {
      setMobile(true);
    }
  }, []);
  const logout = () => {
    auth.signOut();
    clearToken();
    navigate("/");
  };
  return (
    <HeaderApp>
      <LogoSalt src={saltLogo} alt="" />
      {!isMobile ? (
        <>
          <AddContact />
          <h1>Salt Chat</h1>
          {pathname === "/chat" ? (
            <button onClick={() => navigate("/contacts")}>Contatos</button>
          ) : (
            <button onClick={() => navigate("/chat")}>Chat</button>
          )}
          <button onClick={() => logout()}>Sair</button>
        </>
      ) : (
        <>
          <h1>Salt Chat</h1>
          <MobileNavbar>
            <AddContact />
            {pathname === "/chat" ? (
              <button onClick={() => navigate("/contacts")}>Contatos</button>
            ) : (
              <button onClick={() => navigate("/chat")}>Chat</button>
            )}
            <button onClick={() => logout()}>Sair</button>
          </MobileNavbar>
        </>
      )}
    </HeaderApp>
  );
}
