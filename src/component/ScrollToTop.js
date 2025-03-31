import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Instantly jumps to the top
  }, [pathname]);

  return null; // No UI needed
};

export default ScrollToTop;
