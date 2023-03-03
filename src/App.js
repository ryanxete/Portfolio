import HomePage from "./pages/HomePage/HomePage";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import ContactMe from "./pages/ContactMe/ContactMe";
import Projects from "./pages/Projects/Projects";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <NavBar />
      <HomePage />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/Contact" element={<ContactMe />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
