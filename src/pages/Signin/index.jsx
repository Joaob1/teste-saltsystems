import {
  Container,
  EnterButton,
  LinkToSignUp,
  LoginCard,
  LogoImage,
  Spacer,
} from "./styles";
import saltLogo from "../../assets/logo_salt.png";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app, databaseApp } from "../../../firebase/firebaseConfig";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { InfinitySpin } from "react-loader-spinner";
import { useState } from "react";
import toastError from "../../../helpers/ToastError";
import toastSuccess from "../../../helpers/ToastSuccess";
import { Link, useNavigate } from "react-router-dom";
import { setToken } from "../../../helpers/token";
import checkErrors from "../../../helpers/checkInputErrors";
import Inputs from "./Inputs";
import users from "../../../helpers/users";
import { collection, limit, orderBy, query } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
const usersRef = collection(databaseApp, "users");

export default function SignIn() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const auth = getAuth(app);
  const [colorLoading, setColorLoading] = useState({
    color1: "#1976d2",
    color2: "#1976d2",
  });
  const [loading, setLoading] = useState(false);
  const [signInWithGoogle, error] = useSignInWithGoogle(auth);
  const queryUsers = query(usersRef, orderBy("email"), limit(Infinity));
  const [Users] = useCollectionData(queryUsers, { idField: "id" });
  const ChangeColor = (color, number) => {
    number === 1
      ? setColorLoading({ ...colorLoading, color1: color })
      : setColorLoading({ ...colorLoading, color2: color });
  };
  const googleLogin = async () => {
    setLoading(true);
    const response = await signInWithGoogle();
    users.addWithGoogle(response.user, Users);
    setLoading(false);
    if (error) {
      setLoading(false);
      return toastError("Falha ao realizar o login");
    }
    setToken(response.user.uid);
    toastSuccess(`Bem-vindo, ${response.user.displayName}!`);
    return navigate("/chat");
  };
  const emailLogin = async (e) => {
    e.preventDefault();
    if (checkErrors(form, errors, setErrors)) {
      return;
    }
    try {
      setLoading(true);
      const response = await signInWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      setLoading(false);
      setToken(response.user.uid);
      navigate("/chat");
    } catch (error) {
      setLoading(false);
      if (error.code === "auth/wrong-password") {
        return toastError("E-mail ou senha incorretos");
      }

      return toastError(
        "Não foi possível fazer o login. Aguarde um pouco e tente novamente"
      );
    }
  };
  const handleChangeInput = async (e) => {
    setErrors({ ...errors, [e.target.name]: "" });
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <Container>
      <LogoImage src={saltLogo} />
      <LoginCard onSubmit={emailLogin}>
        <h1>Salt Chat</h1>
        <Inputs
          form={form}
          handleChangeInput={handleChangeInput}
          errors={errors}
        />
        <EnterButton
          type="submit"
          onMouseEnter={() => ChangeColor("#FFFFFF", 1)}
          onMouseLeave={() => ChangeColor("#1976d2", 1)}
        >
          {loading ? (
            <InfinitySpin width="90" color={colorLoading.color1} />
          ) : (
            "Entrar"
          )}
        </EnterButton>
        <Spacer>
          <div />
          Ou <div />
        </Spacer>
        <EnterButton
          type="button"
          noMargin
          onMouseEnter={() => ChangeColor("#FFFFFF", 2)}
          onMouseLeave={() => ChangeColor("#1976d2", 2)}
          onClick={() => googleLogin()}
        >
          {loading ? (
            <InfinitySpin width="90" color={colorLoading.color2} />
          ) : (
            "Login com Google"
          )}
        </EnterButton>
        <LinkToSignUp>
          Não tem uma conta? <Link to="/signup">Cadastre-se</Link>
        </LinkToSignUp>
      </LoginCard>
    </Container>
  );
}
