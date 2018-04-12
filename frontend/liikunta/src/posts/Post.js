import React, {Component} from 'react';
import { Link, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

export default class Post extends Component {
  render() {

    console.log(this.props.post);

    const gender = this.props.post.gender.join(', ');
    const sport = this.props.post.sport.join(', ');

    let d = new Date(0);
    d.setUTCSeconds(this.props.post.searchStart);
    const searchStart = d.toDateString();

    d = new Date(0);
    d.setUTCSeconds(this.props.post.searchEnd);
    const searchEnd = d.toDateString();

    return (
      <div class="card" style={{width: '80%'}}>
        <div class="card-header">
          <small class="form-text text-muted">{this.props.post.authorName}</small>
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
      </div>
    )
  }
}