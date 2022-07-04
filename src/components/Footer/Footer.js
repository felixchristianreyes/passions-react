import React from "react";
import styles from "./Footer.module.css";
import "../../index.css";

const Footer = () => (
  <div className={styles.Footer} data-testid="Footer">
    <div class="col-bg-pal4">
      <div class="copyright  text-center text-dark">
        <div class="container">
          <small>Copyright © Christian Paolo F. Reyes 2022</small>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
