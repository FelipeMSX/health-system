import React, { ChangeEventHandler } from "react";
import { Input } from "antd";
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
      <Input id="outlined-basic" required={required} type={type} name={name} onChange={onChange} />
    </Container>
  );
};

export default TextBox;
