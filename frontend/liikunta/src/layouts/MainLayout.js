import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
import PostTable from '../posts/PostTable'
import PostForm from '../posts/PostForm';
import AdminPostTable from '../adminPosts/AdminPostTable'
import AdminPostForm from '../adminPosts/AdminPostForm';

export default class MainLayout extends Component {

  constructor(props) {

    super(props);
    this.state = {sC: 0};

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e) {
      this.setState({sC: e});
  }
  
  render() {
    
    return(
      <div class="row">
        <div class="col">

        <PostForm selectedComment={this.state.sC}/>
        <AdminPostForm selectedComment={this.state.sC}/>

          <div class="row">
            <div className="header">
              <div style={{textAlign:"center", marginTop:'100px'}}>
                <h1 class="display-1">HelloSport</h1>
                <button style={{marginTop:'25px', marginBottom:'15px'}}
                        type="button" 
                        className="btn btn-success" 
                        data-toggle="modal" 
                        data-target="#postNotificationModal">Post a new notification!</button>
                <button style={{marginTop:'25px', marginBottom:'15px'}}
                        type="button" 
                        className="btn btn-success" 
                        data-toggle="modal" 
                        data-target="#adminPostNotificationModal">Post a new event!</button>
              </div>
            </div>
          </div>

          <div class="row">
            <div className="container">
              <div className="leftColumn">
              <Link to={{pathname: "/events"}}>
                <button className="btn btn-primary">Events</button>
              </Link>
              <Link to = {{pathname: "/posts"}}>
                <button className="btn btn-primary">Posts</button>
              </Link>
              </div>
              <div className="middleColumn">
              {this.props.content}
              </div>
            </div>
          </div>
          
          <div class="row">
            <div className="footer">
              <h2>This is footer</h2>
            </div>
          </div>
        </div>
      </div>        
    )
  }
}