import React from 'react';
// import { Button } from 'antd-mobile'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './home/home'
import List from './list/list'
import Com from './com'

function Page (props) {
  return (
    <div className="home">
      <Route path="/" render={() =>
        <Com>
          {/* <Switch> */}
            <Route path="/home" component={Home} />
            <Route path="/list" component={List} />
          {/* </Switch> */}
        </Com>
      } />
    </div>
  );
}

export default Page;
