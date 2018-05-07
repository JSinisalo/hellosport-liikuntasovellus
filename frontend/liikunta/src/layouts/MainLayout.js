import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
import PostTable from '../posts/PostTable'
import PostForm from '../posts/PostForm';
import AdminPostTable from '../AdminPosts/AdminPostTable'
import AdminPostForm from '../AdminPosts/AdminPostForm';
import skate from './skate.gif';

export default class MainLayout extends Component {

  constructor(props) {

    super(props);
    this.state = {sC: 0,showAdmin: false};

    this.handleItemClick = this.handleItemClick.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
  }

  componentWillMount() {

    fetch('http://127.0.0.1:8080/notifications/check')
        .then(response=>response.json())
        .then(response => this.setState({
        showAdmin: response
        }))
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
                    <a href="posts" className="list-group-item list-group-item-action list-group-item-info">
                      Posts
                    </a>
                  </Link>
                  <Link to={{pathname: "/events"}} className='link-style'>
                    <a href="events" className="list-group-item list-group-item-action list-group-item-info">
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
            <a href="http://localhost:8080/logout"><img src={skate} alt="logo" /></a>
          </div>
        </div>
      </div>        
    )
  }
}

class EventButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button style={{margin: '10px'}}
                            type="button"
                            className="btn btn-success"
                            data-toggle="modal"
                            data-target="#adminPostNotificationModal">Post a new event!</button>
        )
    }
}