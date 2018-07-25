import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postsFetchData } from '../actions/actions';

class Post extends Component {
    constructor(props) {
        super(props);
        this.renderPost = this.renderPost.bind(this)
    }

    componentDidMount() {
        const API_URL = 'http://localhost:3000/api/post/?list';
        setTimeout(() => { this.props.fetchPost(API_URL); }, 1000);
    }

    renderPost() {
        const posts = Array.from(this.props.posts);
        return posts.map( post => {
            const img = post.image ? post.image.filename : '';
            function createMarkupForConcepts() {
                if(post.conceptList) {
                    return {
                        __html : post.conceptList,
                    };
                } else {
                    return ;
                }
            };
            function createMarkupForContent() {
                if(post.content) {
                    return {
                        __html: post.content,
                    };
                } else {
                    return ;
                }
            };
            if (post.state = "published") {
                return (
                    <div key={post._id}>
                      <h1>{post.name}</h1>
                      <img style={{ width: '300px', height: '300px'}} src={img} />
                      <h2>Concept List</h2>
                      <div dangerouslySetInnerHTML={createMarkupForConcepts()} />
                      <h2>content</h2>
                      <div dangerouslySetInnerHTML={createMarkupForContent()} />
                    </div>
                );
            }
        });
    }
    render() {
        if (this.props.loading) {
            return (
                <div>
                    <h1>LOADING...</h1>
                </div>
            );
        }
        return (
            <div>{this.renderPost()}</div>
        );
    };
};

function mapStateToProps(state, ownProps) {
    return {
        posts: state.posts,
        loading: state.loadPosts,
    };
}

const mapDispatchToProps = dispatch => ({
    fetchPost: (url) => dispatch(postsFetchData(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);