import { Container, EnterButton, LoginCard, LogoImage } from "./styles";
import saltLogo from "../../assets/logo_salt.png";
import { getAuth } from "firebase/auth";
import { app } from "../../../firebase/firebaseConfig";
import { useSignInWithGoogle, useAuthState } from "react-firebase-hooks/auth";
import { InfinitySpin } from "react-loader-spinner";
import { useState } from "react";
import toastError from "../../../helpers/ToastError";
import toastSuccess from "../../../helpers/ToastSuccess";
import { useNavigate } from "react-router-dom";
import { setToken } from "../../../helpers/token";

export default function SignIn() {
  const navigate = useNavigate();
  const auth = getAuth(app);
  const [colorLoading, setColorLoading] = useState("#1976d2");
  const [loading, setLoading] = useState(false);
  const [signInWithGoogle, error] = useSignInWithGoogle(auth);
  const [user] = useAuthState(auth);
  const ChangeColor = (color) => {
    setColorLoading(color);
  };
  const login = async () => {
    setLoading(true);
    const response = await signInWithGoogle();
    console.log(response);
    setLoading(false);
    if (error) {
      console.log(error);
      setLoading(false);
      return toastError("Falha ao realizar o login");
    }
    setToken(response.user.accessToken);
    toastSuccess(`Bem-vindo, ${response.user.displayName}!`);
    return navigate("/chat");
  };
  return (
    <Container>
      <LogoImage src={saltLogo} />
      <LoginCard>
        <h1>Salt Chat</h1>
        <EnterButton
          onMouseEnter={() => ChangeColor("#FFFFFF")}
          onMouseLeave={() => ChangeColor("#1976d2")}
          onClick={() => login()}
        >
          {loading ? (
            <InfinitySpin width="90" color={colorLoading} />
          ) : (
            "Login com Google"
          )}
        </EnterButton>
      </LoginCard>
    </Container>
  );
}
