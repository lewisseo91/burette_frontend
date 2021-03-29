import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import Menu from '../components/Menu';
import App from '../shared/App';

const Root = () => (
    <BrowserRouter>
        <Header></Header>
        <Menu></Menu>
        <App/>
    </BrowserRouter>
);

export default Root;