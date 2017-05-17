import React, {PropTypes} from 'react';
import {Link} from 'react-router';


const MostPopularBookListRow = ({book}) => {
    return (
        <div className="col-md-5 col-lg-5">
            <Link to="/about">
                <div className="item-homepage">
                    <div className="row">
                        <div className="col-md-4 col-lg-4">
                            <img src={'http://ecsmedia.pl/c/wiedzmin-tom-1-ostatnie-zyczenie-b-iext41816720.jpg'}
                                 alt="boohoo" className="img-homepage"/>
                        </div>
                        <div className="col-md-8 col-lg-8 item-description">
                            <h4>{book.name}</h4>
                            <br/>
                            <h5>Autor: Andrzej Sapkowski</h5>
                            <br/>
                            <h5>Wydawnictwo: UWM</h5>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

MostPopularBookListRow.propTypes = {
    book: PropTypes.object.isRequired
};

export default MostPopularBookListRow;
