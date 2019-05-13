// add Comment component here
import React from 'react';

const Comment = (props) => {
  return (
    <div className="comment">
     <h1>{props.commentText}</h1>
    </div>
  )
}

export default Comment;
