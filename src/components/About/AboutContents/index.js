import { useState } from 'react';
import './AboutContents.scss';
import aboutContents from './content-data.json';

const AboutContents = () => {
    const [aboutContent, setAboutContent] = useState(aboutContents);

    return (
        <section className="about-contents">
            {aboutContent.map((content, index) => (
                <div className="about-contents__item-container" key={index}>
                    <h1>{content.title}</h1>
                    <p>{content.text}</p>
                </div>
            ))}
        </section>
    )
}

export default AboutContents;