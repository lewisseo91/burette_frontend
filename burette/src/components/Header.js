import React from 'react';
import './Header.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCommentDots, faDoorOpen, faNewspaper, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const activeStyle = {
        color: 'green',
        fontSize: '2rem'
    };

    return (
        <div className={`header`}>
            <div className={`header-top-menu-left header-item`}>
                <div>
                    <FontAwesomeIcon icon={faNewspaper} />Newsletter
                </div>
                <div>
                    <FontAwesomeIcon icon={faCommentDots} />Contact us,
                </div>
            </div>
            <div className={`header-logo header-item`}>
                <div>
                    <a href="/">
                        <h1>BURETTE</h1>
                    </a>
                </div>
            </div>
            <div className={`header-search header-item`}>
                <div className={`header-search-bar`}>
                    <FontAwesomeIcon className={`header-search-bar-icon`} icon={faSearch} />
                    <input className={`header-search-bar-inp`} type="text" placeholder={`검색어를 입력 해 주세요.`}/>
                </div>
            </div>
            <div className={`header-top-menu-right header-item`}>
                <div>
                    <FontAwesomeIcon icon={faUser} />My page
                </div>
                <div>
                    <FontAwesomeIcon icon={faDoorOpen} />login
                </div>
            </div>
        </div>
    );
};

export default Header;