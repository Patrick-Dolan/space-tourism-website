import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import DestinationPage from "./pages/DestinationPage";
import CrewPage from "./pages/CrewPage";
import Navbar from "./Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import TechnologyPage from "./pages/TechnologyPage";

function App() {
  const location = useLocation();

  let bgImage;

  switch (location.pathname) {
    case "/":
      bgImage = "bg-home-mobile";
      break;
    case "/destination":
      bgImage = "bg-destination-mobile";
      break;
    case "/crew":
      bgImage = "bg-crew-mobile";
      break;
    case "/technology":
      bgImage = "bg-technology-mobile";
      break;
    default:
      bgImage = "bg-home-mobile";
  }

  return (
    <div className="relative min-h-screen min-w-screen bg-tertiary">
    <div className={`fixed inset-0 ${bgImage} bg-fixed bg-no-repeat bg-top bg-cover z-0 opacity-75`}></div>
    <div className="relative container p-6 text-primary min-h-screen z-1">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/destination" element={<DestinationPage />} />
          <Route path="/crew" element={<CrewPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  </div>
  );
}

export default App;