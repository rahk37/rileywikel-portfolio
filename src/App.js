import React, { useState, useEffect } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import PageRoutes from "./pages/PageRoutes/PageRoutes";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {loading ? (
        <>
          <div className="pacmanloader">
            <PacmanLoader
              color={"#FAA275"}
              loading={loading}
              size={25}
              aria-label="Pacman Loader"
            />
          </div>
        </>
      ) : (
        <PageRoutes />
      )}
    </>
  );
}

export default App;
