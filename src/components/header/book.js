import React from 'react';
import './book.css';

const Book = ({imgSrc, name}) => {
    return (
        <React.Fragment>
            <img src={imgSrc} />
            <a href="#top">{name}</a>
        </React.Fragment>
    )
}

export default Book;