
import {Link} from 'react-router-dom';
export default function Footer() {
    return (
        <footer>
            <menu>
                <li className="img-footer">
                    <img src={require('../assets/bottom-logo.png')} alt="Little Lemon logo"></img>
                </li>
                <li className = "contact" >
                    <h1 className="footer-header">Navigation</h1>
                    <ul className="footer-links">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <a href={require('../assets/menu.webp')} target="_blank" rel="noreferrer">Menu</a>
                        <Link to="/bookings">Bookings</Link>
                        <Link to="/myorder">My Orders</Link>
                        <Link to="/login">Login</Link>
                    </ul>
                </li>

                <li>
                    <h1 className="footer-header">Contact</h1>
                    <ul className="footer-links">
                        <li>D/1, Plot No 15, Sai Kripa Chs Soceity, Mhada, Andheri(w)</li>
                        <li>Mumbai, Maharashtra</li>
                        <br></br>
                        <li>(91)-24371213</li>
                        <br></br>
                        <a href="mailto: info@littlelemon.com" target="_blank" rel="noreferrer">info@littlelemon.com</a>
                    </ul>
                </li>
                <li>
                    <h1 className="footer-header">Connect</h1>
                    <ul className="footer-links">
                        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">YouTube</a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
                        <a href="https://www.telegram.com/" target="_blank" rel="noreferrer">Telegram</a>
                    </ul>
                </li>
            </menu>
        </footer>
    );
}