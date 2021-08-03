import PropTypes from "prop-types";

import CheckIcon from "elements/shared/Icons/CheckIcon";

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

function Checkbox({ onClickHandler, checked, name, disabled, ...rest }) {
  return (
    <Label htmlFor={name} onClick={onClickHandler}>
      <Input
        id={name}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onClickHandler}
      />
      <CheckedIcon {...rest} />
      <UnChecked {...rest} />
    </Label>
  );
}

export default Checkbox;

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClickHandler: PropTypes.func,
};

Checkbox.defaultProps = {
  onClickHandler: () => {},
};
