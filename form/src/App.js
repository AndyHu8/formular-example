import Footer from "./Footer/Footer";
import "./Globalstyle.css";
import Navigation from "./Navigation/Navigation";
import Startseite from "./Startseite/Startseite";

function App() {
  return (
    <div className="app">
      <Navigation/>
      <Startseite/>
      <Footer/>
    </div>
  );
}

export default App;
