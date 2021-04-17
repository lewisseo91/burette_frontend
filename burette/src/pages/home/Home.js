import "./Home.scss";
import {Interview, SeriesJournal, BrandMeetUp, CQuestion, 
        GOversea, Column, Infodesk, AfterLetter, Newsletter } from "./grid";

const Home = () => {
    return (
        <div className={`home`}>
            <section className={`home-grid-total`}>
                <section className={`left-container home-section`}>
                    {/* 인터뷰 */}
                    <Interview />
                    {/* 시리즈 저널 */}
                    <SeriesJournal/>
                </section>
                <section className={`mid-container home-section`}>
                    {/* 브랜드 밋업 */}
                    <BrandMeetUp />
                    {/* C Question */}
                    <CQuestion />
                    {/* G Oversea */}
                    <GOversea />
                </section>
                <section className={`right-container home-section`}>
                    {/* Column */}
                    <Column />
                    {/* Info Desk */}
                    <Infodesk />
                    {/* After Letter */}
                    <AfterLetter />
                </section>
            </section>
            <Newsletter />
        </div>
    );
};

export default Home;