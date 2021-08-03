import { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";

import { StyledImage, Container, ShimmerPlaceholder } from "./styles";

function ImageWithLoader(props) {
  const { width, height, style: styleProps, className } = props;

  const imgRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
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

ImageWithLoader.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
};

ImageWithLoader.defaultProps = {
  width: "",
  height: "",
  style: {},
  className: "",
};

export default ImageWithLoader;
