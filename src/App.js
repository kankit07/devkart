import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./AllRoutes";
import Context from "./context/context";
import Footer from "./components/Home/Footer";

function App() {
  return (
    <Context>
      <div className="App min-h-screen flex flex-col">
        <Router>
          <Navbar />
          <AllRoutes />
          <Footer />
        </Router>
      </div>
    </Context>
  );
}

export default App;
