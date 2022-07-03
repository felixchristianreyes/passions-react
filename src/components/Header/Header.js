import React from "react";
import styles from "./Header.module.css";
import logo from "./images/logo512.png";

const Header = () => (
  <div className={styles.Header} data-testid="Header">
    <header>
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <img src={logo} alt="Logo" />
        </a>
      </nav>

      <h1>My 5 Passions</h1>
    </header>
  </div>
);

export default Header;
