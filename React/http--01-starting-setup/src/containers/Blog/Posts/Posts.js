import React, { Component } from 'react';
import axios from '../../../axios';

import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {
    state = {
        posts: [],
    };
    postSelectedHandler = (selectedPostId) => {
        this.setState({ selectedPostId });
    };

    componentDidMount() {
        console.log(this.props);
        axios
            .get('/posts')
            .then((result) => {
                const posts = result.data.slice(0, 4).map((post) => {
                    return {
                        ...post,
                        author: 'Jelle',
                    };
                });
                this.setState({ posts });
                console.log(result);
            })
            .catch(error => console.log(error));
    }

    render() {
        const posts = this.state.error ? (
            <p style={{ textAlign: 'center' }}>Something went wrong!</p>
        ) : (
                this.state.posts.map((post) => (
                    // <Link to={'/' + post.id} >
                        <Post
                            title={post.title}
                            key={post.id}
                            author={post.author}
                            clicked={() => this.postSelectedHandler(post.id)}
                        />
                        // </Link>
                ))
            );
        return (
            <section className="Posts">{posts}</section>
        )
    }
}

export default Posts;