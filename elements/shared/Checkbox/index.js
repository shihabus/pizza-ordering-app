import CheckIcon from "elements/shared/Icons/CheckIcon";

import { Label, Input, UnCheckedIcon, CheckedStyle } from "./styles";

const CheckedIcon = () => (
  <CheckedStyle>
    <CheckIcon />
  </CheckedStyle>
);

export default function Checkbox() {
  const id = "notify-user";
  return (
    <Label htmlFor={id}>
      <Input id={id} type="checkbox" />
      <CheckedIcon />
      <UnCheckedIcon />
    </Label>
  );
}
