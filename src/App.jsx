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
import "./styles/css/nullstyle.css";
import "./styles/css/main.css";
import "./styles/css/Merch.css";
import "./styles/css/Address.css";
import "./styles/css/BurgerMenu.css";

// Import images (png, jpg, SVG)

class App extends React.Component {
  render() {
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
  }
}

export default App;
