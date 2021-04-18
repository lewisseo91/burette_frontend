import React from 'react';
import queryString from 'query-string';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Store.scss';

const Store = ({location, match}) => {

    return (
        <section className={`store-detail`}>
            <section className={`store-detail-thumbnail`}>
                <div className={`store-detail-thumbnail-img`}>
                    <img className={`res-img`} src="/images/ex1.png" alt="ex1"/>
                </div>
                <div className={`store-detail-thumbnail-link`}>
                    <button className={`store-detail-thumbnail-link-btn cursor-pointer`}>
                        스토어 바로가기 {'>>>'}
                    </button>
                </div>
            </section>
            
            <section className={`store-detail-comments`}>
                <div className={`store-detail-comments-title`}>
                    <span className={`store-detail-comments-title-txt font-burette`}>Reader COMMENT</span>
                </div>
                <ul className={`store-detail-comments-list`}>
                    <li className={`store-detail-comment-info`}>
                        <div className={`store-detail-comment-info-profile`}>
                            <span className={`store-detail-comment-info-icon`}>
                                <FontAwesomeIcon icon={faUser} />
                            </span>
                            <span className={`store-detail-comment-info-nickname`}>
                                닉네임
                            </span>
                        </div>
                        <div className={`store-detail-comment-info-content`}>
                            <span className={`store-detail-comment-info-content-txt`}>
                                의견댓글
                            </span>
                        </div>
                    </li>
                    <li className={`store-detail-comment-info`}>
                        <div className={`store-detail-comment-info-profile`}>
                            <span className={`store-detail-comment-info-icon`}>
                                <FontAwesomeIcon icon={faUser} />
                            </span>
                            <span className={`store-detail-comment-info-nickname`}>
                                닉네임
                            </span>
                        </div>
                        <div className={`store-detail-comment-info-content`}>
                            <span className={`store-detail-comment-info-content-txt`}>
                                의견댓글
                            </span>
                        </div>
                    </li>
                </ul>
            </section>
        </section>
    );
};

export default Store;