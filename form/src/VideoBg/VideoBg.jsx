import "./VideoBg.css";
import videoBg from "../Bilder/videoBg.mp4";

export default function VideoBg() {
    return (
        <div id="videoBg" className="videoBgContainer">
            <video autoPlay muted loop>
                <source src={videoBg} type="video/mp4" />
            </video>
            <div>
                <h2>Das beste Album an Halloween - Palmen aus Pappe</h2>
                <h2>JETZT STREAMEN!</h2>
                <button>Die Reise Starten</button>
            </div>
        </div>
    )
}