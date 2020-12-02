import React from 'react';
import Options from './options';
import Title from './title';
import Menu from './menu';

const Header = () => {
    return(
        <table>
            <Options />
            <Title />
            <Menu />
        </table>
    )
}

export default Header;