import React from 'react';
import queryString from 'query-string';

const Contactus = ({location, match}) => {

    return (
        <section className={`Contactus`}>
            <section className={`Contactus-title`}>
                Contact us,
            </section>
            <section className={`Contactus-content`}>
                <form action="/post">
                    <div>
                        <label htmlFor="">이름</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label htmlFor="">연락처</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label htmlFor="">이메일</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label>상담내용</label>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <button type="submit">제출</button>
                </form>
            </section>
            <section className={`Contactus-footer`}>
                <div>
                    CALL NUMBER. 070-7677-0928
                </div>
                <div>
                    CALL TIME. 09:30~18:00
                </div>
            </section>
        </section>
    );
};

export default Contactus;