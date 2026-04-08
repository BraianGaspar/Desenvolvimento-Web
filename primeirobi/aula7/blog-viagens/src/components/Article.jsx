import "./Article.css";

function Article({ post }) {
  return (
    <article className="blog-article">
      <h2>{post.titulo}</h2>
      <div className="article-meta">
        <span className="author">Por {post.autor}</span>
        <time dateTime={post.dataISO}>{post.data}</time>
      </div>

      {post.conteudo.map((paragrafo, index) => (
        <p key={index}>{paragrafo}</p>
      ))}

      <figure className="article-figure">
        <img src={post.imagem.src} alt={post.imagem.alt} loading="lazy" />
        <figcaption>{post.imagem.legenda}</figcaption>
      </figure>
    </article>
  );
}

export default Article;
