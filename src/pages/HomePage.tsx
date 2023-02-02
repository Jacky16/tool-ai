import { BsFillArrowDownCircleFill } from "react-icons/bs";
import Container from "../components/Container/Container";
import ToolsSection from "../components/ToolsSection/ToolsSection";

const HomePage = () => {
  return (
    <div className="mt-8 flex flex-col gap-14">
      <section className="flex flex-col items-center h-[50vh] relative">
        <Container>
          <div className="flex flex-col">
            <div className="md:flex md:flex-row items-start">
              <p className="block font-extrabold text-5xl md:text-6xl w-56 md:w-96 text-tertiary">
                Start using <span className="text-primary">AI</span> to improve
                your
                <span className="text-primary"> WORK</span>
              </p>
              <img
                height={"500px"}
                width={"90%"}
                className="rounded-3xl hidden md:block flex-1 max-w-xl"
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

      <ToolsSection />
    </div>
  );
};

export default HomePage;
