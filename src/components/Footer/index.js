import { useEffect } from 'react';
import './Footer.scss';

const Footer = () => {
    
    useEffect(() => {
        if (window.location.href === "http://localhost:3000/" 
            || window.location.href === "http://localhost:3000/work"
        ) {
            
        } else if (window.location.href === "http://localhost:3000/about") {
        } 
    }, [window.location.href]);

    return (
        <footer className="footer">
            <div className="footer__social-media">
                <p>instagram</p>
                <p>facebook</p>
            </div>
            <div className="footer__policy">
                <p>designed by claradix</p>
                <p>&copy; 2022</p>
            </div>
        </footer>
    )
}

export default Footer;