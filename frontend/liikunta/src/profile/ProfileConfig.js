import React, {Component} from 'react';
import Profile from '../profile/Profile'
export default class ProfileConfig extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textBox: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.saveChange = this.saveChange.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]:event.target.value});
  }

  saveChange() {
    console.log("change saved")
    
    this.setState({textBox:""});
  }

  render() {
    const enabled = this.state.textBox.length > 0;
    let textBoxLength = this.state.textBox.length
    return(
      <div>
        <div className="card" style={{width:"400px"}}>
        <img className="card-img-top" 
             src="https://www.w3schools.com/bootstrap4/img_avatar1.png" 
             alt="Card image"/>
        <div className="card-body">
          <h4 className="card-title">John Doe</h4>
          <form>
            <textarea className="form-control" 
                      rows="5" 
                      id="textBox" 
                      cols="60" 
                      maxLength="300" 
                      name="textBox" 
                      ref="textBox" 
                      onChange={this.handleChange} 
                      value={this.state.textBox} 
                      placeholder="jotain" required/>
            <span style={{float:"right"}}>{textBoxLength}/300</span>
          </form>
        </div>
        <div className="card-footer">
        <button className="btn btn-primary" 
                  disabled = {!enabled}
                  onClick={this.saveChange} >Save</button>     
        </div>
      </div>

      </div>
    );
  }
}