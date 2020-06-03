import React, { Component } from 'react';
import { HomeHeader, HomeSearch, HomeContent } from './HomeElements';

class Home extends Component {
    render() {
        return (
            <div>
                <HomeHeader />
                <HomeSearch />
                <HomeContent />
            </div>
        );
    }
}

export default Home;