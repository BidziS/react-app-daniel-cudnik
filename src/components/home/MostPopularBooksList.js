import React, {PropTypes} from 'react';
import MostPopularBookListRow from './MostPopularBooksListRow';

const MostPopularBookList = ({books}) => {
    return (
        <div className="container">
            <div id="homepage">
                <h4>Najczęściej kupowane książki</h4>
                <hr />
                {books.map(book =>
                    <MostPopularBookListRow key={book.id} book={book}/>
                )}

            </div>
        </div>
    );
};

MostPopularBookList.propTypes = {
    books: PropTypes.array.isRequired
};

export default MostPopularBookList;
