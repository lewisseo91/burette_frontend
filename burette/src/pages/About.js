import React from 'react';
import queryString from 'query-string';

const About = ({location, match}) => {
    const query = queryString.parse(location.search);
    console.log(query);

    return (
        <section className={`about`}>
            <section>
                <h2>BURETTE [이미지 필요]</h2>
            </section>
            <section>
                <div>We see.</div>
                <div>With the burette.</div>
            </section>
            <section>
                <div>
                    우리가 존재하는 이유는,
                </div>
                <div>
                    안녕하세요. 뷰렛(BURETTE)입니다.
                    BURETTE은 방울로 떨어트린 액체의 양을 측정하는 실험 기구, 즉 '실험용 유리관' 입니다.
                    우리는 음악, 그림, 영상, 책에 이르기까지
                    세상에 없던 실험정신을 가진 살마들의 다양한 목소리를 정밀하게 담습니다.
                </div>
            </section>
            <section>
                <div>
                    우리가 남기고자 하는 것은,
                </div>
                <div>
                    창조의 공식은 도전에 있고, 도전의 정의는 실험에 있습니다.
                    당신이 가진 실험정신은 무엇입니까?
                    뷰렛은 실험정신을 가진 
                    인생을 바꾼 명료한 한 점에 대한 기록입니다.
                </div>
            </section>
            <section>
                We find a beautiful future
            </section>
        </section>
    );
};

export default About;