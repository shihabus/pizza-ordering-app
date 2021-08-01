import React from "react";
import PropTypes from "prop-types";

import { TitleContainer, Title, Price, BreadCrumb, Crumb } from "./styles";

export default function CustomizationInfo(props) {
  const { title, total, breadCrumb } = props;

  return (
    <TitleContainer>
      <Title>{title}</Title>
      <Price>{total}</Price>
      <BreadCrumb>
        {breadCrumb?.map((crumb, idx) => (
          <Crumb key={idx}>
            {crumb}
            {breadCrumb.length > idx + 1 && ", "}
          </Crumb>
        ))}
      </BreadCrumb>
    </TitleContainer>
  );
}

CustomizationInfo.propTypes = {
  title: PropTypes.string,
  total: PropTypes.number.isRequired,
  breadCrumb: PropTypes.array.isRequired,
};

CustomizationInfo.defaultProps = {
  title: "Create Your Pizza",
};
