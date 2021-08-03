import styled from "styled-components";

import Layout from "elements/shared/Layout";

const SectionTitle = styled(Layout.PaddedContainer)`
  position: absolute;

  top: 24px;
  left: 0;
  right: 0;
  padding-left: 20px;
  margin: 0 auto;

  & > :first-child {
    margin-bottom: 4px;
  }
`;

export default SectionTitle;
