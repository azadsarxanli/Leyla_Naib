import './AboutImages.scss';
import aboutImg1 from '../../../assets/images/about-img1.png';
import aboutImg2 from '../../../assets/images/about-img2.png';
import rotateImg from '../../../assets/images/rotate-img.png';
import triangleImg from '../../../assets/images/big-triangle.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react';

const AboutImages = () => {
    gsap.registerPlugin(ScrollTrigger);
    const rotateImage = useRef();

    useEffect(() => {
        gsap.to(
            rotateImage.current,
            {
                transform: "rotate(10deg)",
                duration: 0.3,
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
            <div className='about-images__main-img'>
                <img src={aboutImg1} alt="" />
            </div>
            <div className='about-images__small-img'>
                <div className='about-images__small-img__rotate' ref={rotateImage} id="rotate-img">
                    <img src={rotateImg} alt="" />
                </div>
                <p>
                    Ultrices in phasellus suspendisse et, urna. Fermentum elementum aliquam mattis luctus.
                    Eu orci aliquam tincidunt enim. Facilisis odio eget morbi at nulla nisi. Mauris, ipsum convallis diam gravida tristique...
                </p>
            </div>
            <div className='about-images__medium-img'>
                <img src={aboutImg2} alt="" />
                <p>
                    Ultrices in phasellus suspendisse et, urna. Fermentum elementum aliquam mattis luctus. Eu orci aliquam tincidunt enim. 
                    Facilisis odio eget morbi at nulla nisi. Mauris, ipsum convallis diam gravida tristique...
                </p>
            </div>
        </section>
    )
}

export default AboutImages;