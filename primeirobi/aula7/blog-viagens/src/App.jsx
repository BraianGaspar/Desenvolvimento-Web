import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Article from "./components/Article";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  // Dados do post armazenados no componente App
  const postData = {
    titulo: "Descobrindo as Praias do Nordeste",
    autor: "Ana Silva",
    data: "15 de agosto de 2025",
    dataISO: "2025-08-15",
    conteudo: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut maiores blanditiis sequi dolorem eveniet. Unde sapiente omnis maiores dolorem quos fuga voluptatem, mollitia quibusdam alias, asperiores, porro modi excepturi id.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, ad ab aliquid, doloribus corrupti deleniti corporis laudantium dignissimos eveniet pariatur nihil qui ullam debitis aperiam magnam ducimus necessitatibus ex minima?",
    ],
    imagem: {
      src: "https://tse3.mm.bing.net/th/id/OIP.LFkRu9c2b1DSJUFG9vQdKgHaE6?rs=1&pid=ImgDetMain&o=7&rm=3",
      alt: "Foto de uma bela praia no Nordeste com coqueiros e mar azul",
      legenda:
        "Vista paradisíaca de uma das praias que visitei em meu passeio.",
    },
  };

  const relatedPosts = [
    "Conhecendo a Serra Gaúcha",
    "Aventura na Amazônia",
    "Roteiro pelas Capitais Europeias",
    "Dicas de hospedagem econômica",
  ];

  return (
    <div className="app">
      <Header />
      <Navigation />
      <main>
        <Article post={postData} />
        <Sidebar posts={relatedPosts} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
