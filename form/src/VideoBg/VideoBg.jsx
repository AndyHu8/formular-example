import "./VideoBg.css";
import videoBg from "../Bilder/videoBg.mp4";

export default function VideoBg() {
    return (
        <div id="videoBg" className="videoBgContainer">
            <video autoPlay muted loop>
                <source src={videoBg} type="video/mp4" />
            </video>
            <div>
                <h2>Das beste Album an Halloween - Palmen aus Pappe 3</h2>
                <h2>JETZT STREAMEN!</h2>
                <button onClick={() => window.open("https://open.spotify.com/album/6SZrGBrZZ77WqyMB2wsJQ9?si=w0tqqBPLR6mMMGjmlqNZnQ")}>Die Reise starten</button>
            </div>
        </div>
    )
}