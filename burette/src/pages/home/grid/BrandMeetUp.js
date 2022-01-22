import parse from 'html-react-parser';
import {Link} from 'react-router-dom';

const BrandMeetUp = ({initData}) => {
    const {
        id,
        title,
        subTitle,
        contents,
        tags,
        thumbnails
    } = initData;

    let tagsDummy = ["test22"];
    
    return (
        <section className={`home-grid cursor-pointer`}>
            <Link className={`home-link`} to={'/brandmeetup/' + id}>
                <div className={`home-grid-title`}>
                    <h4 className={`home-title`}>
                        Brand Meet Up
                    </h4>
                </div>
                <div className={`home-grid-content`}>
                    <div className={`home-grid-content-thumbnail thumbnail-brand`}>
                        <div className={`home-grid-content-thumbnail-subtitle`}>
                            <div className={`home-grid-content-thumbnail-subtitle-phrase`}>
                                {title}
                            </div>
                            <div className={`home-grid-content-thumbnail-subtitle-name`}>
                                <span className={`home-grid-content-thumbnail-subtitle-text`}>
                                    {subTitle}
                                </span>
                            </div>
                        </div>
                        <div className={`home-grid-content-thumbnail-img gray-masking`}>
                            <img className={`res-img`} src="./images/ex3.jpg" alt="ex3"/>
                        </div>
                    </div>
                    <div className={`home-grid-content-body`}>
                        <div className={`home-grid-content-tags`}>
                                { tagsDummy != null && tagsDummy.length > 0 ? tagsDummy.map((tagName) => 
                                    <span className={`home-grid-content-tag`}>
                                        #{tagName}
                                    </span>
                                ) : null }
                        </div>
                    </div>
                </div>
            </Link>
        </section>
    );
}

export default BrandMeetUp;