import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // pathname이 변경될 때마다 스크롤을 맨 위로 이동
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
