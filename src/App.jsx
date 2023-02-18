// Import libraries
import React, { userRef } from "react";
import { Link } from "react-scroll";

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
import Arrow from "./img/dashicons_arrow-right-alt2.png";

const divRef = userRef < HTMLDivElement > null;

class App extends React.Component {
  render() {
    return (
      <div className="app-body">
        <Header ref={divRef} />
        <main className="main">
          <About />
          <Menu />
          <Merch />
          <Address />
          <Link
            to="header"
            duration={500}
            smooth={true}
            button
            className="anchor"
          >
            <img src={Arrow} alt="" className="anchor__img" />
          </Link>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
