import "./Navigation.css"
import { useState } from "react";

export default function Navigation() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    function showNav() {
        const MobileUl = document.querySelector(".mobileNav");
        const burgerIcon = document.querySelector(".burger");

        //Öffne es
        if (!isNavOpen || "") {
            MobileUl.classList.add("panelSlideIn");
            MobileUl.classList.remove("panelSlideRight");
            setIsNavOpen(true);
            burgerIcon.classList.add("logoRotate");
        }

        //Schließe es
        else {
            MobileUl.classList.remove("panelSlideIn");
            MobileUl.classList.add("panelSlideRight");
            setIsNavOpen(false);
            burgerIcon.classList.remove("logoRotate");
        }
    }

    return (
        <>
        <div className="navigationContainer">
            <div className="logo" onClick={() => window.location.reload()}>Palmen aus Pappe 3</div>
            <ul className="list">
                <a href="#home"><li>Home</li></a>
                <a href="#videos"><li>Videos</li></a>
                <a href="#videoBg"><li>VideoBg</li></a>
                <a href="#form"><li>Form</li></a>
            </ul>

            <div className="burger" onClick={showNav}><i className="fa fa-solid fa-bars"></i></div>
        </div>

        <div className="mobileNav">
            <ul>
                <a href="#home" onClick={showNav}><li>Home</li></a>
                <a href="#videos"onClick={showNav} ><li>Videos</li></a>
                <a href="#videoBg" onClick={showNav}><li>VideoBg</li></a>
                <a href="#form" onClick={showNav}><li>Form</li></a>
            </ul>
        </div>
        </>
    )
}