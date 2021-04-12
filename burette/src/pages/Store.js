import React from 'react';
import queryString from 'query-string';

const Store = ({location, match}) => {

    return (
        <section className={`store-detail`}>
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
        </section>
    );
};

export default Store;