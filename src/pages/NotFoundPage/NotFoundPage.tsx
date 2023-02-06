import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section className="NotFoundPage text-tertiary flex flex-col gap-8">
      <h2 className="text-4xl md:text-8xl text-center font-bold">
        404 Not Found :(
      </h2>
      <Link
        to="/"
        className="text-xl md:text-4xl font-semibold text-center text-background block bg-primary self-center p-4 rounded-sm shadow-md shadow-tertiary hover:scale-105 transition-transform duration-300 ease-in-out"
      >
        Back to home
      </Link>
    </section>
  );
};

export default NotFoundPage;
