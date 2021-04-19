import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/header/Header';
import HeaderCategory from '../components/header/HeaderCategory';
import Menu from '../components/header/Menu';
import Quote from '../components/header/Quote';
import App from '../shared/App';

const Root = () => (
    <BrowserRouter>
        <Header></Header>
        <HeaderCategory></HeaderCategory>
        <Menu></Menu>
        <Quote></Quote>
        <App/>
    </BrowserRouter>
);

export default Root;