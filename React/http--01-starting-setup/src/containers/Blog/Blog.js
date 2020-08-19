import React, { Component } from 'react';
import axios from '../../axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
	state = {
		posts: [],
		selectedPostId: null,
		error: false,
	};
	componentDidMount() {
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
			.catch(() => this.setState({ error: true }));
	}

	postSelectedHandler = (selectedPostId) => {
		this.setState({ selectedPostId });
	};
	render() {
		const posts = this.state.error ? (
			<p style={{ textAlign: 'center' }}>Something went wrong!</p>
		) : (
			this.state.posts.map((post) => (
				<Post
					key={post.id}
					title={post.title}
					author={post.author}
					clicked={() => this.postSelectedHandler(post.id)}
				/>
			))
		);
		return (
			<div>
				<section className="Posts">{posts}</section>
				<section>
					<FullPost id={this.state.selectedPostId} />
				</section>
				<section>
					<NewPost />
				</section>
			</div>
		);
	}
}

export default Blog;
