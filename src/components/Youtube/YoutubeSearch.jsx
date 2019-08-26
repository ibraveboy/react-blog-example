import React, { Component } from 'react'
import SearchBar from './SerachBar'
import { connect } from 'react-redux';
import * as Actions from '../../actions'
import Axios from 'axios';


class YoutubeSearch extends Component {
    state={
        
        currentSrc:"https://www.youtube.com/embed/",
        hide:true,
        
    }
    playVideo = (index) => {
        this.setState({
            currentSrc:this.state.currentSrc+this.props.data.items[index].id.videoId,
            hide:false,
        })
    }
    hidePlayer = () => {
        this.setState({
            hide:true,
            currentSrc:"https://www.youtube.com/embed/",
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
        }
        
    }
    componentDidMount(){
        Axios.get("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostpopular&regionCode=pk&maxResults=20&key=AIzaSyD1_N8o8IUNpzfSBA0v15PNf7Lraqpb2ok")
        .then( res => {
            console.log(res.data)
            this.props.searchResultsUpdate(res.data)
        })

        window.addEventListener("keydown",this.globalKeyPressHandler)
    }
    render() {
        
        let list=this.props.data.items.map( (video,index) => {
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
                        {/* <p>
                            {video.snippet.description}

                        </p> */}
                   </div>
                </div>
            )
        })

        return (
            
            <div className="app" onKeyDown={this.overlayKeyPressHandler}>
                <SearchBar/>
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

export default connect(mapStateToProps,{...Actions})(YoutubeSearch)