import React from "react";

import { RoundedButton } from "elements/shared/Button";

import { Card, Title, ButtonContainer } from "./styles";

function ButtonsGroup({ children, onChange, selection, ...props }) {
  return (
    <ButtonContainer>
      {React.Children.map(children, (child, idx) => {
        const { value } = child.props;
        return React.cloneElement(child, {
          onClick: () => onChange(value),
          isActive: selection === value,
          key: idx,
          ...props,
        });
      })}
    </ButtonContainer>
  );
}

function ButtonGroup({ title, children, onChange, selection, ...props }) {
  return (
    <Card {...props}>
      <Title>{title}</Title>
      <ButtonsGroup onChange={onChange} selection={selection}>
        {children}
      </ButtonsGroup>
    </Card>
  );
}

ButtonGroup.Item = RoundedButton;

export default ButtonGroup;
