import type { Post } from "../posts/model";
import BlogPost from "./BlogPost";

const Blog = () => {
  const allPosts: Post[] = Object.values(
    import.meta.glob("../../pages/posts/*.md", { eager: true }),
  );

  return (
    <>
      <p>Здесь я буду публиковать записи о своем пути изучения Astro.</p>

      <ul>
        {allPosts.map((post: Post) => (
          <BlogPost url={post.url} title={post.frontmatter.title} />
        ))}
      </ul>
    </>
  );
};

export default Blog;
