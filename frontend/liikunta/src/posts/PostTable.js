import React, {Component} from 'react';
import Post from './Post'
import LimitedInfiniteScroll from 'react-limited-infinite-scroll'

export default class PostTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePosts: [],
      posts:[],
      totalPosts: 2
    }
    this.componentWillMount = this.componentWillMount.bind(this);
    this.renderPosts = this.renderPosts.bind(this);
  }

  componentWillMount() {
    fetch('http://127.0.0.1:8080/notifications/')
    .then(response=>response.json())
    .then(response => this.setState({
        post: response,
        activePosts:response
    }))
  }

  renderPosts(post) {
    if(this.state.activePosts.length > 0) {
      return <Post key={post.id} post={post} />
    } else {
      return <p>Loading...</p>
    }
  }

  loadMore(){
    let tempArray = this.state.posts.slice(this.state.posts.length-this.state.totalPosts);
    let tempTotalPosts = this.state.totalPosts + 4;
    if(tempTotalPosts > this.state.posts.length){
        tempTotalPosts = this.state.posts.length;
    }
    this.setState({
        activeArticles: tempArray,
        totalArticles: tempTotalPosts
    });
  }

  render() {
    let postList = 
      this.state.activePosts.slice(0).reverse().map((post) =>
      this.renderPosts(post)
    );
    return(
      <LimitedInfiniteScroll 
      limit={1} 
      hasMore={postList.length < this.state.posts.length}
      spinLoader={<div className="loader">Loading...</div>}
      mannualLoader={<span style={{fontSize: 20, lineHeight: 1.5, marginTop: 20, marginBottom: 20, display: 'inline-block'}}>Load More</span>}
      noMore={<div className="loader"></div>} 
      loadNext={() => this.loadMore()}
      threshold={0}>
          {postList}
      </LimitedInfiniteScroll>
    )
  }
}