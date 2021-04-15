import React from 'react';
import queryString from 'query-string';

const Conference = ({location, match}) => {

    return (
        <section className={`conference`}>
            <section className={`conference-preview`}>
                <section className={`conference-preview-prev`}>
                    모바일 컨텐츠에 대한 담론
                </section>
                <section className={`conference-preview-next`}>
                    모바일 스토리텔링 전략
                </section>
            </section>
            <section className={`conference-content`}>
                <section>
                    <div>
                        컨텐츠에 대한 시선
                    </div>
                    <div>
                        당신은 휴대폰으로 어떤 컨텐츠를 소비하나요?
                    </div>
                </section>
                <section>
                    <div>
                        프로필
                    </div>
                    <div>
                        닉네임
                    </div>
                </section>
                <section className={`conference-content-grid`}>
                    <section className={`conference-content-answer`}>
                        <div>
                            Answer Title
                        </div>
                        <div>
                            출퇴근 시간 짧은 15초 이내 쿠키 영상 클립을 보는 걸 좋아해요.
                            유튜브도 좋지만 더 빨리, 더 많이 볼 수 있는 인스타그램을 좀 더 좋아해요.
                        </div>
                    </section>
                </section>
            </section>
        </section>
    );
};

export default Conference;