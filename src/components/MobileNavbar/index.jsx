import { Menu } from "@mui/icons-material";
import { useState } from "react";
import { CloseIcon, MobileButton, Navbar } from "./styles";
import close from "../../assets/close.png";

export default function MobileNavbar({ children }) {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <MobileButton onClick={() => setNavbar(!navbar)}>
        <Menu sx={{ width: "100%", height: "100%" }} />
      </MobileButton>
      {navbar && (
        <Navbar>
          <CloseIcon src={close} alt="close" />
          {children}
        </Navbar>
      )}
    </>
  );
}
