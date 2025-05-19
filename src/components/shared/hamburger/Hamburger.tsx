import { useEffect } from "react";
import "./styles/Hamburger.css";

const Hamburger = () => {
  useEffect(() => {
    document.querySelector(".hamburger")?.addEventListener("click", () => {
      document.querySelector(".nav-links")?.classList.toggle("expanded");
    });
  }, []);

  return (
    <div className="hamburger">
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </div>
  );
};

export default Hamburger;
