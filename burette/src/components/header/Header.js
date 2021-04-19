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
            <div className={`header-top-menu-left header-items`}>
                <div className={`header-item cursor-pointer`}>
                    <a href="/newsletter">
                        <span className={`header-item-icon`}><FontAwesomeIcon icon={faNewspaper} /></span>
                        <span className={`header-item-txt`}>Newsletter</span>
                    </a>
                </div>
                <div className={`header-item cursor-pointer`}>
                    <a href="/contact">
                        <span className={`header-item-icon`}><FontAwesomeIcon icon={faCommentDots} /></span>
                        <span className={`header-item-txt`}>Contact us,</span>
                    </a>
                </div>
            </div>
            <div className={`header-logo header-items`}>
                <div className={`header-item cursor-pointer`}>
                    <a href="/">
                        <span className={`header-logo-content`}>BURETTE</span>
                    </a>
                </div>
            </div>
            <div className={`header-search header-items`}>
                <div className={`header-search-bar`}>
                    <FontAwesomeIcon className={`header-search-bar-icon`} icon={faSearch} />
                    <input className={`header-search-bar-inp`} type="text" placeholder={`검색어를 입력 해 주세요.`}/>
                </div>
            </div>
            <div className={`header-top-menu-right header-items`}>
                <div className={`header-item cursor-pointer`}>
                    <a href="/profile">
                        <span className={`header-item-icon`}><FontAwesomeIcon icon={faUser} /></span>
                        <span className={`header-item-txt`}>My page</span>
                    </a>
                </div>
                <div className={`header-item cursor-pointer`}>
                    <a href="/login">
                        <span className={`header-item-icon`}><FontAwesomeIcon icon={faDoorOpen} /></span>
                        <span className={`header-item-txt`}>Login</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;