import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as Actions from '../../actions'
import Axios from 'axios';

class SerachBar extends Component {
    state={
        query:""
    }
    queryChangeHandler = (event) => {
        this.setState({
            query:event.target.value,
        }) 
    }
    searchBtnPressHandler = () =>{
        if(this.state.query=="")
            return false

        Axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=21&key=AIzaSyD1_N8o8IUNpzfSBA0v15PNf7Lraqpb2ok&q="+this.state.query)
        .then( res => {
            this.setState({
                query:"",
            })
            this.props.searchResultsUpdate(res.data)
        })
    }
    globalKeyPressHandler = (event) => {
        if(event.key=="Enter" && event.target.className=="searchBox"){
            this.searchBtnPressHandler()
        }
        
    }

    componentDidMount(){
        window.addEventListener("keydown",this.globalKeyPressHandler)
    }

    render() {
        return (
            <div className="searchBar">
                <input type="search" className="searchBox" onInput={this.queryChangeHandler}/>
                <button className="searchBtn" onClick={this.searchBtnPressHandler}>Search</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps,{...Actions})(SerachBar);