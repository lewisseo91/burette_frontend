import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { NavLink } from 'react-router-dom';
import './Menu.scss';

// list of items
const list = [
  { name: 'Home', link: '/', exact: true },
  { name: 'About', link: '/about', exact: true },
  { name: 'About Foo', link: '/about/foo', exact: false },
  { name: 'Posts', link: '/posts', exact: false },
  { name: 'Home2', link: '/', exact: true },
  { name: 'About2', link: '/about', exact: true },
  { name: 'About Foo2', link: '/about/foo', exact: false },
  { name: 'Posts2', link: '/posts', exact: false },
  { name: 'Home3', link: '/', exact: true },
  { name: 'About3', link: '/about', exact: true },
  { name: 'About Foo3', link: '/about/foo', exact: false },
  { name: 'Posts3', link: '/posts', exact: false },
  { name: 'Home4', link: '/', exact: true },
  { name: 'About4', link: '/about', exact: true },
  { name: 'About Foo4', link: '/about/foo', exact: false },
  { name: 'Posts4', link: '/posts', exact: false },
];

const MenuItem = ({text, link, exact, selected}) => {
  return (
        <NavLink { ...exact ? 'exact' : ''} to={link}>
            <div className={`menu-item ${selected ? 'active' : ''}`}>
                        {text}
            </div>
        </NavLink>
  );
};

const MenuItems = (list, selected) =>
  list.map(el => {
    const {name, link, exact} = el;
    return <MenuItem text={name} key={name} link={link} exact={exact} selected={selected} />;
});

const selected = 'Home';

const Arrow = ({ text, className }) => {
  return (
    <div className={className}>
        {text}
    </div>
  );
};

const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

class Menu extends Component {

    constructor(props) {
        super(props);
        // call it again if items count changes
        this.menuItems = MenuItems(list, selected);
    }

    state = {
        selected
    };
    
    onSelect = key => {
        this.setState({ selected: key });
    }
    
    render() {
        const { selected } = this.state;
        const menu = this.menuItems;
        return (
            <div className={`menu`}>
                <ScrollMenu
                data={menu}
                arrowLeft={ArrowLeft}
                arrowRight={ArrowRight}
                selected={selected}
                onSelect={this.onSelect}
                />
            </div>
        );
    }
};

export default Menu;