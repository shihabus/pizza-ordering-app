import styled from "styled-components";
import PropTypes from "prop-types";

import { Constants, inlineStyles } from "Utils/stylesUtil";

import Colors from "elements/shared/Colors";

const FullPage = styled.div`
  height: 100vh;
  /* mobile viewport bug fix */
  height: -webkit-fill-available;
  overflow: hidden;
`;

const ContentContainer = styled.div`
  position: absolute;
  background-color: ${Colors.lightGray};

  top: ${Constants.APP_BAR_HEIGHT};
  bottom: ${({ showBottomBar }) =>
    showBottomBar ? Constants.BOTTOM_BAR_HEIGHT : 0};
  left: 0px;
  right: 0px;

  overflow: hidden;
  overflow-y: auto;

  scroll-padding-bottom: 2em;
`;

const PaddedContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0px 20px;
  max-width: 1024px;
  ${inlineStyles}
`;

const Content = ({ showBottomBar, ...props }) => (
  <ContentContainer showBottomBar={showBottomBar} {...props} />
);

Content.propTypes = {
  showBottomBar: PropTypes.bool,
};

Content.defaultProps = {
  showBottomBar: false,
};

const Layout = {
  FullPage,
  Content,
  PaddedContainer,
};

export default Layout;
