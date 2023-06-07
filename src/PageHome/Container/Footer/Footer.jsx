import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>Contact</h3>
                    <div className="footer-contact-info">
                        <p>Adresse : 123 Rue du Soleil, Ville</p>
                        <p>Téléphone : 02 51 00 00 00</p>
                        <p>Email : contact@example.com</p>
                    </div>

                </div>
                <div className="footer-section">
                    <h3>Liens de navigation</h3>
                    <ul>
                        <li><a href="/header">Accueil</a></li>
                        <li><a href="/News">News</a></li>
                        <li><a href="/Services">Les prestations</a></li>
                        <li><a href="/crew">L'équipe</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Mentions légales</h3>
                    <ul>
                        <li><a href="/politique-confidentialite">Politique de confidentialité</a></li>
                        <li><a href="/conditions-utilisation">Conditions d'utilisation</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Réseaux sociaux</h3>
                    <div className="social-icons">
                        <a href="https://www.facebook.com"><FaFacebook /></a>
                        <a href="https://www.twitter.com"><FaTwitter /></a>
                        <a href="https://www.instagram.com"><FaInstagram /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2023 Nom de l'entreprise. Tous droits réservés.</p>
            </div>
        </footer>
    );
}