import { useState, useEffect } from "react";

const useRefDimensions = (ref) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      const { current } = ref;
      const boundingRect = current.getBoundingClientRect();
      const { width, height } = boundingRect;
      const newWidth = Math.round(width);
      const newHeight = Math.round(height);
      if (newWidth !== dimensions.width || newHeight !== dimensions.height) {
        setDimensions({ width: newWidth, height: newHeight });
      }
    }
    // eslint-disable-next-line
  }, [ref]);

  return dimensions;
};

export default useRefDimensions;
