import React from 'react';
import './Header.scss';

const Header = () => {
    const activeStyle = {
        color: 'green',
        fontSize: '2rem'
    };

    return (
        <div className={`header`}>
            <div className={`header-logo`}>
                <h1>로고</h1>
            </div>
            <div className={`header-search`}>
                검색 부분
            </div>
            <div className={`header-top-menu`}>
                <span>My page</span>
                <span>login</span>
                <span>Newsletter</span>
                <span>Contact us,</span>
            </div>
        </div>
    );
};

export default Header;