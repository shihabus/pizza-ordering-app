import React from "react";

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

export default Slider;
