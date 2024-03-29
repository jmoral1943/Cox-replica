import React from "react";

const List = props => (
  <div className="List">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="List__Checkmark"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
    <p className="List__Text">{props.service}</p>
  </div>
);

export default List;
