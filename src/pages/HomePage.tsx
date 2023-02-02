import { BsFillArrowDownCircleFill } from "react-icons/bs";
import Container from "../components/Container/Container";

const HomePage = () => {
  return (
    <div className="mt-8 flex flex-col gap-14">
      <section className="flex flex-col items-center h-[60vh] relative">
        <Container>
          <div className="flex flex-col">
            <div className="md:flex md:flex-row items-start gap-48  flex-2">
              <p className="block font-extrabold text-5xl md:text-6xl w-56 md:w-96 text-tertiary flex-1 ">
                Start using <span className="text-primary">AI</span> to improve
                your
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
            <div className="flex flex-col items-center absolute bottom-0 right-[50%] translate-x-[50%]">
              <BsFillArrowDownCircleFill
                color="white"
                size={48}
                className="transition-transform animate-bounce"
              />
              <small className="text-tertiary text-lg">Scroll</small>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;
