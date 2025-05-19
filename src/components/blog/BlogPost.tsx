interface Props {
  title: string;
  url: string;
}

const BlogPost = ({ title, url }: Props) => {
  return (
    <li>
      <a href={url}>{title}</a>
    </li>
  );
};

export default BlogPost;
