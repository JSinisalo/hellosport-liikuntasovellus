import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class AdminPost extends Component {

    render(){
        console.log(this.props.article);
        return(
            <div>This is adminPost</div>
        );
        
    }
} 