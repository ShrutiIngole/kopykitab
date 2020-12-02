import React from 'react';
import store from '../../redux/store';
import './style/book.css';

const RelBooks = ({index, check}) => {
    const book = store.getState().list[index]
    const handleClick = (e) => {
        console.log(book.status)
        store.dispatch({type: "CHECKBOX", index: index, checkData: !(book.selected)})
        console.log(book.status)
    }
    return(
        <span className="book" id={book.cssId}>
            <div>
                <input 
                    type="checkbox" 
                    checked={check} 
                    disabled={book.disabled} 
                    className="check-class" 
                    onClick={e=>{handleClick(e)}}
                />
            </div>
            <div><img className="cov" src={book.imgSrc} alt={book.name} /></div>
            <div className="book-info">
                <div className="book-name">{book.name}</div>
                <div className="book-pricing">
                    <span className="book-sp"> ₹{book.sp}</span>
                    <span className="book-mrp"> ₹{book.mrp}</span>
                </div>
                <div className="status">{book.status}</div>
            </div>
        </span>
    )
}
export default RelBooks;