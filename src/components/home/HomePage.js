import React, {PropTypes} from 'react';

const HomePage = (props) => {
    return (
        <div className="container">
            <div id="homepage">
                <h4>Najczęściej kupowane książki</h4>
                <hr />
                <div className="col-md-4 col-lg-4">
                    <div className="item-homepage">
                        <div className="row">
                            <div className="col-md-5 col-lg-5">
                                <img src={'http://ecsmedia.pl/c/wiedzmin-tom-1-ostatnie-zyczenie-b-iext41816720.jpg'}
                                     alt="boohoo" className="img-homepage"/>
                            </div>
                            <div className="col-md-5 col-lg-5">
                                <h5>Wiedźmin</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};


export default HomePage;
