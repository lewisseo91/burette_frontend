import React from 'react';
import queryString from 'query-string';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Interview.scss';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Interview = ({location, match}) => {

    return (
        <section className={`interview`}>
            <section className={`interview-title`}>
                <span className={`interview-title-txt`}>Interview</span>
            </section>
            <section className={`interview-content-thumbnail`}>
                <div className={`interview-content-thumbnail-img`}>
                    {/* 동영상 링크로 대체될 자리 같음 */}
                    <img className={`res-img`} src="/images/ex3.jpg" alt="ex3"/>
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