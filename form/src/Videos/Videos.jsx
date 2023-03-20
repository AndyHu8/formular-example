import "./Videos.css";

export default function Videos() {
    return (
        <div id="videos" className="videosContainer">
            <h1>Die besten Videos aus Palmen aus Pappe 3</h1>
            <div>
                <iframe width="450" height="300"
                    src="https://www.youtube.com/embed/ymfftdIQOh0">
                </iframe>
                <iframe width="450" height="300"
                    src="https://www.youtube.com/embed/wbLpd_fquTg">
                </iframe>
                <iframe width="450" height="300"
                    src="https://www.youtube.com/embed/BKGeueSkWXQ">
                </iframe>
            </div>
        </div>
    )
}