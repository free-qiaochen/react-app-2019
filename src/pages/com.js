import React from 'react';
import { withRouter } from 'react-router-dom'

function Com (props) {
  console.log(props)
  return (
    <div className="home">
      <div className="conts">
        com内容区
      </div>
      {/* <Router /> */}
      {props.children}
    </div>
  );
}

export default withRouter(Com);

