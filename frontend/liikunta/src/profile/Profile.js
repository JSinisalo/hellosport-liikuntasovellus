import React, {Component} from 'react';

export default class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="card" style={{width:"400px"}}>
        <img className="card-img-top" 
             src="https://www.w3schools.com/bootstrap4/img_avatar1.png" 
             alt="Card image"/>
        <div className="card-body">
          <h4 className="card-title">John Doe</h4>
          <p className="card-text">Some example text.</p>
        </div>
      </div>
    )
  }
}