import { ABOUT_PAGE_PATH, BLOG_PAGE_PATH, HOME_PAGE_PATH } from "./config";
import "./styles/NavBar.css";

const Navigation = () => {
  return (
    <div className="nav-links">
      <a href={HOME_PAGE_PATH}>Главная</a>
      <a href={BLOG_PAGE_PATH}>Блог</a>
      <a href={ABOUT_PAGE_PATH}>О сайте</a>
    </div>
  );
};

export default Navigation;
