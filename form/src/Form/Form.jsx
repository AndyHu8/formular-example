import "./Form.css";

export default function Form() {
    return (
        <div id="form" className="formContainer">
            <form action="'https://formsubmit.co/huandy01@gmail.com" method="POST">
                <label>Du hast noch Fragen? Dann kontaktiere uns!</label>
                <input name="email" type="email" placeholder="Deine Email-Adresse" required/>
                <input name="name" type="text" placeholder="Dein Name" required/>
                <textarea name="message" type="text" placeholder="Deine Nachricht an uns"/>
                <button type="submit">Nachricht senden</button>
            </form>
        </div>
    )
}