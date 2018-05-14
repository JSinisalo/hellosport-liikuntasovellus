import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import PostForm from '../posts/PostForm';
import AdminPostForm from '../AdminPosts/AdminPostForm';
import AdminPostTable from '../AdminPosts/AdminPostTable';
import skate from './skate.gif';
import NavBar from './NavBar';

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
        <NavBar></NavBar>
        <div className="container">
          <div className="row">
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