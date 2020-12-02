import React from 'react';
import coverImg from '../../coverImg.png';

const Cover = () => {
    return(
        <span className="cover">
            <div className="offer orange-grad">25% Off</div>
            <img src={coverImg} alt="" />
        </span>
    )
}

export default Cover;