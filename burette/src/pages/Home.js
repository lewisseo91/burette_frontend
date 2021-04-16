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
                                <div className={`home-grid-content-subTitle`}>
                                    <div className={`home-grid-content-phraseFirst`}>
                                        A
                                    </div>
                                    <div className={`home-grid-content-phrase`}>
                                        <div className={`home-grid-content-subTitle`}>
                                            세상에 없던 경작지 '공기'를 실험하다.
                                        </div>
                                        <div className={`home-grid-content-phraseRest`}>
                                            IRPROTINE
                                        </div>
                                    </div>
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
                    </section>
                    {/* C Question */}
                    <section className={`home-grid`}>
                        <div className={`home-grid-title`}>
                            <h4 className={`home-title`}>
                                C. Question
                            </h4>
                        </div>
                    </section>
                    {/* G Oversea */}
                    <section className={`home-grid`}>
                        <div className={`home-grid-title`}>
                            <h4 className={`home-title`}>
                                G. Oversea
                            </h4>
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