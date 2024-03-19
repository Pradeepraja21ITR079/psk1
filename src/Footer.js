import './Footer.css';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const Footer = () => {
    return ( 
        <footer>
            <div className="footer__container">
                <div className="footer__items__container">
                    
                    <div className="footer__message__container">
                        <div className="footer__message__header">
                            <h1>Send Us a Message</h1>
                        </div>
                        <form className="footer__message__form">
                            <div className="form__group">
                                <label htmlFor="from">From:</label>
                                <input type="text" id="from" name="from" />
                            </div>
                            <div className="form__group">
                                <label htmlFor="to" >To:</label>
                                <input type="text" id="to" name="to" />
                            </div>
                            <div className="form__group">
                                <label htmlFor="message">Message:</label>
                                <textarea id="message" name="message" rows="6" ></textarea>
                            </div>
                            <button type="submit">Send</button>
                        </form>
                    </div>
                    <div className="footer__contact__container">
                        <div className="footer__contact__header">
                            <h1>Contact Us</h1>
                        </div>
                        <ul className="footer__contacts">
                            <li className="footer__contact">
                                <LocalPhoneIcon /> <span> 9080168896</span>
                            </li>
                            <li className="footer__contact">
                                <EmailIcon /> <span>  psktradersnkl@gmail.com</span>
                            </li>
                            <li className="footer__contact">
                                <LocationOnIcon /> <span>135/58, Thiruchengode Road, Namakkal, Tamilnadu-637001.</span>
                                
                            </li>
                        </ul>
                    </div>  
                    
                </div>
            </div>
        </footer>
    );
}

export default Footer;
