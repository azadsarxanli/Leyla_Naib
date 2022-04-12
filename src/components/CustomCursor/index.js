import { useEffect, useRef } from 'react';
import './CustomCursor.scss';

const CustomCursor = () => {
    const appCursor = useRef(null);

    useEffect(() => {
        document.addEventListener("mousemove", (event) => {
            const { clientX, clientY } = event;
            const mouseX = clientX - appCursor.current.clientWidth / 2;
            const mouseY = clientY - appCursor.current.clientHeight / 2;
            appCursor.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        });
    
        return () => {};
    }, []);

    return (
        <div className="app-cursor " ref={appCursor}></div>
    )
}

export default CustomCursor;