import Container from "../components/Container/Container";
import ToolsSection from "../components/ToolsSection/ToolsSection";

const HomePage = () => {
  return (
    <div className="mt-8 flex flex-col gap-14">
      <section className="flex flex-col items-center relative">
        <Container>
          <div className="flex flex-col">
            <div className=" md:flex md:flex-row items-center justify-center gap-20">
              <div className="flex flex-col items-center gap-8">
                <p className="font-extrabold text-5xl md:text-6xl  text-center md:w-96 text-tertiary">
                  Start using <span className="text-primary">AI</span> to
                  improve your
                  <span className="text-primary"> WORK</span>
                </p>

                <span className="text-tertiary text-xl md:text-2xl">
                  Powered by{" "}
                  <a
                    className="underline"
                    href="https://cohere.ai"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Cohere
                  </a>
                </span>
              </div>
              <img
                height={"300px"}
                width={"300px"}
                className="rounded-3xl hidden md:block max-w-xl bg-tertiary"
                src="/assets/images/robot.webp"
                alt="AI illustration of a man using a PC"
              />
            </div>
          </div>
        </Container>
      </section>

      <ToolsSection />
    </div>
  );
};

export default HomePage;
