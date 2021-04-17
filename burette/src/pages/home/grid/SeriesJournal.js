const SeriesJournal = () => {
    return (
        <section className={`home-grid`}>
            <div className={`home-grid-title`}>
                <h4 className={`home-title`}>
                    series journal
                </h4>
            </div>
            <div className={`home-grid-content`}>
                <div className={`home-grid-content-thumbnail`}>
                    <img className={`res-img`} src="./images/ex2.jpg" alt="ex2"/>
                </div>
                <div className={`home-grid-content-body`}>
                    <div className={`home-grid-content-subtitle`}>
                        <div className={`home-grid-content-phrase`}>
                            <div className={`home-grid-content-phrase-subtitle subtitle-style2`}>
                                리도 못가서 발병난다.
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

export default SeriesJournal;