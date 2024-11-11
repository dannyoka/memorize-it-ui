import { useEffect, useState } from "react";

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sm = screenSize < 600;
  const md = screenSize >= 600 && screenSize < 800;
  const lg = screenSize >= 800;

  return { sm, md, lg };
};
