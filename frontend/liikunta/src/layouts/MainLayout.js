import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
import PostTable from '../posts/PostTable';
import PostForm from '../posts/PostForm';
import AdminPostTable from '../adminPosts/AdminPostTable';
import AdminPostForm from '../adminPosts/AdminPostForm';
import skate from './skate.gif';

export default class MainLayout extends Component {

  constructor(props) {

    super(props);
    this.state = {sC: 0,showAdmin: false};

    this.handleItemClick = this.handleItemClick.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
  }

  componentWillMount() {

    fetch('http://127.0.0.1:8080/notifications/check', { method: 'GET', headers: new Headers({ 'X-Requested-With': 'XMLHttpRequest'})})
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
      <div class="row">
        <div class="col">

        <PostForm selectedComment={this.state.sC}/>
        <AdminPostForm selectedComment={this.state.sC}/>

          <div class="row">
            <div className="header">
              <div style={{textAlign:"center", margin:'100px'}}>
                <h1 class="display-1">HelloSport</h1>
                <button style={{margin: '10px'}}
                        type="button" 
                        className="btn btn-success" 
                        data-toggle="modal" 
                        data-target="#postNotificationModal">Post a new notification!</button>
                { this.state.showAdmin && <EventButton /> }
              </div>
            </div>
          </div>

          <div class="row">
            <div className="middleColumn">
              <div style={{textAlign:"center", margin:'10px'}}>
              <Link to={{pathname: "/events"}}>
                <button style={{margin:'5px'}} className="btn btn-primary">Events</button>
              </Link>
              <Link to = {{pathname: "/posts"}}>
                <button style={{margin:'5px'}} className="btn btn-primary">Posts</button>
              </Link>
              </div>
              <div style={{textAlign:"center"}}>
                {this.props.content}
              </div>
            </div>
          </div>
          
          <div class="row">
            <div className="footer">
              <a href="http://localhost:8080/logout"><img src={skate} alt="logo" /></a>
            </div>
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