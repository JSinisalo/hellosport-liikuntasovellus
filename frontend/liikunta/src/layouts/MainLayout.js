import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import PostForm from '../posts/PostForm';
import AdminPostForm from '../AdminPosts/AdminPostForm';
import AdminPostTable from '../AdminPosts/AdminPostTable';
import skate from './skate.gif';

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
      <div>
        <div className="row">
          <PostForm selectedComment={this.state.sC}/>
          <AdminPostForm selectedComment={this.state.sC}/>
            <div className="col">
              <div className="row">
                <div className="header">
                  <div style={{textAlign:"center", marginTop:'100px'}}>
                    <h1 className="display-1">HelloSport</h1>
                    <button style={{margin:'20px', marginTop:'30px'}}
                            type="button" 
                            className="btn btn-success" 
                            data-toggle="modal" 
                            data-target="#postNotificationModal">Post a new notification!</button>
                    <button style={{margin:'20px', marginTop:'30px'}}
                            type="button" 
                            className="btn btn-success" 
                            data-toggle="modal" 
                            data-target="#adminPostNotificationModal">Post a new event!</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div className="row">
              <div className ="col-sm-3" style={{marginTop:'20px'}}>
                  <ul className="list-group">
                    <NavLink to = {{pathname: "/posts"}} className='link-style' activeClassName="active-style" onlyActiveOnIndex>
                      <div className="list-group-item list-group-item-action list-group-item-info">
                        Posts
                      </div>
                    </NavLink>
                    <NavLink to={{pathname: "/events"}} className='link-style' activeClassName="active-style" onlyActiveOnIndex>
                      <div className="list-group-item list-group-item-action list-group-item-info">
                        Events
                      </div>
                    </NavLink>
                    <NavLink to={{pathname: "/profile"}} className='link-style' activeClassName="active-style" onlyActiveOnIndex>
                      <div className="list-group-item list-group-item-action list-group-item-info">
                          Profile
                      </div>
                    </NavLink>
                  </ul>
                </div>
                <div className = "col-sm-9">
                  {this.props.content}
                </div>
            </div>
          </div>
        <div className="row">
          <div className="footer">
            <a href="http://localhost:8080/logout"><img src={skate} alt="logo" /></a>
          </div>
        </div>
      </div>        
    )
  }
}