import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    //constructor is made from babel
    state = {lat: null, errorMessage: ''};

    //updating state
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    //helper method useful for conditional logic
    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>
        }
        return <Spinner message="Please accept location request" />;
    }
    // React says we have to define render
    render() {
        //border red doesn't exist but as an example if you wanted to add to render
        //without having to reuse code three times in renderContent
        return <div className="border red">{this.renderContent()}</div>;
    }
}


ReactDOM.render(
    <App />, document.querySelector('#root')
);

