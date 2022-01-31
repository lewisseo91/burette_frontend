import React from 'react';
import queryString from 'query-string';
import parse from 'html-react-parser';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './goversea.scss';
import useAsync from "../../components/common/useAsync";
import axios from 'axios';


async function getArticleById(id) {
    const response = await axios.get("http://localhost:8090/article/get/" + id);
    return response.data;
}

const GOversea = ({location, match}) => {
    const id = match.params.goverseaId;

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
        <section className={`goversea`}>
            <section className={`goversea-title`}>
                <span className={`goversea-title-txt`}>{article.title}</span>
            </section>
            <section className={`goversea-content-thumbnail`}>
                <div className={`goversea-content-thumbnail-img`}>
                    {/* 동영상 링크로 대체될 자리 같음 */}
                    <img className={`res-img`} src={ article.thumbnail || "/images/ex3.jpg"} alt="ex3"/>
                </div>
            </section>
            <section className={`goversea-content-content`}>
                <div className={`goversea-content-content`}>
                    {parse(article.contents)}
                </div>
            </section>
            <section className={`goversea-comments`}>
                <div className={`goversea-comments-title`}>
                    <span className={`goversea-comments-title-txt font-burette`}>Reader COMMENT</span>
                </div>
                <ul className={`goversea-comments-list`}>
                    <li className={`goversea-comment-info`}>
                        <div className={`goversea-comment-info-profile`}>
                            <span className={`goversea-comment-info-icon`}>
                                <FontAwesomeIcon icon={faUser} />
                            </span>
                            <span className={`goversea-comment-info-nickname`}>
                                닉네임
                            </span>
                        </div>
                        <div className={`goversea-comment-info-content`}>
                            <span className={`goversea-comment-info-content-txt`}>
                                의견댓글
                            </span>
                        </div>
                    </li>
                    <li className={`goversea-comment-info`}>
                        <div className={`goversea-comment-info-profile`}>
                            <span className={`goversea-comment-info-icon`}>
                                <FontAwesomeIcon icon={faUser} />
                            </span>
                            <span className={`goversea-comment-info-nickname`}>
                                닉네임
                            </span>
                        </div>
                        <div className={`goversea-comment-info-content`}>
                            <span className={`goversea-comment-info-content-txt`}>
                                의견댓글
                            </span>
                        </div>
                    </li>
                </ul>
            </section>
            <section className={`goversea-preview`}>
                <div className={`goversea-preview-title`}>
                    <span className={`goversea-preview-title-txt font-burette`}>goversea LIST</span>
                </div>
                <ul className={`goversea-previews-list`}>
                    <li className={`goversea-preview-info`}>
                        <span className={`goversea-preview-txt`}>이달의 인터뷰 컨텐츠 목록1</span>
                    </li>
                    <li className={`goversea-preview-info`}>
                        <span className={`goversea-preview-txt`}>이달의 인터뷰 컨텐츠 목록1</span>
                    </li>
                </ul>
            </section>
        </section>
    );
};

export default GOversea;