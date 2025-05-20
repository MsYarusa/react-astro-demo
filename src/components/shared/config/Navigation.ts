export const HOME_PAGE_PATH = "/";
export const ABOUT_PAGE_PATH = "/about";
export const BLOG_PAGE_PATH = "/blog";
export const POSTS_PAGE_PATH = "/posts";
export const LESSONS_PAGE_PATH = "/lessons";

export interface NavLink {
  url: string;
  name: string;
}

export const navLinks: NavLink[] = [
  { url: HOME_PAGE_PATH, name: "Главная" },
  { url: ABOUT_PAGE_PATH, name: "О себе" },
  { url: LESSONS_PAGE_PATH, name: "Уроки" },
  { url: BLOG_PAGE_PATH, name: "Блог" },
];
