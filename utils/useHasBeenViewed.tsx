import { useInView } from "react-intersection-observer";
import React, { useRef, useEffect } from "react";

const useHasBeenViewed = () => {
  const [ref, inView] = useInView();
  const prevInView = useRef<any>(null);
  const hasBeenViewed = prevInView.current || inView;
  useEffect(() => {
    prevInView.current = inView;
  });

  return [hasBeenViewed, ref];
};

export default useHasBeenViewed;
