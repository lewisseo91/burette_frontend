import React from 'react';
import { NavLink } from 'react-router-dom';
import './HeaderCategory.scss';

// list of items
const list = [
  { name: 'Conference', link: '/conference', exact: true },
  { name: 'Valley', link: '/', exact: true },
  { name: 'Store', link: '/store', exact: false },
];

const CategoryMenu = () => {
    return list.map(({name, link, exact}, index) => 
            <div className={`category-item`} key={index} data-index={index}>
                <NavLink exact={exact} to={link}>
                    <div className={`menu-item`}>
                                {name}
                    </div>
                </NavLink>
            </div>
    );
}

const HeaderCategory = () => {

    return (
        <div className={`category`}>
            <CategoryMenu></CategoryMenu>
        </div>
    );
};

export default HeaderCategory;