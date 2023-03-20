import "./Footer.css";
import logo from "../Bilder/CMORA_weiss.png";

export default function Footer() {
    return (
        <div className="footerContainer">
            <div className="footerLinks">
                <h3>ENTWICKELT VON <span onClick={() => window.open("https://www.xiaohu.de/")}>XIAØHU</span></h3>
                <h3>Mit Liebe <br/>
                & Leidenschaft</h3>
            </div>
            <div className="footerRechts">
                <img src={logo} alt="Palmen aus Pappe" />
                <h2>2023 Palmen aus Pappe 3</h2>
            </div>
        </div>
    )
}