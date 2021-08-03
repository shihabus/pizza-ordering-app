import Image from "next/image";

import {
  Card,
  CTAContainer,
  Title,
  Price,
  CTA,
  StyledCheckbox,
} from "./styles";

function ToppingCard({ isSelected, topping, disabled, ...rest }) {
  const { label, showLabel, itemImage } = topping;
  return (
    <Card isSelected={isSelected} disabled={disabled} {...rest}>
      <Image src={itemImage} alt={label} width="64" height="64" />
      <CTAContainer>
        <Title>{label}</Title>
        <Price>{showLabel}</Price>
        <CTA>
          <StyledCheckbox
            name={label}
            checked={isSelected}
            disabled={disabled}
            onChange={(e) => e.stopPropagation()}
            onClick={(e) => e.stopPropagation()}
          />
        </CTA>
      </CTAContainer>
    </Card>
  );
}

export default ToppingCard;
