const Interview = ({initData}) => {
    const {title, subTitle, contents, tags, thumbnails } = initData;
    console.log(title);
    console.log(subTitle);
    let firstStrSubTitle = subTitle.slice(0, 1);
    let restStrSubTitle = subTitle.slice(1, subTitle.length);
    
    return (
        <section className={`home-grid`}>
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
                        <span className={`home-grid-content-context-txt`}>
                            {contents}
                        </span>
                    </div>
                    <div className={`home-grid-content-tags`}>
                        <span className={`home-grid-content-tag`}>
                            #인터뷰
                        </span>
                        <span className={`home-grid-content-tag`}>
                            #인터뷰
                        </span>
                        <span className={`home-grid-content-tag`}>
                            #AIRPROTINE
                        </span>
                        <span className={`home-grid-content-tag`}>
                            #인터뷰
                        </span>
                        <span className={`home-grid-content-tag`}>
                            #AIRPROTINE
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Interview;