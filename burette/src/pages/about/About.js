import React from 'react';
import queryString from 'query-string';
import './About.scss';

const About = ({location, match}) => {
    const query = queryString.parse(location.search);
    console.log(query);

    return (
        <section className={`about`}>
            <section className={`about-title`}>
                <span className={`about-title-txt font-burette`}>BURETTE</span>
            </section>
            <section className={`about-phrase`}>
                <div className={`about-phrase-txt`}>
                    <span>We see.</span>
                </div>
                <div className={`about-phrase-txt`}>
                    <span>With the burette.</span>
                </div>
            </section>
            <section className={`about-content`}>
                <div className={`about-content-title`}>
                    <span className={`about-content-title-txt`}>우리가 존재하는 이유는,</span>
                </div>
                <div className={`about-content-body`}>
                    <div className={`about-content-body-context`}>
                        <span className={`about-content-body-context-txt`}>안녕하세요. 뷰렛(BURETTE)입니다.</span>
                    </div>
                    <div className={`about-content-body-context`}>
                        <span className={`about-content-body-context-txt`}>BURETTE은 방울로 떨어트린 액체의 양을 측정하는 실험 기구, 즉 '실험용 유리관' 입니다.</span>
                    </div>
                    <div className={`about-content-body-context`}>
                        <span className={`about-content-body-context-txt`}>우리는 음악, 그림, 영상, 책에 이르기까지</span>
                    </div>
                    <div className={`about-content-body-context`}>
                        <span className={`about-content-body-context-txt`}>세상에 없던 실험정신을 가진 살마들의 다양한 목소리를 정밀하게 담습니다.</span>
                    </div>
                </div>
            </section>
            <section className={`about-content`}>
                <div className={`about-content-title`}>
                    <span className={`about-content-title-txt`}>우리가 남기고자 하는 것은,</span>
                </div>
                <div className={`about-content-body`}>
                    <div className={`about-content-body-context`}>
                        <span className={`about-content-body-context-txt`}>창조의 공식은 도전에 있고, 도전의 정의는 실험에 있습니다.</span>
                    </div>
                    <div className={`about-content-body-context`}>
                        <span className={`about-content-body-context-txt`}>당신이 가진 실험정신은 무엇입니까?</span>
                    </div>
                    <div className={`about-content-body-context`}>
                        <span className={`about-content-body-context-txt`}>뷰렛은 실험정신을 가진</span>
                    </div>
                    <div className={`about-content-body-context`}>
                        <span className={`about-content-body-context-txt`}>인생을 바꾼 명료한 한 점에 대한 기록입니다.</span>
                    </div>
                </div>
            </section>
            <section className={`about-phrase-end`}>
                <span className={`about-phrase-end-txt`}>We find a beautiful future.</span>
            </section>
        </section>
    );
};

export default About;