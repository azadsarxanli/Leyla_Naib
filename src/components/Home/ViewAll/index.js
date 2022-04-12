import './ViewAll.scss';
import longArrow from '../../../assets/images/long-arrow.png';
import imageOne from '../../../assets/images/img-one.png';
import imageTwo from '../../../assets/images/img-two.png';
import imageThree from '../../../assets/images/img-three.png';
import imageFour from '../../../assets/images/img-four.png';
import imageFive from '../../../assets/images/img-five.png';
import imageSixth from '../../../assets/images/img-sixth.png';

const ViewAll = () => {
    return (
        <section className='view-all'>
            <div className='view-all__title'>
                <p>View all</p>
                <div>
                    <img src={longArrow} alt="" />
                </div>
            </div>
            <div className='view-all__images-section'>
                <div className='view-all__images-section__cards'>
                    <div>
                        <div>
                            <img src={imageOne} alt="" />
                        </div>
                        <div>
                            <p>VIEW WORK</p>
                            <img src={longArrow} alt="" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={imageTwo} alt="" />
                        </div>
                        <div>
                            <p>VIEW WORK</p>
                            <img src={longArrow} alt="" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={imageThree} alt="" />
                        </div>
                        <div>
                            <p>VIEW WORK</p>
                            <img src={longArrow} alt="" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={imageFour} alt="" />
                        </div>
                        <div>
                            <p>VIEW WORK</p>
                            <img src={longArrow} alt="" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={imageFive} alt="" />
                        </div>
                        <div>
                            <p>VIEW WORK</p>
                            <img src={longArrow} alt="" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={imageSixth} alt="" />
                        </div>
                        <div>
                            <p>VIEW WORK</p>
                            <img src={longArrow} alt="" />
                        </div>
                    </div>
                </div>
                <div className='view-all__images-section__scroll-card-line'></div>
            </div>
        </section>
    )
}

export default ViewAll;