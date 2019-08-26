import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Post from './Post';
import Posts from "./Posts";
import Sidebar from './Sidebar';
import {connect} from 'react-redux';
import Axios from 'axios'



class App extends Component{

    
    state={
        data:{
            items:[]
        },
        currentSrc:"https://www.youtube.com/embed/",
        hide:true,
        query:"",
    }
    playVideo = (index) => {
        this.setState({
            currentSrc:this.state.currentSrc+this.state.data.items[index].id.videoId,
            hide:false,
        })
    }
    hidePlayer = () => {
        this.setState({
            hide:true,
            currentSrc:"https://www.youtube.com/embed/",
        })
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
                data:res.data,
                query:"",
            })
        })
    }
    overlayClickHandler = (event) => {
        if(event.target.className=="backgroundFade"){
            this.hidePlayer()
        }
    }
    globalKeyPressHandler = (event) => {
        if(event.key=="Escape" && !this.state.hide){
           this.hidePlayer()
        }else if(event.key=="Enter" && event.target.className=="searchBox"){
            this.searchBtnPressHandler()
        }
        
    }
    componentDidMount(){
        Axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=21&key=AIzaSyD1_N8o8IUNpzfSBA0v15PNf7Lraqpb2ok")
        .then( res => {
            this.setState({
                data:res.data
            })
        })

        window.addEventListener("keydown",this.globalKeyPressHandler)
    }
    render() {
        
        let list=this.state.data.items.map( (video,index) => {
            return(
                <div className="listView">
                   <div className="thumbnail"  onClick={()=> this.playVideo(index) }>
                       <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
                   </div> 
                   <div className="details">
                       <h4 className="videoTitle" onClick={()=> this.playVideo(index) }>
                           {video.snippet.title}
                       </h4>
                       <div className="subDetails">
                           <small className="publishDate">
                               {video.snippet.publishedAt.split("T")[0]}
                           </small>
                           <small className="channelTitle">
                               {video.snippet.channelTitle}
                           </small>
                       </div>
                        <p>
                            {video.snippet.description}

                        </p>
                   </div>
                </div>
            )
        })

        return (
            
            <div className="app" onKeyDown={this.overlayKeyPressHandler}>
                <div className="searchBar">
                    <input type="search" className="searchBox" onInput={this.queryChangeHandler}/>
                    <button className="searchBtn" onClick={this.searchBtnPressHandler}>Search</button>
                </div>
                {list}
                <div 
                className={this.state.hide?("overlay hide"):("overlay   show")} 
                onClick={this.overlayClickHandler}
                >
                    <div className="backgroundFade"></div>
                    <div className="closeOverlay" onClick={this.hidePlayer}>x</div>
                    <iframe width="560" height="315" src={this.state.currentSrc} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" onClick={()=>{console.log("click")}} allowFullScreen></iframe>
                </div>
                {/* <Sidebar />
                <Route exact path="/" render={() => <Posts posts={this.props.posts} />} />
                <Route path="/post/:post" render={() => <Post />} /> */}
            </div>
        );
    }
}

const mapStateToProps= state => {
    return {...state}
}


export default withRouter(connect(mapStateToProps)(App));