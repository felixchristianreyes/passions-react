import React from "react";
import styles from "./Header.module.css";
import "../../index.css";

const Header = () => (
  <div className={styles.Header} data-testid="Header">
    <header class="p-3 col-bg-pal3">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="#"
            class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          ></a>

          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" class="nav-link px-2 text-dark">
                Home
              </a>
            </li>
            <li>
              <a href="#" class="nav-link px-2 text-dark">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" class="nav-link px-2 text-dark">
                About
              </a>
            </li>
          </ul>

          <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input
              type="search"
              class="form-control form-control-dark text-dark "
              placeholder="Search..."
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </header>
  </div>
);

export default Header;
