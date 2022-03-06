import { useInView } from "react-intersection-observer";
import { useRef, useEffect } from "react";

const useHasBeenViewed = () => {
  const [ref, inView] = useInView();
  const prevInView = useRef(false || null);
  const hasBeenViewed = prevInView.current || inView;
  useEffect(() => {
    prevInView.current = inView;
  });

  return [hasBeenViewed, ref];
};

export default useHasBeenViewed;
