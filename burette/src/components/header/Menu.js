import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { NavLink } from 'react-router-dom';
import './Menu.scss';

// list of items
const list = [
  { name: 'INTERVIEW', link: '/', exact: true },
  { name: 'SERIES JOURNAL', link: '/', exact: true },
  { name: 'BRAND MEET UP', link: '/', exact: false },
  { name: 'C, QUESTION', link: '/', exact: false },
  { name: 'G, OVERSEA', link: '/', exact: true },
  { name: 'COLUMN', link: '/', exact: true },
  { name: 'INFO DESK', link: '/', exact: false },
  { name: 'AFTER DESK', link: '/', exact: false },
  { name: 'WE.', link: '/', exact: false }
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