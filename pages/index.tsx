import { NextPage } from "next";
import styles from "../styles/Projects.module.scss";
import Image from "next/image";
import Head from "next/head";
import BasicTabs from "../component/BasicTabs";
import Link from "next/link";

const Projects: NextPage = () => {
  return (
    <div className={`${styles.ocean}`}>
      <Head>
        <title>Alex Orlow - Web Developer</title>
        <meta
          name="description"
          content="Highly motivated and skilled Web Developer with a passion for creating innovative solutions. Skilled in front-end and back-end development using JavaScript, React, Node.js, and more."
        />
        <link rel="canonical" href="https://alexorlow.xyz" />
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
      <section>
        <h3>About Me</h3>
        <p className={styles.about}>
          Highly motivated and skilled Web Developer with a passion for creating
          innovative solutions. Coming from a background in security and waste
          management, I bring a unique blend of technical expertise and
          leadership capabilities to the tech industry. With a focus on
          continuous learning and a drive to enhance user experiences, I am
          dedicated to pushing the boundaries of web development.
        </p>
      </section>
      <section>
        <h3>Skills</h3>
        <ul>
          <li>Front-End Development: JavaScript, React, HTML/CSS</li>
          <li>Back-End Development: Node.js, Express, SQL</li>
          <li>Frameworks and Libraries: Next.js, Web APIs, DOM API</li>
          <li>Agile Development Methodologies</li>
          <li>TypeScript</li>
          <li>Version Control: Git, GitHub</li>
          <li>Testing: Jest</li>
          <li>Tools: Heroku</li>
        </ul>
      </section>
      <section>
        <h3>Projects</h3>
        <ul>
          <li>
            <Link href="/projects">Interactive Portfolio</Link>
          </li>
          <li>QuanderDome</li>
          <li>SpaceDice</li>
          <li>Jambo</li>
          <li>GPT-Autodoc</li>
          <li>Mnemo</li>
          <li>Land Locked</li>
          <li>Web eyes</li>
          <li>Weather Butler</li>
        </ul>
      </section>
      <section>
        <h3>Contact Information</h3>
        <p>Email: alexorlow17@gmail.com</p>
        <p>Phone: 647-772-4538</p>
        <p>
          Website: <a href="https://alexorlow.xyz">alexorlow.xyz</a>
        </p>
        <p>
          LinkedIn:{" "}
          <a href="https://linkedin.com/in/alex-orlow">
            linkedin.com/in/alex-orlow
          </a>{" "}
        </p>{" "}
        <p>
          GitHub: <a href="https://github.com/orloaft">github.com/orloaft</a>
        </p>
      </section>

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
