import React, {Component} from 'react';
import { Link, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

export default class AdminPost extends Component {

  getComment(c) {

    let d = new Date(0);
    d.setUTCSeconds(c.timePosted);
    const timePosted = d.toDateString();

    return(
      <div class="card card-body" key={c.id}>
        <div class="card-header">
          <small class="form-text text-muted">{c.author + " " + timePosted}</small>
        </div>
        <div class="card-body">
          <p class="card-text">{c.textbody}</p>
        </div>
      </div>
    )
  }

  getComments() {

    return this.props.post.comments.map(this.getComment);
  }

  currentlySelectedCallback(data) {

    console.log(data);
  }

  render() {

    let d = new Date(0);
    d.setUTCSeconds(this.props.post.timePosted);
    const timePosted = d.toDateString();

    return (
      <div class="card" style={{width: '80%'}}>
        <div class="card-header">
          <small class="form-text text-muted">{this.props.post.authorName}</small>
          <h3 style={{marginBottom: '1px'}}>{this.props.post.title}</h3>

        </div>
        <div class="card-body">
          <p class="card-text">{this.props.post.textBody}</p>
        </div>
        <div class="card-footer">
          <small class="form-text text-muted">Posted time: {timePosted}</small>
        </div>
      </div>
    )
  }
}