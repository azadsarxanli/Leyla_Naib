import { useEffect, useRef } from "react";
import "./Footer.scss";

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;
    console.log(footer);
    console.log(footerRef.current);
    if (
      window.location.href.includes("") ||
      window.location.href.includes("work") ||
      window.location.href.includes("work/interior")
    ) {
      console.log(footer, "if else icinde");
      if (footer.className) {
        return () => {
          footer.className = "footer";
        };
      }
    } else if (
      window.location.href.includes("about") ||
      window.location.href.includes("blog") ||
      window.location.href.includes("blog/interior") ||
      window.location.href.includes("service")
    ) {
      if (footer.className) {
        return () => {
          footer.className = "footer footer-white";
        };
      }
    }
  }, []);

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
  );
};

export default Footer;
