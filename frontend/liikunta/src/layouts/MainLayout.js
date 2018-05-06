import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PostForm from '../posts/PostForm';
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
      <div className="container">
        <div className="row">
          <PostForm selectedComment={this.state.sC}/>
          <AdminPostForm selectedComment={this.state.sC}/>
            <div className="col">
              <div className="header">
                <div style={{textAlign:"center", marginTop:'100px'}}>
                  <h1 className="display-1">HelloSport</h1>
                  <button style={{marginTop:'25px', marginBottom:'15px'}}
                          type="button" 
                          className="btn btn-success" 
                          data-toggle="modal" 
                          data-target="#postNotificationModal">Post a new notification!</button><br/>
                  <button style={{marginTop:'25px', marginBottom:'15px'}}
                          type="button" 
                          className="btn btn-success" 
                          data-toggle="modal" 
                          data-target="#adminPostNotificationModal">Post a new event!</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className ="col-sm-3">
                <ul className="list-group">
                  <Link to = {{pathname: "/posts"}} className='link-style'>
                    <a href="#" className="list-group-item list-group-item-action list-group-item-info">
                      Posts
                    </a>
                  </Link>
                  <Link to={{pathname: "/events"}} className='link-style'>
                    <a href="#" className="list-group-item list-group-item-action list-group-item-info">
                      Events
                    </a>
                  </Link>
                  <Link to={{pathname: "/profile"}} className='link-style'>
                    <a href="#" className="list-group-item list-group-item-action list-group-item-info">
                        Profile
                    </a>
                  </Link>
                </ul>
              </div>
              <div className = "col-sm-9">
                {this.props.content}
              </div>
        </div>
        <div className="row">
          <div className="footer">
            <h2>This is footer</h2>
          </div>
        </div>
      </div>        
    )
  }
}