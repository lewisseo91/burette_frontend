import React from 'react';
import queryString from 'query-string';
import './Conference.scss';

const Conference = ({location, match}) => {

    return (
        <section className={`conference`}>
            <section className={`conference-preview`}>
                <section className={`conference-preview-prev`}>
                    <div className={`conference-preview-prev-thumbnail`}>
                        <img className={`res-img`} src="./images/ex3.jpg" alt="ex3"/>
                    </div>
                    <div className={`conference-preview-prev-title`}>
                        <span className={`conference-preview-prev-title-txt`}>모바일 컨텐츠에 대한 담론,</span>
                    </div>
                </section>
                <section className={`conference-preview-next`}>
                    <div className={`conference-preview-next-thumbnail`}>
                        <img className={`res-img`} src="./images/ex2.jpg" alt="ex2"/>
                    </div>
                    <div className={`conference-preview-next-title`}>
                        <span className={`conference-preview-next-title-txt`}>모바일 스토리텔링 전략</span>
                    </div>
                </section>
            </section>
            <section className={`conference-content`}>
                <section className={`conference-content-header`}>
                    <div className={`conference-content-title`}>
                        <span className={`conference-content-title-txt`}>컨텐츠에 대한 시선</span>
                    </div>
                    <div className={`conference-content-subtitle`}>
                        <span className={`conference-content-subtitle-txt`}>당신은 휴대폰으로 어떤 컨텐츠를 소비하나요?</span>
                    </div>
                </section>
                <section className={`conference-content-body`}>
                    <div className={`conference-content-body-profile-pic`}>
                        <img className={`res-img`} src="./images/ex_profile.png" alt="ex profile"/>
                    </div>
                    <div className={`conference-content-body-nickname`}>
                        <span className={`conference-content-body-nickname-txt`}>드라마작가 OOO님</span>
                    </div>
                </section>
                <section className={`conference-content-body-grid`}>
                    <ul className={`conference-content-body-grid-chats-list`}>
                        <li className={`conference-content-body-grid-chat-info-wrapper`}>
                            <div className={`conference-content-body-grid-chat-info`}>
                                <div className={`conference-content-body-grid-chat-info-title`}>
                                    <span className={`conference-content-body-grid-chat-info-title-txt`}>
                                        휴대폰으로 주로 보는 컨텐츠는?
                                    </span>
                                </div>
                                <div className={`conference-content-body-grid-chat-info-content`}>
                                    <span className={`conference-content-body-grid-chat-info-content-txt`}>
                                        출퇴근 시간 짧은 15초 이내 쿠키 영상 클립을 보는 걸 좋아해요.
                                        유튜브도 좋지만 더 빨리, 더 많이 볼 수 있는 인스타그램을 좀 더 좋아해요.
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li className={`conference-content-body-grid-chat-info-wrapper`}>
                            <div className={`conference-content-body-grid-chat-info`}>
                                <div className={`conference-content-body-grid-chat-info-title`}>
                                    <span className={`conference-content-body-grid-chat-info-title-txt`}>
                                        휴대폰으로 주로 보는 컨텐츠는?
                                    </span>
                                </div>
                                <div className={`conference-content-body-grid-chat-info-content`}>
                                    <span className={`conference-content-body-grid-chat-info-content-txt`}>
                                        출퇴근 시간 짧은 15초 이내 쿠키 영상 클립을 보는 걸 좋아해요.
                                        유튜브도 좋지만 더 빨리, 더 많이 볼 수 있는 인스타그램을 좀 더 좋아해요.
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li className={`conference-content-body-grid-chat-info-wrapper`}>
                            <div className={`conference-content-body-grid-chat-info`}>
                                <div className={`conference-content-body-grid-chat-info-title`}>
                                    <span className={`conference-content-body-grid-chat-info-title-txt`}>
                                        휴대폰으로 주로 보는 컨텐츠는?
                                    </span>
                                </div>
                                <div className={`conference-content-body-grid-chat-info-content`}>
                                    <span className={`conference-content-body-grid-chat-info-content-txt`}>
                                        출퇴근 시간 짧은 15초 이내 쿠키 영상 클립을 보는 걸 좋아해요.
                                        유튜브도 좋지만 더 빨리, 더 많이 볼 수 있는 인스타그램을 좀 더 좋아해요.
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li className={`conference-content-body-grid-chat-info-wrapper`}>
                            <div className={`conference-content-body-grid-chat-info`}>
                                <div className={`conference-content-body-grid-chat-info-title`}>
                                    <span className={`conference-content-body-grid-chat-info-title-txt`}>
                                        휴대폰으로 주로 보는 컨텐츠는?
                                    </span>
                                </div>
                                <div className={`conference-content-body-grid-chat-info-content`}>
                                    <span className={`conference-content-body-grid-chat-info-content-txt`}>
                                        출퇴근 시간 짧은 15초 이내 쿠키 영상 클립을 보는 걸 좋아해요.
                                        유튜브도 좋지만 더 빨리, 더 많이 볼 수 있는 인스타그램을 좀 더 좋아해요.
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li className={`conference-content-body-grid-chat-info-wrapper`}>
                            <div className={`conference-content-body-grid-chat-info`}>
                                <div className={`conference-content-body-grid-chat-info-title`}>
                                    <span className={`conference-content-body-grid-chat-info-title-txt`}>
                                        휴대폰으로 주로 보는 컨텐츠는?
                                    </span>
                                </div>
                                <div className={`conference-content-body-grid-chat-info-content`}>
                                    <span className={`conference-content-body-grid-chat-info-content-txt`}>
                                        출퇴근 시간 짧은 15초 이내 쿠키 영상 클립을 보는 걸 좋아해요.
                                        유튜브도 좋지만 더 빨리, 더 많이 볼 수 있는 인스타그램을 좀 더 좋아해요.
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li className={`conference-content-body-grid-chat-info-wrapper`}>
                            <div className={`conference-content-body-grid-chat-info`}>
                                <div className={`conference-content-body-grid-chat-info-title`}>
                                    <span className={`conference-content-body-grid-chat-info-title-txt`}>
                                        휴대폰으로 주로 보는 컨텐츠는?
                                    </span>
                                </div>
                                <div className={`conference-content-body-grid-chat-info-content`}>
                                    <span className={`conference-content-body-grid-chat-info-content-txt`}>
                                        출퇴근 시간 짧은 15초 이내 쿠키 영상 클립을 보는 걸 좋아해요.
                                        유튜브도 좋지만 더 빨리, 더 많이 볼 수 있는 인스타그램을 좀 더 좋아해요.
                                    </span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>
            </section>
        </section>
    );
};

export default Conference;