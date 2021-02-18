import { useRef, useLayoutEffect } from "react";

export default function ({ expandRequest, collapseRequest, timeout = 50 }) {
  const ref = useRef();

  useLayoutEffect(() => {
    let timer = null;

    const onMouseEnter = () => {
      timer = setTimeout(() => {
        expandRequest();
      }, timeout);
    };

    const onMouseLeave = () => {
      clearTimeout(timer);
      collapseRequest();
    };

    ref.current.addEventListener("mouseenter", onMouseEnter);
    ref.current.addEventListener("mouseleave", onMouseLeave);
  }, [ref.current]);

  return [ref];
}
