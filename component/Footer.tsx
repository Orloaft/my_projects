import Link from "next/link";
import Image from "next/image";

export const Footer = ({
  setShowModal,
  showModal,
}: {
  setShowModal: (show: boolean) => void;
  showModal: boolean;
}) => {
  return (
    <footer className="socials">
      {" "}
      <div
        style={{
          position: "relative",
          height: "2.5rem",
          width: "2.5rem",
        }}
      >
        <Link href="https://www.linkedin.com/in/alex-orlow/">
          <a target="_blank">
            <Image src="/images/linkedin.png" alt="" layout="fill" />
          </a>
        </Link>{" "}
      </div>
      <div
        style={{
          position: "relative",
          height: "2.5rem",
          width: "2.5rem",
        }}
      >
        <Link href="https://github.com/Orloaft">
          <a target="_blank">
            <Image src="/images/github.png" alt="" layout="fill" />
          </a>
        </Link>
      </div>
      <div
        style={{
          position: "relative",
          height: "2.5rem",
          width: "2.5rem",
          cursor: "pointer",
        }}
      >
        <Image
          onClick={() => setShowModal(!showModal)}
          src="/images/mail.png"
          alt=""
          layout="fill"
        />{" "}
      </div>
    </footer>
  );
};
