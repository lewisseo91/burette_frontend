import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import HeaderCategory from '../components/HeaderCategory';
import Menu from '../components/Menu';
import Quote from '../components/Quote';
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