import React, {Component} from 'react';

export default class FullPost extends Component {
    constructor(props){
      super(props);
      this.state = {
        post: {
          title: "..",
          textBody: "",
          authorName: "",
          searchStart: "",
          searchEnd: "",
          gender: "",
          sport: ""
        }
      }
    }
    
    componentWillMount(){
        fetch('http://127.0.0.1:8080/notifications/'+this.props.match.params.postID)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    post: response
                });
                console.log(response);
            });
    }
    

    render(){
      console.log(this.props);
      return(
        <div className="card">
          <div className="articleHeaader">
            <h3>{this.state.post.title}</h3>
            <h5>{this.state.post.authorName} </h5>
          </div>
          <div className="articleContent">
            <p>
                {this.state.textBody.content}
            </p>
          </div>
        </div>
      );
        
    }
} 


