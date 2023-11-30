import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import About from "./components/pages/About";
import Footer from "./components/layouts/footer/Footer";
import Header from "./components/layouts/header/Header";
import Rent from "./components/pages/Rent";

// Gestion des routes
// /Home
// /rent/:id
// /about
// /notFound
// /* toutes les autres mènent à <NotFound />

// affichage du Header et du footer communs à toutes les pages.

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rent/:paramsRentId" element={<Rent />} />
        <Route path="/about" element={<About />} />
        <Route path="/notFound" element={<NotFound />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
