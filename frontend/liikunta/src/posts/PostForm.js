import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = ({
        title: "..",
        textBody: "",
        authorName: "",
        searchStart: "",
        searchEnd: "",
        gender: "",
        sport: ""
    });
    this.postNotification = this.postNotification.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  postNotification(event) {
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
  
  render() {
    return(
      <form>
        Title: <input type="text"
                      name="title"
                      ref="title"
                      onChange={this.handleChange}/><br/>
        Authort: <input type="text" 
                        name="author"
                        ref="author"
                        onChange={this.handleChange}/><br/>
        Sport: <input type="text" 
                      name="sport"
                      ref="sport"
                      onChange={this.handleChange}/><br/>
        textBody: <br/>
        <textarea rows="5" cols="60" maxLength="300" 
                  name="textBody"
                  ref="textBody"
                  onChange={this.handleChange}/><br/>
        Start time: <input type="date" 
                            name="start_time"
                            ref="start_time"
                            onChange={this.handleChange}/><br/>
        End time: <input type="date" 
                          name="end_time"
                          ref="end_time"
                          onChange={this.handleChange}/><br/>
        Gender:<input type="text" 
                      name ="gender"
                      ref="gender"
                      onChange={this.handleChange}/>
                  <Link to="/">
          <button onClick={this.postNotification}> Post</button><br/>
      </Link>
      </form>
    )
  }
}