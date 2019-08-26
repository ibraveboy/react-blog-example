import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Post from './Post';
import Posts from "./Posts";
import Sidebar from './Sidebar';
import YoutubeSearch from './Youtube/YoutubeSearch'
import {connect} from 'react-redux';



class App extends Component{

    render() {

        return (
            <YoutubeSearch/>
        );
    }
}

const mapStateToProps= state => {
    return {...state}
}


export default withRouter(connect(mapStateToProps)(App));