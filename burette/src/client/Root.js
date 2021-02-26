import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Menu from '../components/Menu';
import App from '../shared/App';

const Root = () => (
    <BrowserRouter>
        <Menu></Menu>
        <App/>
    </BrowserRouter>
);

export default Root;