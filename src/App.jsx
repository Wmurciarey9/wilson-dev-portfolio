import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeContext } from "./context";
import { AboutPage } from "./pages/aboutPage/AboutPage";
import Contact from "./pages/contact/Contact";
import { Home } from "./pages/home/Home";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkmode;

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
