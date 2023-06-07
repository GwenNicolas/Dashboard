import './Contact.css';
import Paragraph from '../../../components/Paragraph/Paragraph';

export default function Contact({authentication}) {
    return (
        <div className="contact-container">
            <h1>Contact</h1>
            <div className="contact-content">
                <h2>Besoin d'infos supplémentaires ?</h2>
                <div className="contact-info">
                    {authentication && (
                        <img
                            src="/icon/pencil.svg"
                            alt="Modifier"
                            className="pencil-logo"
                        />
                    )}
                    <Paragraph text="Yann Roffi" background="white"/>
                    <Paragraph text="02 51 00 00 00" background="white"/>
                    <Paragraph text="yann.roffi@gmail.com" background="white"/>
                </div>
            </div>
        </div>
    );
}
