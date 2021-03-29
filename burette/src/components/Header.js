import React from 'react';

const Header = () => {
    const activeStyle = {
        color: 'green',
        fontSize: '2rem'
    };

    return (
        <div>
            <div>
                <h1>로고</h1>
            </div>
            <div>
                검색 부분
            </div>
            <div>
                <span>My page</span>
                <span>login</span>
                <span>Newsletter</span>
                <span>Contact us,</span>
            </div>
            <hr/>
        </div>
    );
};

export default Header;