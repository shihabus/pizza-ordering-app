import styled from "styled-components";

import { Constants, inlineStyles } from "Utils/stylesUtil";

const FullPageWrapper = styled.div`
  height: 100vh;
  /* mobile viewport bug fix */
  height: -webkit-fill-available;
  overflow: hidden;
`;

const ContentContainer = styled.div`
  position: absolute;

  top: ${Constants.APP_BAR_HEIGHT};
  bottom: ${({ showBottomBar }) =>
    showBottomBar ? Constants.BOTTOM_BAR_HEIGHT : 0};
  left: 0px;
  right: 0px;

  overflow: hidden;
  overflow-y: auto;

  scroll-padding-bottom: 2em;
`;

const PaddedBox = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0px 20px;
  ${inlineStyles}
`;

export { FullPageWrapper, ContentContainer, PaddedBox };
