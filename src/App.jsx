import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import DetailsRent from "./components/pages/DetailsRent";
import About from "./components/pages/About";
import Footer from "./components/layouts/footer/Footer";
import Header from "./components/layouts/header/Header";
//import { useState } from 'react'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/DetailsRent/:id" element={<DetailsRent />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
