import React, {Component} from 'react';


class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home-page">
                <div className="home-page-pic">
                    <div className="description">Sell and Buy for Trojans</div>
                    <button className="btn btn-info btn-lg">Start Today</button>
                </div>
            </div>
        )
    }
}

export default HomePage;