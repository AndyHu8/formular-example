import Footer from "./Footer/Footer";
import Form from "./Form/Form";
import "./Globalstyle.css";
import Navigation from "./Navigation/Navigation";
import Startseite from "./Startseite/Startseite";

function App() {
  return (
    <div className="app">
      <Navigation/>
      <Startseite/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
