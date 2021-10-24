const GOversea = ({initData}) => {
    const {title, subTitle, contents, tags, thumbnails } = initData;
    let firstStrSubTitle = subTitle.slice(0, 1);
    let restStrSubTitle = subTitle.slice(1, subTitle.length);

    return (
        <section className={`home-grid`}>
            <div className={`home-grid-title`}>
                <h4 className={`home-title`}>
                    G. Oversea
                </h4>
            </div>
            <div className={`home-grid-content grid-style-oversea cursor-pointer gray-masking`}>
                <div className={`home-grid-content-thumbnail`}>
                    <img className={`res-img`} src="./images/ex4.jpg" alt="ex4"/>
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
                            #여행
                        </span>
                        <span className={`home-grid-content-tag`}>
                            #랜선투어
                        </span>
                        <span className={`home-grid-content-tag`}>
                            #여행
                        </span>
                        <span className={`home-grid-content-tag`}>
                            #랜선투어
                        </span>
                        <span className={`home-grid-content-tag`}>
                            #여행
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GOversea;