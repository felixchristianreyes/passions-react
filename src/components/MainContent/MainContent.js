import React from 'react';
import styles from './MainContent.module.css';

const MainContent = () => (
  <div className={styles.MainContent} data-testid="MainContent">
    <main>
      <ul>
        <li>I like working out 🏋️</li>
        <li>I like reading books 📘</li>
        <li>I love coding 👨‍💻 </li>
        <li>I like watching animes! ϞϞ(๑⚈ ․̫ ⚈๑)∩</li>
        <li>I love playing video games! 🎮</li>
      </ul>
    </main>
  </div>
);

export default MainContent;
