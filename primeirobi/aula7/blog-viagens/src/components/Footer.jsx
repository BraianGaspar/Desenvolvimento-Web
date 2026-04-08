import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="blog-footer">
      <p>
        &copy; {currentYear} - Todos os direitos reservados. Blog de Viagens -
        Compartilhando experiências pelo mundo.
      </p>
    </footer>
  );
}

export default Footer;
