import React, {Component} from 'react';
import Post from './Post'
import LimitedInfiniteScroll from 'react-limited-infinite-scroll'
import contains from 'string-contains'

export default class PostTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search:"",
      activePosts:[],
      posts:[],
      totalPosts: 2
    }
    this.componentWillMount = this.componentWillMount.bind(this);
    this.renderPosts = this.renderPosts.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
      if(this.state.search.trim() === "") {
        return <Post key={post.id} post={post} currentlySelectedCallback={(data) => {this.props.selectedComment(data)}}/>
      } else if(this.postHasSport(post, this.state.search)) {
        return <Post key={post.id} post={post} currentlySelectedCallback={(data) => {this.props.selectedComment(data)}}/>
      } 

    } else {
      return <p>Loading...</p>
    }
  }

  postHasSport(post, sportName) {
    for (let i = 0; i < post.sport.length; i++) {
      if (contains(post.sport[i].toLowerCase(), sportName.toLowerCase())) return true;
    }
    return false;
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
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
      <div>
        <div style={{textAlign:"center", marginTop:'20px'}}>
          <input style={{width:"45%", margin: "0 auto"}} class="form-control" type="text" name="search"  ref="search" placeholder="Search" onChange={this.handleChange}/>
        </div>

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
      </div>
    )
  }
}