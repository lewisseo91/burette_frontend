import React from 'react';
import queryString from 'query-string';
import parse from 'html-react-parser';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './seriesjournal.scss';
import useAsync from "../../components/common/useAsync";
import axios from 'axios';


async function getArticleById(id) {
    const response = await axios.get("http://localhost:8090/article/get/" + id);
    return response.data;
}

const SeriesJournal = ({location, match}) => {
    const id = match.params.seriesjournalId;
    console.log(id);

    const [state, refetch] = useAsync(() => getArticleById(id), [id]);

    const {loading, data: article, error} = state;

    // if(loading) return (
    //     <div>로딩 중</div>
    //  );

    if (error) {
        return (
            <div>에러가 발생했습니다.</div>
        );
    }

    if(!article) return null;

    console.log(article);
     


    return (
        <section className={`seriesjournal`}>
            <section className={`seriesjournal-preview`}>
                <section className={`seriesjournal-preview-prev`}>
                    <div className={`seriesjournal-preview-prev-thumbnail`}>
                        <img className={`res-img`} src={"/images/ex3.jpg"} alt="ex3"/>
                    </div>
                    <div className={`seriesjournal-preview-prev-title`}>
                        <span className={`seriesjournal-preview-prev-title-txt`}>모바일 컨텐츠에 대한 담론,</span>
                    </div>
                </section>
                <section className={`seriesjournal-preview-next`}>
                    <div className={`seriesjournal-preview-next-thumbnail`}>
                        <img className={`res-img`} src={"/images/ex2.jpg"} alt="ex2"/>
                    </div>
                    <div className={`seriesjournal-preview-next-title`}>
                        <span className={`seriesjournal-preview-next-title-txt`}>모바일 스토리텔링 전략</span>
                    </div>
                </section>
            </section>
            <section className={`seriesjournal-content`}>
                <section className={`seriesjournal-content-header`}>
                    <div className={`seriesjournal-content-title`}>
                        <span className={`seriesjournal-content-title-txt`}>{article.title}</span>
                    </div>
                    <div className={`seriesjournal-content-subtitle`}>
                        <span className={`seriesjournal-content-subtitle-txt`}>{article.subTitle}</span>
                    </div>
                </section>
                <section className={`seriesjournal-content-body`}>
                    {parse(article.contents)}
                </section>
                <section className={`seriesjournal-content-body-grid`}>
                </section>
            </section>            
            <section className={`seriesjournal-comments`}>
                <div className={`seriesjournal-comments-title`}>
                    <span className={`seriesjournal-comments-title-txt font-burette`}>Reader COMMENT</span>
                </div>
                <ul className={`seriesjournal-comments-list`}>
                    <li className={`seriesjournal-comment-info`}>
                        <div className={`seriesjournal-comment-info-profile`}>
                            <span className={`seriesjournal-comment-info-icon`}>
                                <FontAwesomeIcon icon={faUser} />
                            </span>
                            <span className={`seriesjournal-comment-info-nickname`}>
                                닉네임
                            </span>
                        </div>
                        <div className={`seriesjournal-comment-info-content`}>
                            <span className={`seriesjournal-comment-info-content-txt`}>
                                의견댓글
                            </span>
                        </div>
                    </li>
                    <li className={`seriesjournal-comment-info`}>
                        <div className={`seriesjournal-comment-info-profile`}>
                            <span className={`seriesjournal-comment-info-icon`}>
                                <FontAwesomeIcon icon={faUser} />
                            </span>
                            <span className={`seriesjournal-comment-info-nickname`}>
                                닉네임
                            </span>
                        </div>
                        <div className={`seriesjournal-comment-info-content`}>
                            <span className={`seriesjournal-comment-info-content-txt`}>
                                의견댓글
                            </span>
                        </div>
                    </li>
                </ul>
            </section>
        </section>
    );
};

export default SeriesJournal;