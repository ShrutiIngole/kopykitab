import './book.css';

const Book = ({imgSrc, name}) => {
    return (
        <React.Fragment>
            <img src={imgSrc} />
            <a href="#">{name}</a>
        </React.Fragment>
    )
}

export default Book;