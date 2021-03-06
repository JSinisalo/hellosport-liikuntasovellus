import React, {Component} from 'react';
import {Link} from 'react-router-dom';
export default class Post extends Component {

  constructor(props) {
    super(props);
    this.state = {isName:false};
  }

  componentWillMount(){
      fetch('/notifications/checkname', {
               credentials: 'same-origin'
             })
          .then(response => response.json())
          .then(response => {
          if (response == this.props.post.authorName) {
            this.setState({isName:true});
          }
          console.log(response)
          console.log(this.props.post.authorName)
          });
    }

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

    let deleteButton = []
    console.log(this.state.isName)
    if (this.state.isName === true) {
      deleteButton.push(
          <button style={{marginLeft:'20px'}} type="button" class="btn btn-warning" onClick={() => {
       fetch('/notifications'+this.props.post.id, {

             method: 'DELETE'
       })}}>Delete</button>)
     }

     let cenabled = true;
     if (this.props.post.comments.length === 0) cenabled = false;

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
          <button class="btn btn-primary dropdown-toggle" disabled={!cenabled} type="button" data-toggle="collapse" data-target={"#post" + this.props.post.id} aria-expanded="false" aria-controls={"postControls" + this.props.post.id} >
              Comments
          </button>
          <button style={{marginLeft:'20px'}} type="button" class="btn btn-success" onClick={() => { window.selectedComment = this.props.post.id; }} data-toggle="modal" data-target="#postCommentModal">Post a new comment!</button>
          {deleteButton}
          <div class="collapse" id={"post" + this.props.post.id}>
            {this.getComments()}
          </div>
        </div>
      </div>
    )
  }
}