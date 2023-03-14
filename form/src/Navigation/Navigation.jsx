import "./Navigation.css"

export default function Navigation() {
    return (
        <div className="navigationContainer">
            <div className="logo" onClick={() => window.location.reload()}>Palmen aus Pappe</div>
            <ul className="list">
                <a href="#home"><li>Home</li></a>
                <a href="#videos"><li>Videos</li></a>
                <a href="#videoBg"><li>VideoBg</li></a>
                <a href="#form"><li>Form</li></a>
            </ul>
        </div>
    )
}