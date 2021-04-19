import React from 'react';
import queryString from 'query-string';
import './Contactus.scss';

const Contactus = ({location, match}) => {

    return (
        <section className={`contactus`}>
            <section className={`contactus-title`}>
                Contact us,
            </section>
            <form className={`contactus-content`} action="/post">
                <div className={`contactus-content-element`}>
                    <label className={`contactus-content-element-label`} htmlFor="">이름</label>
                    <input className={`contactus-content-element-inp`} type="text"/>
                </div>
                <div className={`contactus-content-element`}>
                    <label className={`contactus-content-element-label`} htmlFor="">연락처</label>
                    <input className={`contactus-content-element-inp`} type="text"/>
                </div>
                <div className={`contactus-content-element`}>
                    <label className={`contactus-content-element-label`} htmlFor="">이메일</label>
                    <input className={`contactus-content-element-inp`} type="text"/>
                </div>
                <div className={`contactus-content-element`}>
                    <label className={`contactus-content-element-label-txtarea`}>상담내용</label>
                    <textarea className={`contactus-content-element-txtarea`} name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div className={`contactus-content-element form-element-submit`}>
                    <button className={`contactus-content-element-submit-btn cursor-pointer`} type="submit">보내기</button>
                </div>
            </form>
            <section className={`contactus-footer`}>
                <div className={`contactus-footer-element`}>
                    <div className={`contactus-footer-element-title`}>
                        <span>CALL NUMBER.</span>
                    </div>
                    <div className={`contactus-footer-element-content`}>
                        <span>070-7677-0928</span>
                    </div>
                </div>
                <div className={`contactus-footer-element`}>
                    <div className={`contactus-footer-element-title`}>
                        <span>CALL TIME.</span>
                    </div>
                    <div className={`contactus-footer-element-content`}>
                        <span>09:30~18:00</span>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Contactus;