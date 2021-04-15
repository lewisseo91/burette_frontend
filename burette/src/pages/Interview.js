import React from 'react';
import queryString from 'query-string';

const Interview = ({location, match}) => {

    return (
        <section className={`interview`}>
            <section></section>
            <section>
                <h2>Interview</h2>
            </section>
            <section>
                <div>
                    [ *메인 썸네일 이미지* ]
                </div>
            </section>
            <section>
                Reader COMMENT
                <div>
                    닉네임 의견댓글
                </div>
                <div>
                    닉네임 의견댓글
                </div>
            </section>
            <section>
                Interview LIST
                <div>
                    이달의 인터뷰 컨텐츠 목록
                </div>
                <div>
                    이달의 인터뷰 컨텐츠 목록
                </div>
            </section>
        </section>
    );
};

export default Interview;