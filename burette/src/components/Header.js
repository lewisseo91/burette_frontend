import React from 'react';
import './Header.scss';

const Header = () => {
    const activeStyle = {
        color: 'green',
        fontSize: '2rem'
    };

    return (
        <div className={`header`}>
            <div className={`header-top-menu-left header-item`}>
                <span>My page</span>
                <span>login</span>
            </div>
            <div className={`header-logo header-item`}>
                <h1>로고</h1>
            </div>
            <div className={`header-search header-item`}>
                검색 부분
            </div>
            <div className={`header-top-menu-right header-item`}>
                <span>Newsletter</span>
                <span>Contact us,</span>
            </div>
        </div>
    );
};

export default Header;