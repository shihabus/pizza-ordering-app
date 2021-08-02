import styled from "styled-components";

import Colors from "elements/shared/Colors";
import Layout from "elements/shared/Layout";
import { Header1, Header2, PreTitle } from "elements/shared/TextStyles";

const TitleContainer = styled(Layout.PaddedContainer)`
  position: absolute;
  top: 0;
  padding-top: 20px;

  display: grid;
  grid-template-columns: 1fr max-content;
  grid-template-rows: max-content;
  grid-template-areas:
    "title price"
    "breadcrumb .";
  grid-column-gap: 2px;
`;

const Title = styled(Header1)`
  grid-area: title;
  color: ${Colors.white};
`;

const Price = styled(Header2)`
  grid-area: price;
  color: ${Colors.white};

  &::before {
    content: "$ ";
  }
`;

const BreadCrumb = styled.div`
  grid-area: breadcrumb;
  & > p::after {
    content: " ";
    display: inline-bottom;
    padding-right: 4px;
  }
`;

const Crumb = styled(PreTitle)`
  display: inline-block;
  color: ${({ isDone }) =>
    isDone ? Colors.white : "rgba(255, 255, 255, 0.3)"};
`;

export { TitleContainer, Title, Price, BreadCrumb, Crumb };
