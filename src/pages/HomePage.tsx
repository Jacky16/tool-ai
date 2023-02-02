import { BsFillArrowDownCircleFill } from "react-icons/bs";

const HomePage = () => {
  return (
    <div className="mt-8 flex flex-col items-center ">
      <section className="flex flex-col items-center h-[50vh] flex-2">
        <div className="md:flex md:flex-row flex-1 items-start  gap-48">
          <p className="block font-extrabold text-5xl md:text-6xl w-56 md:w-96 text-tertiary flex-1 ">
            Start using <span className="text-primary">AI</span> to improve your
            <span className="text-primary"> WORK</span>
          </p>

          <img
            height={"500px"}
            width={"600px"}
            className="rounded-3xl hidden md:block flex-1"
            src="/assets/images/AI-illustration.webp"
            alt="AI illustration of a man using a PC"
          />
        </div>
        <div className="flex flex-col items-center gap-4 ">
          <BsFillArrowDownCircleFill
            color="white"
            size={48}
            className="transition-transform animate-bounce ease-in-out"
          />
          <small className="text-tertiary text-lg">Scroll</small>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
