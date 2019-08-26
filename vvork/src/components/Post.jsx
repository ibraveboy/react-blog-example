import React, { Component } from 'react'
import { withRouter,Link } from "react-router-dom";
import {connect} from 'react-redux';

class Post extends Component {
    render() {
        let post = this.props.posts.filter((single) => {
            return single.id == Number(this.props.match.params.post)
        });
        post = post[0];

        return (
            <div className="post-single">
                <div className="post" key={post.id}>
                    <div className="post-head" >
                        <img src={post.thumb_url} />
                    </div>
                    <div className="post-body">
                        <h1>
                            <Link to={"/post/" + post.id} >{post.title}</Link>
                            <span>
                                <Link to={"/post/" + post.id} title="Comments(2)" >
                                    <i className="far fa-comments"></i>
                                    <span className="count">
                                        {post.comments}
                                    </span>
                                </Link>
                                <Link to={"/post/" + post.id} title="Likes(2)">
                                    <i className="far fa-thumbs-up"></i>
                                    <span className="count">
                                        {post.likes}
                                    </span>
                                </Link>
                            </span>
                        </h1>
                        <p>
                            {post.desc}
                        </p>
                    </div>
                    <div className="comments">
                        <div className="add-comment">
                            <textarea placeholder="Add a comment">
                                
                            </textarea>
                            <button className="post-comment" onClick={this.props.comment}>
                                <i className="far fa-paper-plane"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const like = () => {
    return {
        type:"like"
    }
}
const comment = () => {
    return {
        type:"comment"
    }
}
const mapStateToProps= state => {
    return state
}
export default withRouter(connect(mapStateToProps,{like,comment})(Post));