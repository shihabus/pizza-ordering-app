import React from "react";
import styled from "styled-components";
import { inlineStyles, shimmer } from "Utils/stylesUtil";

const StyledImage = styled.img`
  ${inlineStyles}
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ShimmerPlaceholder = styled.div`
  position: absolute;
  ${shimmer};
  ${inlineStyles};
`;

function ImageWithLoader(props) {
  const imgRef = React.useRef(null);
  const [isLoaded, setIsLoaded] = React.useState(false);

  const { width, height, style: styleProps, className } = props;

  React.useEffect(() => {
    if (!isLoaded && imgRef?.current?.complete) {
      setIsLoaded(true);
    }
  }, [imgRef?.current?.complete, isLoaded]);

  function onLoadHandler() {
    setIsLoaded(true);
  }

  return (
    <Container>
      <ShimmerPlaceholder
        className={className}
        style={{
          display: isLoaded ? "none" : "block",
          width,
          height,
          ...styleProps,
        }}
      />
      <StyledImage
        ref={imgRef}
        {...props}
        style={!isLoaded ? { visibility: "hidden" } : {}}
        onLoad={onLoadHandler}
      />
    </Container>
  );
}

export default ImageWithLoader;
