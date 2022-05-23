import './AboutImages.scss';
import triangleImg from '../../../assets/images/big-triangle.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react';

const AboutImages = ({ aboutContent }) => {
    gsap.registerPlugin(ScrollTrigger);
    const rotateImage = useRef();

    useEffect(() => {
        gsap.to(
            rotateImage.current,
            {
                transform: "rotate(-2deg)",
                duration: 0.2,
                scrollTrigger: {
                    trigger: "#rotate-img",
                    start: "top 70%",
                    scrub: false,
                },
            }
        )
    })

    return (
        <section className='about-images'>
            <div className='about-images__triangle'>
                <img src={triangleImg} alt="" />
            </div>
            {aboutContent ?
                <>
                    <div className='about-images__main-img'>
                        <img src={aboutContent[0]?.image.url} alt="" />
                    </div>
                    <div className='about-images__small-img'>
                        <div className='about-images__small-img__rotate' ref={rotateImage} id="rotate-img">
                            <img src={aboutContent[1]?.image.url} alt="" />
                        </div>
                        <p>{aboutContent[1]?.description}</p>
                    </div>
                    <div className='about-images__medium-img'>
                        <img src={aboutContent[2]?.image.url} alt="" />
                        <p>{aboutContent[2]?.description}</p>
                    </div>
                </>
                : ""
            }    
        </section>
    )
}

export default AboutImages;