import React from 'react';
import './Quote.scss';

const Quote = () => {
    const activeStyle = {
        color: 'green',
        fontSize: '2rem'
    };

    return (
        <div className={`quote`}>
            <q>
                WHAT IS YOUR EXPERIMENTAL SPIRIT?
            </q>
        </div>
    );
};

export default Quote;