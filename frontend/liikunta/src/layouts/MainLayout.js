import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
import PostTable from '../posts/PostTable'
export default class MainLayout extends Component {
  constructor(props) {
    super(props);
  }
  
  
  render() {
    
    return(
      <div>
        <div className="header">
          <h1>SPORT APP</h1>
        </div>
        <div className="container">
           {this.props.content}
          <Link to="/postForm"><button>Add Post</button> </Link>
        </div>
      
      </div>        
    )
  }
}