import HomePage from "./pages/HomePage/HomePage";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import ContactMe from "./pages/ContactMe/ContactMe";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
