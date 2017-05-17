import React, {PropTypes} from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
// import {connect} from 'react-redux';

class App extends React.Component {

    render() {

        return (
            <div className="page-wrap">
                <Header/>
                <div className="container">{this.props.children}</div>
                <Footer/>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

// function mapStateToProps(state, ownProps) {
//     return{
//         loading: state.ajaxCallInProgress > 0
//     };
// }
//
// export default connect(mapStateToProps)(App);
export default App;