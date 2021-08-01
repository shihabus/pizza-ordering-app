import React from "react";

import { Label, Input, Slider } from "./styles";

export default function Toggle({ name, ...rest }) {
  return (
    <Label htmlFor={name} {...rest}>
      <Input id={name} type="checkbox" />
      <Slider />
    </Label>
  );
}
