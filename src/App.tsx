import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const HomePage = lazy(() => import("./pages/HomePage"));

function App() {
  return (
    <div className="bg-background min-h-screen py-12 flex flex-col gap-12">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <HomePage />
            </Suspense>
          }
        />

        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
