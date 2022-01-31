import React from 'react';
import queryString from 'query-string';
import parse from 'html-react-parser';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './cquestion.scss';
import useAsync from "../../components/common/useAsync";
import axios from 'axios';


async function getArticleById(id) {
    const response = await axios.get("http://localhost:8090/article/get/" + id);
    return response.data;
}

const CQuestion = ({location, match}) => {
    console.log("여기나옴?");
    const id = match.params.cquestionId;
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
        <section className={`cquestion`}>
            <section className={`cquestion-title`}>
                <span className={`cquestion-title-txt`}>{article.title}</span>
            </section>
            <section className={`cquestion-content-thumbnail`}>
                <div className={`cquestion-content-thumbnail-img`}>
                    {/* 동영상 링크로 대체될 자리 같음 */}
                    <img className={`res-img`} src={ article.thumbnail || "/images/ex3.jpg"} alt="ex3"/>
                </div>
            </section>
            <section className={`cquestion-content-content`}>
                <div className={`cquestion-content-content`}>
                    {parse(article.contents)}
                </div>
            </section>
            <section className={`cquestion-comments`}>
                <div className={`cquestion-comments-title`}>
                    <span className={`cquestion-comments-title-txt font-burette`}>Reader COMMENT</span>
                </div>
                <ul className={`cquestion-comments-list`}>
                    <li className={`cquestion-comment-info`}>
                        <div className={`cquestion-comment-info-profile`}>
                            <span className={`cquestion-comment-info-icon`}>
                                <FontAwesomeIcon icon={faUser} />
                            </span>
                            <span className={`cquestion-comment-info-nickname`}>
                                닉네임
                            </span>
                        </div>
                        <div className={`cquestion-comment-info-content`}>
                            <span className={`cquestion-comment-info-content-txt`}>
                                의견댓글
                            </span>
                        </div>
                    </li>
                    <li className={`cquestion-comment-info`}>
                        <div className={`cquestion-comment-info-profile`}>
                            <span className={`cquestion-comment-info-icon`}>
                                <FontAwesomeIcon icon={faUser} />
                            </span>
                            <span className={`cquestion-comment-info-nickname`}>
                                닉네임
                            </span>
                        </div>
                        <div className={`cquestion-comment-info-content`}>
                            <span className={`cquestion-comment-info-content-txt`}>
                                의견댓글
                            </span>
                        </div>
                    </li>
                </ul>
            </section>
            <section className={`cquestion-preview`}>
                <div className={`cquestion-preview-title`}>
                    <span className={`cquestion-preview-title-txt font-burette`}>cquestion LIST</span>
                </div>
                <ul className={`cquestion-previews-list`}>
                    <li className={`cquestion-preview-info`}>
                        <span className={`cquestion-preview-txt`}>이달의 인터뷰 컨텐츠 목록1</span>
                    </li>
                    <li className={`cquestion-preview-info`}>
                        <span className={`cquestion-preview-txt`}>이달의 인터뷰 컨텐츠 목록1</span>
                    </li>
                </ul>
            </section>
        </section>
    );
};

export default CQuestion;