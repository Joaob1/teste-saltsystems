import { Visibility, VisibilityOff } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import { useState } from "react";

export default function Inputs({ form, handleChangeInput, errors }) {
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  return (
    <>
      <TextField
        sx={{ marginBottom: "0.8rem" }}
        label="E-mail"
        type="email"
        variant="standard"
        name="email"
        error={errors.email}
        helperText={errors.email}
        FormHelperTextProps={{
          style: {
            fontSize: "1.5rem",
          },
        }}
        value={form.email}
        onChange={handleChangeInput}
        fullWidth
        InputProps={{
          style: {
            fontSize: "1.8rem",
          },
        }}
        InputLabelProps={{
          style: {
            fontSize: "2rem",
            marginTop: "-0.5rem",
            fontWeight: 500,
          },
        }}
      />
      <TextField
        label="Senha"
        variant="standard"
        name="password"
        error={errors.password}
        helperText={errors.password}
        FormHelperTextProps={{
          style: {
            fontSize: "1.5rem",
          },
        }}
        type={showPassword.password ? "text" : "password"}
        value={form.password}
        onChange={handleChangeInput}
        fullWidth
        InputProps={{
          style: {
            fontSize: "1.8rem",
          },
          endAdornment: (
            <InputAdornment
              sx={{ cursor: "pointer", width: "2rem" }}
              position="end"
              onClick={() =>
                setShowPassword({
                  ...showPassword,
                  password: !showPassword.password,
                })
              }
            >
              {showPassword.password ? (
                <Visibility fontSize="" />
              ) : (
                <VisibilityOff fontSize="" />
              )}
            </InputAdornment>
          ),
        }}
        InputLabelProps={{
          style: {
            fontSize: "2rem",
            marginTop: "-0.5rem",
            fontWeight: 500,
          },
        }}
      />
    </>
  );
}
