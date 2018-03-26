import React, {Component} from 'react';

export default class PostTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        title: "",
        textBody: "",
        authorName: "",
        searchStart: "",
        searchEnd: "",
        gender: "",
        sport: ""
      }
    }
  }

  componentWillMount() {
    fetch('')
  }
}