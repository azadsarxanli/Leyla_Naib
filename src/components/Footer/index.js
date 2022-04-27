import { useEffect, useRef } from 'react';
import './Footer.scss';

const Footer = () => {
    const footerRef = useRef(null);
    
    useEffect(() => {
        if (window.location.href === "http://localhost:3000/" 
            || window.location.href === "http://localhost:3000/work"
            || window.location.href === "http://localhost:3000/work-interior"
        ) {
            if (footerRef.current.className) {
                footerRef.current.classList.remove("footer-white");
            }
        } else if (
            window.location.href === "http://localhost:3000/about"
            || window.location.href === "http://localhost:3000/blog"
            || window.location.href === "http://localhost:3000/blog-interior"
            || window.location.href === "http://localhost:3000/service"
        ) {
            if (footerRef.current.className) {
                footerRef.current.classList.add("footer-white");
            }
        } 
    }, [window.location.href]);

    return (
        <footer className="footer" ref={footerRef}>
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