import CheckIcon from "elements/shared/Icons/CheckIcon";
import PropTypes from "prop-types";

import { Label, Input, UnCheckedStyle, CheckedStyle } from "./styles";

const CheckedIcon = (props) => (
  <CheckedStyle {...props}>
    <CheckIcon width="8px" />
  </CheckedStyle>
);

const UnChecked = (props) => (
  <UnCheckedStyle {...props}>
    <CheckIcon width="8px" />
  </UnCheckedStyle>
);

export default function Checkbox({ onClickHandler, checked, name, ...rest }) {
  return (
    <Label htmlFor={name} onClick={onClickHandler}>
      <Input id={name} type="checkbox" checked={checked} />
      <CheckedIcon {...rest} />
      <UnChecked {...rest} />
    </Label>
  );
}

Checkbox.propTypes = {
  onClickHandler: PropTypes.func,
  name: PropTypes.string.isRequired,
};

Checkbox.defaultProps = {
  onClickHandler: () => {},
};
