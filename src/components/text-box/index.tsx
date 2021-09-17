import { TextField } from "@material-ui/core";
import React, { ChangeEventHandler } from "react";

import { Container } from "./styles";
export interface Props {
  labelName: string;
  type: string;
  required?: boolean;
  name?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> | undefined;
}

const TextBox: React.FC<Props> = ({ labelName, required, type, name, onChange }) => {
  return (
    <Container>
      <TextField
        id="outlined-basic"
        variant="outlined"
        required={required}
        label={labelName}
        type={type}
        name={name}
        onChange={onChange}
      />
    </Container>
  );
};

export default TextBox;
