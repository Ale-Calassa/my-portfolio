import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Curriculum from "./components/Curriculum";

function App() {
  return (
    <Router>
      <div className="App">

        {/* Página principal com seções */}
        <Routes>
          <Route
            path="*"
            element={
              <>
                <Navbar />
                <div id="home"><Home /></div>
                <div id="about"><About /></div>
                <div id="projects"><Projects /></div>
                <div id="certificates"><Certificates /></div>
                <div id="contact"><Contact /></div>
              </>
            }
          />

          {/* Página separada para o currículo */}
          <Route path="/curriculum" element={<Curriculum />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
