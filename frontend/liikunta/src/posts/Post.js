import React, {Component} from 'react';
import { Link, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

export default class Post extends Component {
  render() {
    console.log(this.props.post);
    return (
      <div>
        <div className = "postHeader">
          <h3>{this.props.post.title}</h3>
          <h4>{this.props.post.author}</h4>
          <h4>{this.props.post.sport}</h4>
        </div>
        <div className = "postContent">
          <p>
            {this.props.post.textBody} <br/>
            {this.props.post.searchStart}<br/>
            {this.props.post.searchEnd}<br/>
            {this.props.post.gender}
          </p>
        </div>
      </div>
    )
  }
}