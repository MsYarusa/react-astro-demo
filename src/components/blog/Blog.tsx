import { POSTS_PAGE_PATH } from "../shared/navigation/config";

const Blog = () => {
  return (
    <>
      <p>Здесь я буду публиковать записи о своем пути изучения Astro.</p>

      <ul>
        <li>
          <a href={`${POSTS_PAGE_PATH}/post-1/`}>Пост 1</a>
          <li>
            <a href={`${POSTS_PAGE_PATH}/post-2/`}>Пост 2</a>
          </li>
          <li>
            <a href={`${POSTS_PAGE_PATH}/post-3/`}>Пост 3</a>
          </li>
        </li>
      </ul>
    </>
  );
};

export default Blog;
