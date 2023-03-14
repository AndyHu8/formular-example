import Footer from "./Footer/Footer";
import Form from "./Form/Form";
import "./Globalstyle.css";
import Navigation from "./Navigation/Navigation";
import Startseite from "./Startseite/Startseite";
import VideoBg from "./VideoBg/VideoBg";

function App() {
  return (
    <div className="app">
      <Navigation/>
      <Startseite/>
      <VideoBg/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
