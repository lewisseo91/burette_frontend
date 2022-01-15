import React from 'react';
import queryString from 'query-string';
import parse from 'html-react-parser';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Interview.scss';
import useAsync from "../../components/common/useAsync";
import axios from 'axios';


async function getArticleById(id) {
    const response = await axios.get("http://localhost:8090/article/get/" + id);
    return response.data;
}

const Interview = ({location, match}) => {
    const id = match.params.interviewId;
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
        <section className={`interview`}>
            <section className={`interview-title`}>
                <span className={`interview-title-txt`}>{article.title}</span>
            </section>
            <section className={`interview-content-thumbnail`}>
                <div className={`interview-content-thumbnail-img`}>
                    {/* 동영상 링크로 대체될 자리 같음 */}
                    <img className={`res-img`} src={ article.thumbnail || "/images/ex3.jpg"} alt="ex3"/>
                </div>
            </section>
            <section className={`interview-content-content`}>
                <div className={`interview-content-content`}>
                    {parse(article.contents)}
                </div>
            </section>
            <section className={`interview-comments`}>
                <div className={`interview-comments-title`}>
                    <span className={`interview-comments-title-txt font-burette`}>Reader COMMENT</span>
                </div>
                <ul className={`interview-comments-list`}>
                    <li className={`interview-comment-info`}>
                        <div className={`interview-comment-info-profile`}>
                            <span className={`interview-comment-info-icon`}>
                                <FontAwesomeIcon icon={faUser} />
                            </span>
                            <span className={`interview-comment-info-nickname`}>
                                닉네임
                            </span>
                        </div>
                        <div className={`interview-comment-info-content`}>
                            <span className={`interview-comment-info-content-txt`}>
                                의견댓글
                            </span>
                        </div>
                    </li>
                    <li className={`interview-comment-info`}>
                        <div className={`interview-comment-info-profile`}>
                            <span className={`interview-comment-info-icon`}>
                                <FontAwesomeIcon icon={faUser} />
                            </span>
                            <span className={`interview-comment-info-nickname`}>
                                닉네임
                            </span>
                        </div>
                        <div className={`interview-comment-info-content`}>
                            <span className={`interview-comment-info-content-txt`}>
                                의견댓글
                            </span>
                        </div>
                    </li>
                </ul>
            </section>
            <section className={`interview-preview`}>
                <div className={`interview-preview-title`}>
                    <span className={`interview-preview-title-txt font-burette`}>Interview LIST</span>
                </div>
                <ul className={`interview-previews-list`}>
                    <li className={`interview-preview-info`}>
                        <span className={`interview-preview-txt`}>이달의 인터뷰 컨텐츠 목록1</span>
                    </li>
                    <li className={`interview-preview-info`}>
                        <span className={`interview-preview-txt`}>이달의 인터뷰 컨텐츠 목록1</span>
                    </li>
                </ul>
            </section>
        </section>
    );
};

export default Interview;