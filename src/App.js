import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "../src/pages/home/index";
import Contact from "../src/pages/contact/index";
import About from "../src/pages/about/index";
import Portfolio from "../src/pages/portfolio/index";
import Navbar from "./components/Navbar.js";
import { Provider } from "react-redux";
import { store } from "./services/store.js";


function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
