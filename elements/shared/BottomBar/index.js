import styled from "styled-components";

import { Constants } from "utils/stylesUtil";

const BottomContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  height: ${Constants.BOTTOM_BAR_HEIGHT};
`;

export default BottomContainer;
