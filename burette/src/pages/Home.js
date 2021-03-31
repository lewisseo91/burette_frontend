import "./Home.scss";

const Home = () => {
    return (
        <div className={`home`}>
            <section className={`left-container`}>
                {/* 인터뷰 */}
                <section>
                    <div>
                        <h2 className={`home-title`}>
                            Interview
                        </h2>
                    </div>
                </section>
                {/* 시리즈 저널 */}
                <section>
                    <div>
                        <h2 className={`home-title`}>
                            series journal
                        </h2>
                    </div>
                </section>
            </section>
            <section className={`mid-container`}>
                {/* 브랜드 밋업 */}
                <section>
                    <div>
                        <h2 className={`home-title`}>
                            Brand Meet Up
                        </h2>
                    </div>
                </section>
                {/* C Question */}
                <section>
                    <div>
                        <h2 className={`home-title`}>
                            C. Question
                        </h2>
                    </div>
                </section>
                {/* G Oversea */}
                <section>
                    <div>
                        <h2 className={`home-title`}>
                            G. Oversea
                        </h2>
                    </div>
                </section>
            </section>
            <section className={`right-container`}>
                {/* Column */}
                <section>
                    <div>
                        <h2 className={`home-title`}>
                            Column
                        </h2>
                    </div>
                </section>
                {/* Info Desk */}
                <section>
                    <div>
                        <h2 className={`home-title`}>
                            Info Desk
                        </h2>
                    </div>
                </section>
                {/* After Letter */}
                <section>
                    <div>
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
        </div>
    );
};

export default Home;