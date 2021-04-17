import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Home.scss";

const Home = () => {
    return (
        <div className={`home`}>
            <section className={`home-grid-total`}>
                <section className={`left-container home-section`}>
                    {/* 인터뷰 */}
                    <section className={`home-grid`}>
                        <div className={`home-grid-title`}>
                            <h4 className={`home-title`}>
                                Interview
                            </h4>
                        </div>
                        <div className={`home-grid-content`}>
                            <div className={`home-grid-content-thumbnail`}>
                                <img className={`res-img`} src="./images/ex1.png" alt="ex1"/>
                            </div>
                            <div className={`home-grid-content-body`}>
                                <div className={`home-grid-content-subtitle`}>
                                    <div className={`home-grid-content-phraseFirst`}>
                                        A
                                    </div>
                                    <div className={`home-grid-content-phrase`}>
                                        <div className={`home-grid-content-phrase-subtitle subtitle-style1`}>
                                            세상에 없던 경작지 '공기'를 실험하다.
                                        </div>
                                        <div className={`home-grid-content-phraseRest`}>
                                            IRPROTINE
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
                    {/* 시리즈 저널 */}
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
                </section>
                <section className={`mid-container home-section`}>
                    {/* 브랜드 밋업 */}
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
                    {/* C Question */}
                    <section className={`home-grid`}>
                        <div className={`home-grid-title`}>
                            <h4 className={`home-title`}>
                                C. Question
                            </h4>
                        </div>
                        <div className={`home-grid-content grid-style-question`}>
                            <div className={`home-grid-content-thumbnail`}>
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
                    {/* G Oversea */}
                    <section className={`home-grid`}>
                        <div className={`home-grid-title`}>
                            <h4 className={`home-title`}>
                                G. Oversea
                            </h4>
                        </div>
                        <div className={`home-grid-content grid-style-oversea`}>
                            <div className={`home-grid-content-thumbnail`}>
                                <img className={`res-img`} src="./images/ex4.jpg" alt="ex4"/>
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
                </section>
                <section className={`right-container home-section`}>
                    {/* Column */}
                    <section className={`home-grid`}>
                        <div className={`home-grid-title`}>
                            <h4 className={`home-title`}>
                                Column
                            </h4>
                        </div>
                        <div className={`home-grid-content`}>
                            <FontAwesomeIcon icon={faQuoteLeft} />
                            <FontAwesomeIcon icon={faQuoteRight} />
                        </div>
                    </section>
                    {/* Info Desk */}
                    <section className={`home-grid`}>
                        <div className={`home-grid-title`}>
                            <h4 className={`home-title`}>
                                Info Desk
                            </h4>
                        </div>
                    </section>
                    {/* After Letter */}
                    <section className={`home-grid`}>
                        <div className={`home-grid-title`}>
                            <h4 className={`home-title`}>
                                After Letter
                            </h4>
                        </div>
                        {/* 3 row  */}
                        <div></div>
                        <div></div>
                        <div></div>
                    </section>
                </section>
            </section>
            <section className={`home-news-subscribe`}>
                <div>
                    <h4>
                        Subscribe to the burette NewsLetter ()
                    </h4>
                </div>
            </section>
        </div>
    );
};

export default Home;