import { VisibilityOff, Visibility } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField, TextFieldProps } from "@mui/material";
import { useState } from "react";

export interface Props {
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, isValid?: boolean) => void;
}

const ERROR_MESSAGE: string = "Senha deve ter no mínimo 8 caracteres";

const PasswordTextField: React.FC<TextFieldProps & Props> = ({ onChange }) => {
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isEmpty, setIsEmpty] = useState(true);

  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const handlePasswordChanges = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const input = e.currentTarget.value;
    const result: boolean = checkValidPassword(input);
    setIsValidPassword(result);
    setIsEmpty(input.length == 0);
    onChange?.(e, result);
  };

  const checkValidPassword = (text: string) => {
    if (text.length < 8) return false;
    return true;
  };

  const handlePasswordShow = () => {
    setIsVisiblePassword(!isVisiblePassword);
  };

  return (
    <>
      <TextField
        error={!isValidPassword && !isEmpty}
        required
        fullWidth
        label="Senha"
        type={isVisiblePassword ? "text" : "password"}
        helperText={!isValidPassword && !isEmpty ? ERROR_MESSAGE : ""}
        onChange={(e) => handlePasswordChanges(e)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="Exibir Senha" onClick={() => handlePasswordShow()} edge="end">
                {isVisiblePassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      ></TextField>
    </>
  );
};

export default PasswordTextField;
