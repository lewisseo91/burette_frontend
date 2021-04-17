const Interview = () => {
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
                            <span>A</span>
                        </div>
                        <div className={`home-grid-content-phrase`}>
                            <div className={`home-grid-content-phrase-subtitle subtitle-style1`}>
                                <span>세상에 없던 경작지 '공기'를 실험하다.</span>
                            </div>
                            <div className={`home-grid-content-phraseRest`}>
                                <span>IRPROTINE</span>
                            </div>
                        </div>
                    </div>
                    <div className={`home-grid-content-context`}>
                        <span className={`home-grid-content-context-txt`}>
                            예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 
                            예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 
                            예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 
                            예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 
                            예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 
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