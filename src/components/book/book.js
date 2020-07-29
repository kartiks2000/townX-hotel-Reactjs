import React from 'react';

import '../book/book.css';

const Book = () => {

    return(
        <div className="book">
            <h1 className="bkhead">Plan your trip with us...</h1>
            <form className="Book-form">
                <input className="inp" placeholder="Your name please.." />
            </form>
            <h1>Not yet completed...</h1>
        </div>
    );
}

export default Book;