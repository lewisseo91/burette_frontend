import "./Home.scss";
import { ColumnGrid, InfodeskGrid, AfterLetterGrid, Newsletter, InterviewGrid, SeriesJournalGrid, BrandMeetUpGrid, CQuestionGrid, GOverseaGrid } from "./grid";
import useAsync from "../../components/common/useAsync";
import axios from 'axios';

async function getArticles() {
    const response = await axios.get("http://localhost:8090/article/latest_articles_by_category");
    console.log(response);
    return response.data;
}

const Home = () => {
    const [state, refetch] = useAsync(getArticles, []);

    const {loading, data: articles, error} = state;

    // if(loading) return (
    //     <div>로딩 중</div>
    //  );

    if (error) {
        return (
            <div>에러가 발생했습니다.</div>
        );
    }

    if(!articles || articles.length === 0) return null;

    console.log(articles);
     
    return (
        <div className={`home`}>
            <section className={`home-grid-total`}>
                <section className={`left-container home-section`}>
                    {/* 인터뷰 */}
                    <InterviewGrid initData={articles[0]} />
                    {/* 시리즈 저널 */}
                    <SeriesJournalGrid initData={articles[1]}/>
                </section>
                <section className={`mid-container home-section`}>
                    {/* 브랜드 밋업 */}
                    <BrandMeetUpGrid initData={articles[2]} />
                    {/* C Question */}
                    <CQuestionGrid initData={articles[3]} />
                    {/* G Oversea */}
                    <GOverseaGrid initData={articles[4]} />
                </section>
                <section className={`right-container home-section`}>
                    {/* Column */}
                    <ColumnGrid initData={articles[5]} />
                    {/* Info Desk */}
                    <InfodeskGrid initData={articles[6]} />
                    {/* After Letter */}
                    <AfterLetterGrid initData={articles[7]} />
                </section>
            </section>
            <Newsletter />
        </div>
    );
};

export default Home;