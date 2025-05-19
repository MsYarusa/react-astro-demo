import { ABOUT_PAGE_PATH, HOME_PAGE_PATH } from "./config";

const Navigation = () => {
  return (
    <>
      <a href={HOME_PAGE_PATH}>Главная</a>

      <a href={ABOUT_PAGE_PATH}>О сайте</a>
    </>
  );
};

export default Navigation;
