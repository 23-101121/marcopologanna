import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import NoAccessPage from "./pages/NoAccessPage";
import Preloader from "./components/Preloader"; 

function Paths() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      
      <BrowserRouter>
        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/no-access"
            element={<NoAccessPage />}
          />

          <Route
            path="/error"
            element={<ErrorPage />}
          />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Paths;