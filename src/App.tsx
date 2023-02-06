import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Container from "./components/Container/Container";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ToolLayout from "./layout/ToolLayout/ToolLayout";
import QuestionsPage from "./pages/QuestionsPage/QuestionsPage";
import SpamCheckerPage from "./pages/SpamCheckerPage/SpamCheckerPage";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));

function App() {
  return (
    <div className="bg-background min-h-screen flex flex-col justify-between min-h py-8 gap-8">
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
        <Route
          path="/tools/spam-checker"
          element={
            <ToolLayout>
              <Container>
                <SpamCheckerPage />
              </Container>
            </ToolLayout>
          }
        />
        <Route
          path="/tools/language-questions"
          element={
            <ToolLayout>
              <Container>
                <QuestionsPage />
              </Container>
            </ToolLayout>
          }
        />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
