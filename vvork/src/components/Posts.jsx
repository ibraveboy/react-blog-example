import React, { Component } from 'react'
import { Link } from "react-router-dom";


class Posts extends Component {
    render() {
        var posts = this.props.posts.map((post,index) => {
            return (
                <div className="post-grid" key={post.id}>
                    <div className="post-thumb" >
                        <Link to={"/post/"+post.id} >
                            <img src={post.thumb_url} />
                        </Link>
                    </div>
                    <div className="post-detail">
                        <h1>
                            <Link to={"/post/" + post.id} >{post.title}</Link>
                            <span>
                                <Link to={"/post/" + post.id} title="Comments(2)">
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
                </div>
            )
        });
    return (
        <div className="posts-container">
            <h1 className="title">
                Blog (Recents)
            </h1>
            {posts}
        </div>
    )
  }
}

export default Posts;