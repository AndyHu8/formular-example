import "./Startseite.css"
import logo from "../Bilder/CMORA_weiss.png"

export default function Startseite() {
    return (
        <div className="startseiteContainer">
            <div>
                <img src={logo} alt="Palmen aus Pappe" />
            </div>
            <h1>Palmen aus Pappe - Offiziell Diamant gegangen</h1>
        </div>
    )
}