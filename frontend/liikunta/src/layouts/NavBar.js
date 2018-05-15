import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import PostForm from '../posts/PostForm';
import AdminPostForm from '../AdminPosts/AdminPostForm';
import AdminPostTable from '../AdminPosts/AdminPostTable';


export default class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {isAdmin: false};
  }

  componentWillMount(){
      fetch('/notifications/check', {
               credentials: 'same-origin'
             })
          .then(response => response.json())
          .then(response => {
          this.setState({
          isAdmin: response
          });
          console.log(response)
          });
    }

  render() {
    var adminButton = [];
    if (this.state.isAdmin === true) {
        adminButton.push(<a class="dropdown-item" data-toggle="modal" data-target="#adminPostNotificationModal">New Event</a>)
    }

    return(

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">HelloSport</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to = {{pathname: "/posts"}} className='nav-link' activeClassName="active-style" onlyActiveOnIndex>
                Posts
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={{pathname: "/events"}} className='nav-link' activeClassName="active-style" onlyActiveOnIndex>
                Events
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={{pathname: "/profile"}} className='nav-link' activeClassName="active-style" onlyActiveOnIndex>
                Profile
              </NavLink>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                POST
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" data-toggle="modal" data-target="#postNotificationModal">New Notification</a>
                {adminButton}
              </div>
            </li>
          </ul>
          <ul className = "navbar-nav ml-auto">
            <li className="nav-item">
              <a href="http://localhost:8080/logout">Logout</a>
            </li>
          </ul>
        </div>
      </nav>
   
    )
  }
}