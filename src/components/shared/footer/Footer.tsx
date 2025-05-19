import Social from "../social/Social";

const Footer = () => {
  const platform = "github";
  const username = "withastro";

  return (
    <footer>
      <p>
        Узнайте больше о моих проектах на
        <Social platform="twitter" username="astrodotbuild" />
        <Social platform="github" username="withastro" />
        <Social platform="youtube" username="astrodotbuild" />
      </p>
    </footer>
  );
};

export default Footer;
