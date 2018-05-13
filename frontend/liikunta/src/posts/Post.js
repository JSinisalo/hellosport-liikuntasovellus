import React, {Component} from 'react';
import {Link} from 'react-router-dom';
export default class Post extends Component {

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

    const gender = this.props.post.gender.join(', ');
    const sport = this.props.post.sport.join(', ');

    let d = new Date(0);
    d.setUTCSeconds(this.props.post.timePosted);
    const timePosted = d.toDateString();

    d = new Date(0);
    d.setUTCSeconds(this.props.post.searchStart);
    const searchStart = d.toDateString();

    d = new Date(0);
    d.setUTCSeconds(this.props.post.searchEnd);
    const searchEnd = d.toDateString();

    return (
      <div class="card" style={{width: '80%'}}>
        <div class="card-header">
          <Link  to={{pathname: "/profiles/" + 11}}>
          <small class="form-text text-muted">{this.props.post.authorName + " " + timePosted}</small>
          </Link>
          <h3 style={{marginBottom: '1px'}}>{this.props.post.title}</h3>
          <small class="form-text text-muted">Sports: {sport}</small>
          <small class="form-text text-muted">Gender: {gender}</small>
        </div>
        <div class="card-body">
          <p class="card-text">{this.props.post.textBody}</p>
        </div>
        <div class="card-footer">
          <small class="form-text text-muted">Timeframe: {searchStart} - {searchEnd}</small>
        </div>
        <div class="card-body">
          <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="collapse" data-target={"#post" + this.props.post.id} aria-expanded="false" aria-controls={"postControls" + this.props.post.id} >
              Comments
          </button>
          <button type="button" class="btn btn-success" onClick={() => { this.props.currentlySelectedCallback(this.props.post.id) }} data-toggle="modal" data-target="#postCommentModal">Post a new comment!</button>
          <div class="collapse" id={"post" + this.props.post.id}>
            {this.getComments()}
          </div>
        </div>
      </div>
    )
  }
}