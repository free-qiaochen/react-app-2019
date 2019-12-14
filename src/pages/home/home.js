import React from 'react';
import './home.scss';
import { Button } from 'antd-mobile'

function Home () {
  return (
    <div className="home">
      <div className="conts">
        内容区
      </div>
      <Button
        type="primary"
        className="commodity-module__bottom__btn"
        style={{
          backgroundColor: '0',
          color: '#000'
        }}
        onClick={() => goPackage()}
      >{'home btn'}</Button>
    </div>
  );
}
function goPackage (params) {
  console.log('---')

}

export default Home;
