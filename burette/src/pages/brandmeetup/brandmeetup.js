import React from 'react';
import queryString from 'query-string';
import parse from 'html-react-parser';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './brandmeetup.scss';
import useAsync from "../../components/common/useAsync";
import axios from 'axios';


async function getArticleById(id) {
    const response = await axios.get("http://localhost:8090/article/get/" + id);
    return response.data;
}

const BrandMeetUp = ({location, match}) => {
    const id = match.params.brandmeetupId;
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
        <section className={`brandmeetup`}>
            <section className={`brandmeetup-preview`}>
                <section className={`brandmeetup-preview-prev`}>
                    <div className={`brandmeetup-preview-prev-thumbnail`}>
                        <img className={`res-img`} src={"/images/ex3.jpg"} alt="ex3"/>
                    </div>
                    <div className={`brandmeetup-preview-prev-title`}>
                        <span className={`brandmeetup-preview-prev-title-txt`}>모바일 컨텐츠에 대한 담론,</span>
                    </div>
                </section>
                <section className={`brandmeetup-preview-next`}>
                    <div className={`brandmeetup-preview-next-thumbnail`}>
                        <img className={`res-img`} src={"/images/ex2.jpg"} alt="ex2"/>
                    </div>
                    <div className={`brandmeetup-preview-next-title`}>
                        <span className={`brandmeetup-preview-next-title-txt`}>모바일 스토리텔링 전략</span>
                    </div>
                </section>
            </section>
            <section className={`brandmeetup-content`}>
                <section className={`brandmeetup-content-header`}>
                    <div className={`brandmeetup-content-title`}>
                        <span className={`brandmeetup-content-title-txt`}>{article.title}</span>
                    </div>
                    <div className={`brandmeetup-content-subtitle`}>
                        <span className={`brandmeetup-content-subtitle-txt`}>{article.subTitle}</span>
                    </div>
                </section>
                <section className={`brandmeetup-content-body`}>
                    {parse(article.contents)}
                </section>
                <section className={`brandmeetup-content-body-grid`}>
                </section>
            </section>            
            <section className={`brandmeetup-comments`}>
                <div className={`brandmeetup-comments-title`}>
                    <span className={`brandmeetup-comments-title-txt font-burette`}>Reader COMMENT</span>
                </div>
                <ul className={`brandmeetup-comments-list`}>
                    <li className={`brandmeetup-comment-info`}>
                        <div className={`brandmeetup-comment-info-profile`}>
                            <span className={`brandmeetup-comment-info-icon`}>
                                <FontAwesomeIcon icon={faUser} />
                            </span>
                            <span className={`brandmeetup-comment-info-nickname`}>
                                닉네임
                            </span>
                        </div>
                        <div className={`brandmeetup-comment-info-content`}>
                            <span className={`brandmeetup-comment-info-content-txt`}>
                                의견댓글
                            </span>
                        </div>
                    </li>
                    <li className={`brandmeetup-comment-info`}>
                        <div className={`brandmeetup-comment-info-profile`}>
                            <span className={`brandmeetup-comment-info-icon`}>
                                <FontAwesomeIcon icon={faUser} />
                            </span>
                            <span className={`brandmeetup-comment-info-nickname`}>
                                닉네임
                            </span>
                        </div>
                        <div className={`brandmeetup-comment-info-content`}>
                            <span className={`brandmeetup-comment-info-content-txt`}>
                                의견댓글
                            </span>
                        </div>
                    </li>
                </ul>
            </section>
        </section>
    );
};

export default BrandMeetUp;