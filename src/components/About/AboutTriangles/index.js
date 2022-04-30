import './AboutTriangles.scss';
import triangle from '../../../assets/images/triangle-home.png';
import lastTriangle from '../../../assets/images/about-last-triangle.png';

const AboutTriangles = () => {
    return (
        <section className="about-triangles">
            <div className="about-triangles__contaier">
                <div className="about-triangles__contaier__first-triangle">
                    <img src={triangle} alt="" />
                </div>
                <div className="about-triangles__contaier__last-triangle">
                    <img src={lastTriangle} alt="" />
                </div>
            </div>
        </section>
    )
}

export default AboutTriangles;