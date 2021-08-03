import PropTypes from "prop-types";

import { Label, Input, Slider } from "./styles";

function Toggle({ name, ...rest }) {
  return (
    <Label htmlFor={name} {...rest}>
      <Input id={name} type="checkbox" />
      <Slider />
    </Label>
  );
}

export default Toggle;

Toggle.propTypes = {
  name: PropTypes.string.isRequired,
};
