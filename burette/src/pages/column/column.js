import React from 'react';
import queryString from 'query-string';
import parse from 'html-react-parser';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './column.scss';
import useAsync from "../../components/common/useAsync";
import axios from 'axios';


async function getArticleById(id) {
    const response = await axios.get("http://localhost:8090/article/get/" + id);
    return response.data;
}

const Column = ({location, match}) => {
    const id = match.params.columnId;
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
        <section className={`column`}>
            <section className={`column-title`}>
                <span className={`column-title-txt`}>{article.title}</span>
            </section>
            <section className={`column-content-thumbnail`}>
                <div className={`column-content-thumbnail-img`}>
                    {/* 동영상 링크로 대체될 자리 같음 */}
                    <img className={`res-img`} src={ article.thumbnail || "/images/ex3.jpg"} alt="ex3"/>
                </div>
            </section>
            <section className={`column-content-content`}>
                <div className={`column-content-content`}>
                    {parse(article.contents)}
                </div>
            </section>
            <section className={`column-comments`}>
                <div className={`column-comments-title`}>
                    <span className={`column-comments-title-txt font-burette`}>Reader COMMENT</span>
                </div>
                <ul className={`column-comments-list`}>
                    <li className={`column-comment-info`}>
                        <div className={`column-comment-info-profile`}>
                            <span className={`column-comment-info-icon`}>
                                <FontAwesomeIcon icon={faUser} />
                            </span>
                            <span className={`column-comment-info-nickname`}>
                                닉네임
                            </span>
                        </div>
                        <div className={`column-comment-info-content`}>
                            <span className={`column-comment-info-content-txt`}>
                                의견댓글
                            </span>
                        </div>
                    </li>
                    <li className={`column-comment-info`}>
                        <div className={`column-comment-info-profile`}>
                            <span className={`column-comment-info-icon`}>
                                <FontAwesomeIcon icon={faUser} />
                            </span>
                            <span className={`column-comment-info-nickname`}>
                                닉네임
                            </span>
                        </div>
                        <div className={`column-comment-info-content`}>
                            <span className={`column-comment-info-content-txt`}>
                                의견댓글
                            </span>
                        </div>
                    </li>
                </ul>
            </section>
            <section className={`column-preview`}>
                <div className={`column-preview-title`}>
                    <span className={`column-preview-title-txt font-burette`}>column LIST</span>
                </div>
                <ul className={`column-previews-list`}>
                    <li className={`column-preview-info`}>
                        <span className={`column-preview-txt`}>이달의 인터뷰 컨텐츠 목록1</span>
                    </li>
                    <li className={`column-preview-info`}>
                        <span className={`column-preview-txt`}>이달의 인터뷰 컨텐츠 목록1</span>
                    </li>
                </ul>
            </section>
        </section>
    );
};

export default Column;