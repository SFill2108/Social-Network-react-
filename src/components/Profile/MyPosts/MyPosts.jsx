import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post'
const MyPosts = () =>{
    return (
        <div>
            my post
            <div>
                New posts
            </div>
            <div className={classes.posts}>
                <Post message="Hello, world!" />
                <Post message="First post, LOL"/>
            </div>
        </div>
    );
}

export default MyPosts;