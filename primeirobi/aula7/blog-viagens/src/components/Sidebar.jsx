import "./Sidebar.css";

function Sidebar({ posts }) {
  return (
    <aside className="blog-sidebar">
      <h3>Posts Relacionados</h3>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <a href="#">{post}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
