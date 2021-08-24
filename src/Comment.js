import React, { Component } from 'react';

 export default class Comment extends Component {
   render() {
       return(
       <div className="comment"><h1>{this.props.commentText}</h1></div>
       )
   }
 }