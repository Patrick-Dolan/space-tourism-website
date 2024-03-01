import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import DestinationPage from "./pages/DestinationPage";
import CrewPage from "./pages/CrewPage";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import TechnologyPage from "./pages/TechnologyPage";

function App() {
  return (
    <div className="container px-6 text-primary">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destination" element={<DestinationPage />} />
        <Route path="/crew" element={<CrewPage />} />
        <Route path="/technology" element={<TechnologyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;