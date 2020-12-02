import React from 'react';
import Cover from './cover';
import Details from './details'

import './style/main.css';

const Main = () => {
    return(
        <div className="main">
            <Cover />
            <Details />
        </div>
    )
}

export default Main;