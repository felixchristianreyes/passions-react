import React from "react";
import styles from "./MainContent.module.css";
import gitLogo from "./images/iconmonstr-github-1.svg";
import "../../index.css";

const MainContent = () => (
  <div className={styles.MainContent} data-testid="MainContent">
    <main class="col-bg-pal1">
      <div class="row">
        <div class="container text-center my-5 py-5">
          <h1 class="display-2 fw-bold">
            Hey, there! <br /> I am Christian <br />{" "}
            <span class="display-4">a fullstack-developer</span>
          </h1>
        </div>
      </div>

      <div class="row m-0 p-0">
        <div class="container text-center mt-5 col-bg-pal2 pt-5">
          <h2 class="display-6 text-uppercase ">my passions</h2>
        </div>

        <div class="col-bg-pal2 py-5 px-5">
          <h2 class="text-uppercase pb-3 text-center">I like working out</h2>
          <p class="fs-4">
            Exercise is basically any physical activity that we perform on a
            repetitive basis for relaxing our body and taking away all the
            mental stress. It is important to do regular exercise. When you do
            this on a daily basis, you become fit both physically and mentally.
            Moreover, not exercising daily can make a person susceptible to
            different diseases. Thus, just like eating food daily, we must also
            exercise daily.
          </p>
        </div>

        <div class="col-bg-pal2 py-5 px-5">
          <h2 class="text-uppercase text-center pb-3">
            I like reading books 📘
          </h2>
          <p class="fs-4">
            My interest in reading started from a very young age when my dad
            would sit down and read stories to me and my 3 other siblings. He
            would also take my brother and I to a store called Half Price Books.
            It was essentially a large store of discounted books, much like a
            library, where I learned to choose, seek out, and discover new
            genres of stories that interested me. It’s where we would spend up
            to two and a half hours sitting and sorting through countless novels
            and stories to take home and enjoy.
          </p>
        </div>

        <div class="col-bg-pal2 py-5 px-5">
          <h2 class="text-uppercase text-center pb-3">I love coding 👨‍💻</h2>
          <p class="fs-4">
            I approach software with a deep-seated belief that computers and
            software systems can be understood. This belief is, for me, not some
            abstruse theoretical assertion, but a deeply felt belief that
            essentially any question I might care to ask (about computers) has a
            comprehensible answer which is accessible with determined
            exploration and learning.
          </p>
        </div>

        <div class="col-bg-pal2 py-5 px-5">
          <h2 class="text-uppercase text-center pb-3">
            I like watching animes! ϞϞ(๑⚈ ․̫ ⚈๑)∩
          </h2>
          <p class="fs-4">
            Watching anime shows is a lot of fun. I know a lot of those who love
            anime are enjoying every episode that they watch. Most of these
            anime episodes have a lot of humor. Anime characters can easily make
            fun of themselves since they can distort their faces well and also
            they can do most anything thanks to the wonderful and great hands of
            those behind their creation. When I am sad and alone, I just watch
            some anime episodes and in time I just found my found enjoying the
            moment and laughing in my room.
          </p>
        </div>

        <div class="col-bg-pal2 py-5 px-5">
          <h2 class="text-uppercase text-center pb-3">
            I love playing video games! 🎮
          </h2>
          <p class="fs-4">
            Students learn to understand complex concepts such as magnetic
            fields or Earth rotation by playing specifically designed video
            games, and young patients learn new information about diseases and
            vaccines with the help of applications and interactive games. At the
            same time, future health care professionals use serious games for
            training and medical education (Wang et al. 45). If games begin to
            enter education and healthcare, it is unreasonable to argue that
            their main aim is still entertainment. As we can see, they become
            another advanced learning tool that helps users improve their target
            skills or knowledge.
          </p>
        </div>
      </div>

      <div class="row col-bg-pal4 py-5">
        <h1 class="display-6 d-flex justify-content-center pb-3">Get to know more about me</h1>
        <div class="d-flex justify-content-center">
          <a href="https://github.com/felixchristianreyes">
            <img src={gitLogo} alt="gitlogo" width="40px"/>
          </a>
        </div>
      </div>
    </main>
  </div>
);

export default MainContent;
