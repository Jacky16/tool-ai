const Footer = () => {
  return (
    <footer className="text-tertiary flex flex-col items-center gap-4">
      <span className="first-letter:uppercase">
        This is a submission for{" "}
        <a
          href="https://github.com/midudev/midu-cohere-hackathon"
          target={"_blank"}
          rel="noreferrer"
          className="underline"
        >
          midudev hackaton
        </a>
      </span>

      <span>
        Designed and developed by{" "}
        <a
          href="https://github.com/Jacky16"
          target={"_blank"}
          className="underline"
          rel="noreferrer"
        >
          Adrià Martínez
        </a>{" "}
        with ❤️
      </span>
    </footer>
  );
};

export default Footer;
