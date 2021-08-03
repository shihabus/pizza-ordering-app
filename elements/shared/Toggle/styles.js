import styled from "styled-components";
import Colors, { Gradients } from "elements/shared/Colors";

const Label = styled.label`
  --width: ${(props) => props.width || "100px"};
  --height: ${(props) => props.height || "50px"};
  --border: ${(props) => props.borderWidth || "3px"};
  --dot-dia: calc(var(--height) - 2 * var(--border));
  --translate-by: calc(var(--width) - 2 * var(--border) - var(--dot-dia));

  position: relative;
  display: block;
  -webkit-tap-highlight-color: transparent;

  width: var(--width);
  height: var(--height);
  margin-bottom: 30px;
`;

const Input = styled.input`
  display: none;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  background-color: ${Colors.lightGray};
  box-shadow: inset 0px 1.05px 4.2px rgba(160, 168, 204, 0.4);

  padding: var(--border);

  border-radius: 35px;
  will-change: background-color;

  transition: 400ms background-color;

  &::before {
    position: absolute;
    content: "";
    transition: 400ms transform, 400ms background-color;

    width: var(--dot-dia);
    height: var(--dot-dia);
    border-radius: 50px;
    background-color: ${Colors.white};
    box-shadow: 0px 4px 5px rgba(109, 110, 156, 0.1);
  }

  ${Input}:checked ~ & {
    background: linear-gradient(
      107.9deg,
      rgba(245, 49, 63, 0.4) 1.55%,
      rgba(255, 163, 96, 0.4) 94.08%
    );
    box-shadow: inset 0px 2px 8px rgba(245, 49, 63, 0.2);
    transition: 400ms background;
  }

  ${Input}:checked ~ & {
    &::before {
      background: ${Gradients.red};
      box-shadow: 0px 5px 10px rgba(245, 49, 63, 0.4);

      transition: 400ms transform;
      transform: translateX(var(--translate-by));
    }
  }
`;

export { Label, Input, Slider };
