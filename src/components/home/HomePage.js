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
                name: "weis"
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
        return (
            <MostPopularBookList books={data}/>

        );
    }

}

HomePage.propTypes = {

};
export default HomePage;
