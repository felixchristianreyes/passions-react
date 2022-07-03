import React from "react";
import styles from "./Footer.module.css";

const Footer = () => (
  <div className={styles.Footer} data-testid="Footer">
    <footer>
      <small>© 2021 Ziroll development. All rights reserved.</small>
    </footer>
  </div>
);

export default Footer;
