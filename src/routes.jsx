import { Route, Routes, Outlet, Navigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { app } from "../firebase/firebaseConfig";
import SignIn from "./pages/Signin";
import ChatPage from "./pages/Chat";
import { getToken } from "../helpers/token";
export default function MainRoutes() {
  const ProtectedRoutes = ({ redirectTo, signin }) => {
    const isAuthenticated = getToken();
    if (!signin) {
      return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />;
    }
    return !isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />;
  };
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/signin"} />} />
      <Route element={<ProtectedRoutes redirectTo={"/chat"} signin />}>
        <Route path="/signin" element={<SignIn />} />
      </Route>
      <Route element={<ProtectedRoutes redirectTo={"/signin"} />}>
        <Route path={"/chat"} element={<ChatPage />} />
      </Route>
    </Routes>
  );
}
