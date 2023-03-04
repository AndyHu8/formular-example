import "./Globalstyle.css";
import Navigation from "./Navigation/Navigation";
import Startseite from "./Startseite/Startseite";

function App() {
  return (
    <div className="App">
      {/* <Startseite/> */}
      <Navigation/>
      <Startseite/>
    </div>
  );
}

export default App;
