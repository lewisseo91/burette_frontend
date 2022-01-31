import parse from 'html-react-parser';
import {Link} from 'react-router-dom';

const InterviewGrid = ({initData}) => {
    const {
        id,
        title,
        subTitle,
        contents,
        tags,
        thumbnails
    } = initData;

    let firstStrSubTitle = subTitle != null && subTitle.length > 0
        ? subTitle.slice(0, 1)
        : null;

    let restStrSubTitle = subTitle != null && subTitle.length > 0
        ? subTitle.slice(1, subTitle.length)
        : null;

    let tagsDummy = ["test"];

    return (
        <section className={`home-grid`}>
            <Link className={`home-link`} to={'/interview/' + id}>
                <div className={`home-grid-title`}>
                    <h4 className={`home-title`}>
                        Interview
                    </h4>
                </div>
                <div className={`home-grid-content`}>
                    <div className={`home-grid-content-thumbnail cursor-pointer gray-masking`}>
                        <img className={`res-img`} src="./images/ex1.png" alt="ex1"/>
                    </div>
                    <div className={`home-grid-content-body`}>
                        <div className={`home-grid-content-subtitle`}>
                            <div className={`home-grid-content-phraseFirst`}>
                                <span>{firstStrSubTitle}</span>
                            </div>
                            <div className={`home-grid-content-phrase`}>
                                <div className={`home-grid-content-phrase-subtitle subtitle-style1`}>
                                    <span>{title}</span>
                                </div>
                                <div className={`home-grid-content-phraseRest`}>
                                    <span>{restStrSubTitle}</span>
                                </div>
                            </div>
                        </div>
                        <div className={`home-grid-content-context`}>
                            <div className={`home-grid-content-context-txt`}>
                                {parse(contents)}
                            </div>
                        </div>
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

export default InterviewGrid;