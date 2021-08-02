import PropTypes from "prop-types";
import { toPriceLabel } from "Utils/helperUtils";

import { TitleContainer, Title, Price, BreadCrumb, Crumb } from "./styles";

function CustomizationInfo(props) {
  const { title, total, breadCrumb } = props;

  return (
    <TitleContainer>
      <Title>{title}</Title>
      <Price>{toPriceLabel(total)}</Price>
      <BreadCrumb>
        {breadCrumb?.map(({ label, isDone }, idx) => (
          <Crumb key={idx} isDone={isDone}>
            {label}
            {breadCrumb.length > idx + 1 && ","}
          </Crumb>
        ))}
      </BreadCrumb>
    </TitleContainer>
  );
}

export default CustomizationInfo;

CustomizationInfo.propTypes = {
  title: PropTypes.string,
  total: PropTypes.number.isRequired,
  breadCrumb: PropTypes.array.isRequired,
};

CustomizationInfo.defaultProps = {
  title: "Create Your Pizza",
};
