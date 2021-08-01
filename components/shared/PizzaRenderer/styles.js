import styled from "styled-components";
import { PreTitle } from "elements/shared/TextStyles";
import Colors from "elements/shared/Colors";

const BlurredBorder = styled.div`
  --ring-width: 375px;
  --blurred-border-width: 304px;
  --scale-ratio: ${(props) => props.scale || 1};
  --plate-width: 250px;

  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  width: var(--blurred-border-width);
  height: var(--blurred-border-width);
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  margin: 0 auto;
  text-align: center;
  left: 0;
  right: 0;
  /* change scale with pizza size s=1,m=1.05,l=1.1 */
  transform: translateY(-50%) scale(var(--scale-ratio));
`;

const Plate = styled.div`
  box-shadow: 0px 4px 15px rgba(218, 218, 229, 0.2);
  border-radius: 50%;
  width: var(--plate-width);
  height: var(--plate-width);
  background-color: ${Colors.white};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const PizzaImage = styled.img`
  border-radius: 50%;
`;

const Ring = styled.div`
  position: absolute;
  width: var(--ring-width);
  height: calc(var(--ring-width) / 2);
  background-color: transparent;
  border-bottom-left-radius: 200.5px; /* height + border-width */
  border-bottom-right-radius: 200.5px;
  border: 0.5px solid ${Colors.stroke};
  border-top: 0;
  transform: translateY(50%);
`;

const PizzaLabel = styled.div`
  position: absolute;
  bottom: 0;
  margin: 0 auto;
  text-align: center;
  left: 0;
  right: 0;
  transform: translateY(50%);

  background-color: ${Colors.stroke};
  backdrop-filter: blur(4px);
  border-radius: 10px;
  width: fit-content;
  padding: 6px 12px;
`;

const LabelText = styled(PreTitle)`
  color: ${Colors.lightPurple};
`;

export { BlurredBorder, Plate, PizzaImage, Ring, PizzaLabel, LabelText };
