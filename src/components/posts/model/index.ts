export interface Post {
  url: string;
  frontmatter: {
    title: string;
    description: string;
    pubDate: string;
    tags: string[];
  };
}
