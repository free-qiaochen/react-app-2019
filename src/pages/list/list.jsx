import React from 'react';
import { Button } from 'antd-mobile'

function List () {
  return (
    <div className="home">
      <div className="conts">
        list内容区
      </div>
      <Button
        type="primary"
        className="commodity-module__bottom__btn"
        style={{
          backgroundColor: '0',
          color: '#000'
        }}
        onClick={() => goPackage()}
      >{'list btn'}</Button>
    </div>
  );
}
function goPackage (params) {
  console.log('---')

}

export default List;
