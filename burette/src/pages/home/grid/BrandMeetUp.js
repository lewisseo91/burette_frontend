const BrandMeetUp = () => {
    return (
        <section className={`home-grid`}>
            <div className={`home-grid-title`}>
                <h4 className={`home-title`}>
                    Brand Meet Up
                </h4>
            </div>
            <div className={`home-grid-content`}>
                <div className={`home-grid-content-thumbnail thumbnail-brand`}>
                    <div className={`home-grid-content-thumbnail-subtitle`}>
                        <div className={`home-grid-content-thumbnail-subtitle-phrase`}>
                            케미컬 라이프 스타일 브랜드
                        </div>
                        <div className={`home-grid-content-thumbnail-subtitle-name`}>
                            <span className={`home-grid-content-thumbnail-subtitle-text`}>
                                익스플레인
                            </span>
                        </div>
                    </div>
                    <div className={`home-grid-content-thumbnail-img`}>
                        <img className={`res-img`} src="./images/ex3.jpg" alt="ex3"/>
                    </div>
                </div>
                <div className={`home-grid-content-body`}>
                    <div className={`home-grid-content-tags`}>
                        <span className={`home-grid-content-tag`}>
                            #익스플레인
                        </span>
                        <span className={`home-grid-content-tag`}>
                            #익스플레인
                        </span>
                        <span className={`home-grid-content-tag`}>
                            #익스플레인
                        </span>
                        <span className={`home-grid-content-tag`}>
                            #익스플레인
                        </span>
                        <span className={`home-grid-content-tag`}>
                            #익스플레인
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BrandMeetUp;