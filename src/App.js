import './App.css';
import Authentication from "./Authentication/Authentication";
import PageHome from "./PageHome/PageHome";
import { Routes, Route} from "react-router-dom";
import { useState } from 'react';



function App() {

    const [isAuthenticated, setIsAuthenticated] = useState(false);



  return(
      <>
          <Routes>
              <Route
                  exact
                  path="/"
                  element={<PageHome authentication={isAuthenticated} />}
              />
              <Route
                  path="/authentication"
                  element={<Authentication setIsAuthenticated={setIsAuthenticated} />}
              />
          </Routes>
      </>
  );
}
export default App

