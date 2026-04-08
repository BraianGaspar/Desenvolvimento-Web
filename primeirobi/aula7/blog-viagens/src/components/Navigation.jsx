import "./Navigation.css";

function Navigation() {
  const links = ["Home", "Sobre Nós", "Contato"];

  return (
    <nav className="blog-nav">
      {links.map((link, index) => (
        <a key={index} href={`/${link.toLowerCase().replace(" ", "-")}`}>
          {link}
        </a>
      ))}
    </nav>
  );
}

export default Navigation;
