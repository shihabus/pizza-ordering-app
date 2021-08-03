import React from "react";
import PropTypes from "prop-types";

import Layout from "elements/shared/Layout";

import {
  Container,
  SliderWrapper,
  Slides,
  CardContainer,
  TitleContainer,
} from "./styles";

function Card({ children }) {
  return (
    <Layout.PaddedContainer>
      <CardContainer>
        <TitleContainer>{children}</TitleContainer>
      </CardContainer>
    </Layout.PaddedContainer>
  );
}

function Slider({ header, selection, changeHandler, children, ...rest }) {
  return (
    <Container {...rest}>
      <Card>{header}</Card>
      <SliderWrapper>
        <Slides>
          {React.Children.map(children, (child, idx) => {
            const { value } = child.props;
            return React.cloneElement(child, {
              onClick: () => changeHandler(value),
              key: idx,
              isSelected: selection.includes(value),
            });
          })}
        </Slides>
      </SliderWrapper>
    </Container>
  );
}

Slider.propTypes = {
  header: PropTypes.node.isRequired,
  selection: PropTypes.any.isRequired,
  children: PropTypes.node.isRequired,
  changeHandler: PropTypes.func,
};

Slider.defaultProps = {
  changeHandler: () => {},
};

export default Slider;
