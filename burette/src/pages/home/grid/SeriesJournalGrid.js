import parse from 'html-react-parser';
import {Link} from 'react-router-dom';

const SeriesJournalGrid = ({initData}) => {
    const {id, title, subTitle, contents, tags, thumbnails } = initData;
    
    let tagsDummy = ["test33"];

    return (
        <section className={`home-grid`}>
            <Link className={`home-link`} to={'/seriesjournal/' + id}>
                <div className={`home-grid-title`}>
                    <h4 className={`home-title`}>
                        series journal
                    </h4>
                </div>
                <div className={`home-grid-content`}>
                    <div className={`home-grid-content-thumbnail cursor-pointer gray-masking`}>
                        <img className={`res-img`} src="./images/ex2.jpg" alt="ex2"/>
                    </div>
                    <div className={`home-grid-content-body`}>
                        <div className={`home-grid-content-subtitle`}>
                            <div className={`home-grid-content-phrase`}>
                                <div className={`home-grid-content-phrase-subtitle subtitle-style2`}>
                                    {title}
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

export default SeriesJournalGrid;