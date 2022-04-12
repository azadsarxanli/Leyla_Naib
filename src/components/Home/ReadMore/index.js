import './ReadMore.scss';
import girlSitOnChair from '../../../assets/images/sit-on-chair.png';
import readMoreImg from '../../../assets/images/read-more.png';

const ReadMore = () => {
    return (
        <section className="read-more">
            <div className="read-more__container-one">
                <div className="read-more__container-one__image">
                    <img src={girlSitOnChair} alt="" />
                </div>
                <div className="read-more__container-one__description">
                    <p>
                        Ultrices in phasellus suspendisse et, urna. Fermentum elementum aliquam mattis luctus. 
                        Eu orci aliquam tincidunt enim. Facilisis odio eget morbi at nulla nisi. Mauris, ipsum convallis diam gravida tristique...
                    </p>
                    <div className="read-more-btn">
                        <button>Read more</button>
                    </div>
                    <h2>Sed cras ut vulputate a risus</h2>
                </div>
                {/* <div className="linne"></div> */}
            </div>
            <div className="read-more__container-two">
                <div className="read-more__container-two__description">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <span>Maecenas tortor</span> id 
                        ut a tempor. In aliquam amet est mauris velit, venenatis tempor proin...
                    </p>
                    <div className="read-more-btn">
                        <button>Read more</button>
                    </div>
                    <h2>Purus eget molestie urna</h2>
                </div>
                <div className="read-more__container-two__image">
                    <img src={readMoreImg} alt="" />
                </div>
            </div>
        </section>
    )
}

export default ReadMore;