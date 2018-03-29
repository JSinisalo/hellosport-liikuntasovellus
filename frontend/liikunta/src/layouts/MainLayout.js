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
          <Link to="/postForm"><button>Add Post</button> </Link>
        </div>

        <div className="container">
          <div className="leftColumn">
          </div>
          <div className="middleColumn">
          {this.props.content}
          </div>
          <div className="rightColumn">
          </div>
        </div> 
        
        <div className="footer">
          <h2>This is footer</h2>
        </div>
      
      </div>        
    )
  }
}