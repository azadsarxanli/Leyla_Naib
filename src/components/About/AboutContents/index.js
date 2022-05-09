import './AboutContents.scss';

const AboutContents = ({ aboutModule }) => {
    return (
        <section className="about-contents">
            {aboutModule?.map((content, index) => (
                <div className="about-contents__item-container" key={index}>
                    <h1>{content.title}</h1>
                    <p>{content.description}</p>
                </div>
            ))}
        </section>
    )
}

export default AboutContents;