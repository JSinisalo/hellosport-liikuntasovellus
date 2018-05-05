import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-modal';
export default class AdminPostForm extends Component {

  constructor(props) {

    super(props);

    this.state = {
        title: "",
        textBody: "",
        authorName: ""
      };
    	
    this.postNotification = this.postNotification.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {

    this.setState({[event.target.name]: event.target.value});
  }

  postNotification() {

    fetch('http://localhost:8080/notifications/admin', {
      method: 'POST',
      body: JSON.stringify({
        title: this.state.title,
        textBody: this.state.textBody,
        authorName: this.state.authorName,
      }),
      headers: new Headers({ 'Content-Type': 'application/json'}) }).
      then((r) => { console.log(r); window.location.reload(false); });
  }
  
  render() {

    const { title, textBody, authorName, searchStart, searchEnd, gender, sport } = this.state;
    const enabled =
          title.length > 0 &&
          textBody.length > 0 &&
          authorName.length > 0;

    return(
      <div>
        <div class="modal fade" id="adminPostNotificationModal" style={{width:'100%', margin:'auto'}}>
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
       
        </div>
    )
  }
}