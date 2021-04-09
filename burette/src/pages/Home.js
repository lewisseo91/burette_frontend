import "./Home.scss";

const Home = () => {
    return (
        <div className={`home`}>
            <section className={`home-grid-total`}>
                <section className={`left-container home-section`}>
                    {/* 인터뷰 */}
                    <section className={`home-grid`}>
                        <div className={`home-grid-title`}>
                            <h2 className={`home-title`}>
                                Interview
                            </h2>
                        </div>
                    </section>
                    {/* 시리즈 저널 */}
                    <section className={`home-grid`}>
                        <div className={`home-grid-title`}>
                            <h2 className={`home-title`}>
                                series journal
                            </h2>
                        </div>
                    </section>
                </section>
                <section className={`mid-container home-section`}>
                    {/* 브랜드 밋업 */}
                    <section className={`home-grid`}>
                        <div className={`home-grid-title`}>
                            <h2 className={`home-title`}>
                                Brand Meet Up
                            </h2>
                        </div>
                    </section>
                    {/* C Question */}
                    <section className={`home-grid`}>
                        <div className={`home-grid-title`}>
                            <h2 className={`home-title`}>
                                C. Question
                            </h2>
                        </div>
                    </section>
                    {/* G Oversea */}
                    <section className={`home-grid`}>
                        <div className={`home-grid-title`}>
                            <h2 className={`home-title`}>
                                G. Oversea
                            </h2>
                        </div>
                    </section>
                </section>
                <section className={`right-container home-section`}>
                    {/* Column */}
                    <section className={`home-grid`}>
                        <div className={`home-grid-title`}>
                            <h2 className={`home-title`}>
                                Column
                            </h2>
                        </div>
                    </section>
                    {/* Info Desk */}
                    <section className={`home-grid`}>
                        <div className={`home-grid-title`}>
                            <h2 className={`home-title`}>
                                Info Desk
                            </h2>
                        </div>
                    </section>
                    {/* After Letter */}
                    <section className={`home-grid`}>
                        <div className={`home-grid-title`}>
                            <h2 className={`home-title`}>
                                After Letter
                            </h2>
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
                    <h2>
                        Subscribe to the burette NewsLetter ()
                    </h2>
                </div>
            </section>
        </div>
    );
};

export default Home;