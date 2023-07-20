import { NextPage } from "next";
import styles from "../styles/Projects.module.scss";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

const Projects: NextPage = () => {
  return (
    <div className={`${styles.ocean}`}>
      <Head>
        <title>Alex Orlow - Web Developer</title>
        <meta
          name="description"
          content="Highly motivated and skilled Web Developer with a passion for creating innovative solutions."
        />
        <link rel="canonical" href="https://alexorlow.xyz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div className={`${styles["profile-image"]}`}>
          <Image
            src="/images/pixelAvatar.png"
            alt="Profile Image"
            width={100}
            height={100}
          />
        </div>
        <h1>Alex Orlow</h1>

        <h2>Web Developer</h2>
      </header>
      <main className={styles.main}>
        <section className={styles.fullWidth}>
          <h3>About Me</h3>
          <p className={styles.about}>
            Highly motivated and skilled Web Developer with a passion for
            creating innovative solutions. Coming from a background in security
            and waste management, I bring a unique blend of technical expertise
            and leadership capabilities to the tech industry. With a focus on
            continuous learning and a drive to enhance user experiences, I am
            dedicated to pushing the boundaries of web development.
          </p>
        </section>
        <section className={styles.halfWidth}>
          <h3>Skills</h3>
          <ul>
            <li>Programming Languages: TypeScript, Python , C#</li>
            <li>
              Back-End Development: Node.js, Express.js, REST API, Linux,
              Bash/Zsh
            </li>
            <li>
              Front-End Development: Sass,React, Vue, Webpack, Next.js, Nuxt.js{" "}
            </li>
            <li>Game Development: Unity , Godot</li>
            <li>Agile Methodologies: Scrum, Kanban</li>
            <li>Version Control: Git, GitHub</li>
            <li>Testing: Jest, React Testing Library</li>
            <li>Tools: Heroku, Docker, DigitalOcean</li>
          </ul>
        </section>
        <section className={styles.halfWidth}>
          <h3>Projects</h3>
          <ul>
            <li>
              <Link href="/projects">
                <a
                  id="style-2"
                  data-replace="Interactive Portfolio"
                  className={styles.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Interactive Portfolio</span>
                </a>
              </Link>
            </li>
            <li>
              {" "}
              <a
                className={styles.link}
                href="https://quanderdome.herokuapp.com"
                id="style-2"
                data-replace="QuanderDome"
                target="_blank"
                rel="noreferrer"
              >
                <span>QuanderDome</span>
              </a>
            </li>
            <li>
              {" "}
              <a
                className={styles.link}
                href="https://quanderdome2-c52c7ed485c6.herokuapp.com/"
                id="style-2"
                data-replace="QuanderDome II"
                target="_blank"
                rel="noreferrer"
              >
                <span>QuanderDome II</span>
              </a>
            </li>
            <li>
              {" "}
              <a
                className={styles.link}
                href="https://byte-stream-58b30c4b6d4a.herokuapp.com"
                id="style-2"
                data-replace="ByteStream"
                target="_blank"
                rel="noreferrer"
              >
                <span>ByteStream</span>
              </a>
            </li>
            <li>
              {" "}
              <a
                className={styles.link}
                href="https://spacedice.herokuapp.com"
                id="style-2"
                data-replace="Space Dice"
                target="_blank"
                rel="noreferrer"
              >
                <span>Space Dice</span>
              </a>
            </li>
            <li>
              {" "}
              <a
                className={styles.link}
                href="https://orloaft.itch.io/jambo"
                id="style-2"
                data-replace="Jambo"
                target="_blank"
                rel="noreferrer"
              >
                <span>Jambo</span>
              </a>
            </li>
            <li>
              {" "}
              <a
                className={styles.link}
                href="https://github.com/Orloaft/gpt-autodocs"
                id="style-2"
                data-replace="GPT-Autodoc"
                target="_blank"
                rel="noreferrer"
              >
                <span>GPT-Autodoc</span>
              </a>
            </li>
            <li>
              {" "}
              <a
                className={styles.link}
                href="https://mnemora.herokuapp.com"
                id="style-2"
                data-replace="Mnemo"
                target="_blank"
                rel="noreferrer"
              >
                <span>Mnemo</span>
              </a>
            </li>
            <li>
              {" "}
              <a
                className={styles.link}
                href="https://github.com/ludamad/card-game"
                id="style-2"
                data-replace="Land Locked"
                target="_blank"
                rel="noreferrer"
              >
                <span>Land Locked</span>
              </a>
            </li>
            <li>
              {" "}
              <a
                className={styles.link}
                href="https://github.com/Orloaft/week8-hackathon"
                id="style-2"
                data-replace="Web Eyes"
                target="_blank"
                rel="noreferrer"
              >
                <span>Web Eyes</span>
              </a>
            </li>
          </ul>
        </section>
        <section className={styles.fullWidth}>
          <h3>Contact Information</h3>
          <p>alexorlow17@gmail.com</p>

          <p>
            <a
              className={styles.link}
              href="https://linkedin.com/in/alex-orlow"
              id="style-2"
              data-replace="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <span>LinkedIn</span>
            </a>
          </p>
          <p>
            <a
              className={styles.link}
              href="https://github.com/orloaft"
              id="style-2"
              data-replace="GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <span>GitHub</span>
            </a>
          </p>
        </section>
      </main>

      <div className={`${styles.bubble} ${styles["bubble--1"]}`}></div>
      <div className={`${styles.bubble} ${styles["bubble--2"]}`}></div>
      <div className={`${styles.bubble} ${styles["bubble--3"]}`}></div>
      <div className={`${styles.bubble} ${styles["bubble--4"]}`}></div>
      <div className={`${styles.bubble} ${styles["bubble--5"]}`}></div>
      <div className={`${styles.bubble} ${styles["bubble--6"]}`}></div>
      <div className={`${styles.bubble} ${styles["bubble--7"]}`}></div>
      <div className={`${styles.bubble} ${styles["bubble--8"]}`}></div>
      <div className={`${styles.bubble} ${styles["bubble--9"]}`}></div>
      <div className={`${styles.bubble} ${styles["bubble--10"]}`}></div>
      <div className={`${styles.bubble} ${styles["bubble--11"]}`}></div>
      <div className={`${styles.bubble} ${styles["bubble--12"]}`}></div>
    </div>
  );
};
export default Projects;
