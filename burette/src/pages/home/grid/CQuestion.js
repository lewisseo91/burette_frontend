const CQuestion = () => {
    return (
        <section className={`home-grid`}>
            <div className={`home-grid-title`}>
                <h4 className={`home-title`}>
                    C. Question
                </h4>
            </div>
            <div className={`home-grid-content grid-style-question`}>
                <div className={`home-grid-content-thumbnail cursor-pointer gray-masking`}>
                    <img className={`res-img`} src="./images/ex2.jpg" alt="ex2"/>
                </div>
                <div className={`home-grid-content-body`}>
                    <div className={`home-grid-content-subtitle`}>
                        <div className={`home-grid-content-phrase`}>
                            <div className={`home-grid-content-phrase-subtitle subtitle-style3`}>
                                <pre>
                                    <b>컨텐츠</b>를 바라보는 <br/>
                                    <b>시각</b>에 대하여
                                </pre>
                            </div>
                        </div>
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

export default CQuestion;