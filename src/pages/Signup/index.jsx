import {
  Container,
  LinkToSignIn,
  LogoImage,
  RegisterButton,
  RegisterCard,
} from "./styles";
import saltLogo from "../../assets/logo_salt.png";
import { useState } from "react";
import toastError from "../../../helpers/ToastError";
import Inputs from "./Inputs";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { app } from "../../../firebase/firebaseConfig";
import toastSuccess from "../../../helpers/ToastSuccess";
import { Link, useNavigate } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import checkErrors from "../../../helpers/checkInputErrors";
import { setToken } from "../../../helpers/token";
import users from "../../../helpers/users";

export default function Signup() {
  const navigate = useNavigate();
  const auth = getAuth(app);
  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [colorLoading, setColorLoading] = useState("#1976d2");
  const ChangeColor = (color) => {
    setColorLoading(color);
  };

  const handleChangeInput = (e) => {
    setErrors({ ...errors, [e.target.name]: "" });
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (checkErrors(form, errors, setErrors)) {
      return;
    }
    if (form.password !== form.confirmPassword) {
      return toastError("Senhas não coincidem");
    }
    try {
      setLoading(true);
      const newUser = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      await signInWithEmailAndPassword(auth, form.email, form.password);
      await updateProfile(auth.currentUser, { displayName: form.name });
      setToken(auth.currentUser.uid);
      await users.add();
      setLoading(false);
      toastSuccess("Usuário cadastrao com sucesso!");
      navigate("/chat");
    } catch (error) {
      setLoading(false);
      if (error.code === "auth/email-already-in-use") {
        return toastError("E-mail já cadastrado.");
      }
    }
  };

  return (
    <Container>
      <LogoImage src={saltLogo} />
      <RegisterCard onSubmit={handleSubmit}>
        <h1>Cadastro</h1>
        <Inputs
          form={form}
          handleChangeInput={handleChangeInput}
          errors={errors}
        />
        <RegisterButton
          onMouseEnter={() => ChangeColor("#FFFFFF")}
          onMouseLeave={() => ChangeColor("#1976d2")}
        >
          {loading ? (
            <InfinitySpin width="90" color={colorLoading} />
          ) : (
            "Cadastrar"
          )}
        </RegisterButton>
        <LinkToSignIn>
          Já é cadastrado? <Link to="/signin">Faça o login</Link>
        </LinkToSignIn>
      </RegisterCard>
    </Container>
  );
}
