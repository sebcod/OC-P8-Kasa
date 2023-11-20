import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import About from "./components/pages/About";
import Footer from "./components/layouts/footer/Footer";
import Header from "./components/layouts/header/Header";

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:paramsRentId" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
