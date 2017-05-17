import React, {PropTypes} from 'react';
import MostPopularBookList from './MostPopularBooksList';


class HomePage extends React.Component{
    constructor(props, context) {
        super(props, context);
    }
    render(){
        const data = [
            {
                id: 1,
                name: "Wiedźmin. Ostatnie życzenie."
            },
            {
                id: 2,
                name: "dadad"
            },
            {
                id: 3,
                name: "dadad"
            },
            {
                id: 4,
                name: "dadad"
            }
        ];
        const second = "col-md-5 col-lg-5 col-xs-12";
        const first = "col-md-5 col-lg-5 col-xs-12 col-md-offset-1 col-lg-offset-1";
        const firstOrSecond = (book) => {
            if(!(book.id % 2)){
                return second;
            }else {
                return first;
            }
        };
        return (
            <MostPopularBookList books={data} order={firstOrSecond}/>

        );
    }

}

HomePage.propTypes = {

};
export default HomePage;
