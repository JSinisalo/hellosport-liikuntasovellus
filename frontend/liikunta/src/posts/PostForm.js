import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-modal';
export default class PostForm extends Component {

  constructor(props) {

    super(props);

    this.state = {

        title: "",
        textBody: "",
        authorName: "",
        searchStart: "",
        searchEnd: "",
        gender: "",
        sport: "",
        commentAuthorName: "",
        commentTextBody: ""
      };
    	
    this.postNotification = this.postNotification.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {

    this.setState({[event.target.name]: event.target.value});
  }

  postNotification() {

    let startEpoch = new Date(this.state.searchStart).valueOf()/1000 // converting the dates to epoch
    let endEpoch = new Date(this.state.searchEnd).valueOf()/1000

    fetch('http://localhost:8080/notifications', { 

      method: 'POST',

      body: JSON.stringify({

        title: this.state.title,
        textBody: this.state.textBody,
        authorName: this.state.authorName,
        searchStart: startEpoch,
        searchEnd: endEpoch,
        gender: this.state.gender.split(' '),
        sport: this.state.sport.split(' ')

      }),
      headers: new Headers({ 'Content-Type': 'application/json'}) }).
      then((r) => { console.log(r); window.location.reload(false); });
  }

  postComment() {

    fetch('http://localhost:8080/notifications/' + this.props.selectedComment + '/comments', { 

      method: 'POST',

      body: JSON.stringify({

        author: this.state.commentAuthorName,
        textbody: this.state.commentTextBody

      }),
      headers: new Headers({ 'Content-Type': 'application/json'}) }).
      then((r) => { console.log(r); window.location.reload(false); });
  }
  
  render() {

    const { title, textBody, authorName, searchStart, searchEnd, gender, sport } = this.state;
    const enabled =
          title.length > 0 &&
          textBody.length > 0 &&
          authorName.length > 0 &&
          searchStart.length > 0 &&
          searchEnd.length > 0 &&
          gender.length > 0 &&
          sport.length > 0;

    const { commentAuthorName, commentTextBody } = this.state;
    const cenabled =
          commentAuthorName.length > 0 &&
          commentTextBody.length > 0;

    return(
      <div>
        <div class="modal fade" id="postNotificationModal" style={{width:'100%', margin:'auto'}}>
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Post a new notification</h5>
                <button type="button" class="close" aria-label="Close" data-dismiss="modal">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group row">
                    <label for="title" class="col-sm-2 col-form-label">Title:</label>
                    <div class="col-sm-10">
                      <input class="form-control" type="text" id="title" name="title" ref="title" onChange={this.handleChange} value={this.state.title} placeholder="Title of your notification" required/>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="authorName" class="col-sm-2 col-form-label">Author:</label>
                    <div class="col-sm-10">
                      <input class="form-control" type="text" id="authorName" name="authorName" ref="authorName" onChange={this.handleChange} value={this.state.authorName} placeholder="Your name, nickname, etc..." required/>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="sport" class="col-sm-2 col-form-label">Sport:</label>
                    <div class="col-sm-10">
                      <input class="form-control" type="text" id="sport" name="sport" ref="sport" onChange={this.handleChange} value={this.state.sport} placeholder="Sports seperated by whitespace (eg. 'tennis golf')" required/>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="gender" class="col-sm-2 col-form-label">Gender:</label>
                    <div class="col-sm-10">
                        <label class="radio-inline"><input type="radio" id="gender" name ="gender" ref="gender" onChange={this.handleChange} value="Any" required/> Any </label>
                        <label class="radio-inline"><input type="radio" id="gender" name ="gender" ref="gender" onChange={this.handleChange} value="Female" required/> Female </label>
                        <label class="radio-inline"><input type="radio" id="gender" name ="gender" ref="gender" onChange={this.handleChange} value="Male" required/> Male </label>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="searchStart" class="col-sm-2 col-form-label">Start time:</label>
                    <div class="col-sm-10">
                      <input class="form-control" type="date" id="searchStart" name="searchStart"  ref="searchStart" onChange={this.handleChange} value={this.state.searchStart} required/>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="searchEnd" class="col-sm-2 col-form-label">End time:</label>
                      <div class="col-sm-10">
                    <input class="form-control" type="date" id="searchEnd" name="searchEnd" ref="searchEnd" onChange={this.handleChange} value={this.state.searchEnd} required/>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="textBody" class="col-sm-2 col-form-label">Details:</label>
                    <div class="col-sm-10">
                      <textarea class="form-control" rows="5" id="textBody" cols="60" maxLength="300" name="textBody" ref="textBody" onChange={this.handleChange} value={this.state.textBody} placeholder="Any details or whatever you want to write here..." required/>
                    </div>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                <button class="btn btn-primary" disabled={!enabled} onClick={() => { this.postNotification() }} data-dismiss="modal">Post</button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="postCommentModal" style={{width:'100%', margin:'auto'}}>
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Post a new comment</h5>
                <button type="button" class="close" aria-label="Close" data-dismiss="modal">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group row">
                    <label for="commentAuthorName" class="col-sm-2 col-form-label">Author:</label>
                    <div class="col-sm-10">
                      <input class="form-control" type="text" id="commentAuthorName" name="commentAuthorName" ref="commentAuthorName" onChange={this.handleChange} value={this.state.commentAuthorName} placeholder="Your name, nickname, etc..." required/>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="commentTextBody" class="col-sm-2 col-form-label">Comment:</label>
                    <div class="col-sm-10">
                      <textarea class="form-control" rows="5" id="commentTextBody" cols="60" maxLength="300" name="commentTextBody" ref="commentTextBody" onChange={this.handleChange} value={this.state.commentTextBody} placeholder="Your comment here..." required/>
                    </div>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                <button class="btn btn-primary" disabled={!cenabled} onClick={() => { this.postComment() }} data-dismiss="modal">Post</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}