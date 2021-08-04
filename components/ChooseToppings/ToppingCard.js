import PropTypes from "prop-types";

import {
  Card,
  ToppingImage,
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
      <ToppingImage src={itemImage} alt={label} />
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

ToppingCard.propTypes = {
  isSelected: PropTypes.bool,
  topping: PropTypes.object.isRequired,
  disabled: PropTypes.bool.isRequired,
};

ToppingCard.defaultProps = {
  isSelected: false,
};

export default ToppingCard;
