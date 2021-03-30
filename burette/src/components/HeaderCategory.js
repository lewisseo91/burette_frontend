import React from 'react';
import { NavLink } from 'react-router-dom';
import './HeaderCategory.scss';

// list of items
const list = [
  { name: 'Conference', link: '/', exact: true },
  { name: 'Valley', link: '/about', exact: true },
  { name: 'Store', link: '/about/foo', exact: false },
];

const CategoryMenu = () => {
    return list.map(({name, link, exact}) => {
        return (
            <div className={`category-item`}>
                <NavLink { ...exact ? 'exact' : ''} to={link}>
                    <div className={`menu-item`}>
                                {name}
                    </div>
                </NavLink>
            </div>
        );
    });
}

const HeaderCategory = () => {

    return (
        <div className={`category`}>
            <CategoryMenu></CategoryMenu>
        </div>
    );
};

export default HeaderCategory;