// Import libraries
import React from "react";

// Import components
import Header from "./components/Header";
import About from "./components/About";
import Menu from "./components/Menu";
import Merch from "./components/Merch";
import Address from "./components/Address";
import Footer from "./components/Footer";

// Import styles (CSS)
import "./styles/nullstyle.css";
import "./styles/main.css";
import "./styles/Merch.css";
import "./styles/Address.css";
import "./styles/BurgerMenu.css";

// Import images (png, jpg, SVG)

const App = () => {
  return (
    <div className="app-body">
      <Header />
      <main className="main">
        <About />
        <Menu />
        <Merch />
        <Address />
      </main>
      <Footer />
    </div>
  );
};

export default App;
