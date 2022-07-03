import React from "react";
import styles from "./MainContent.module.css";

const MainContent = () => (
  <div className={styles.MainContent} data-testid="MainContent">
    <main class="bg-warning ">
      <div class='row'>
        <div class="col-6 px-5 py-5">
          <ul class="list-unstyled fs-4 fw-bold">
            <li>I like working out 🏋️</li>
            <li>I like reading books 📘</li>
            <li>I love coding 👨‍💻 </li>
            <li>I like watching animes! ϞϞ(๑⚈ ․̫ ⚈๑)∩</li>
            <li>I love playing video games! 🎮</li>
          </ul>
        </div>
        <div class="col-6 pt-5">
          <h1>Get to know more about me</h1>
        </div>
      </div>
    </main>
  </div>
);

export default MainContent;
