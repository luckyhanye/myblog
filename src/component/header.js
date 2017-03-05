import React from 'react';
import {hashHistory} from 'react-router';

class Header extends React.Component {
  handleClick(){
    hashHistory.goBack()
  }
  render () {
    return(
      <header>
        <button onClick={()=>hashHistory.push('/')}><i className="fa fa-home" aria-hidden="true"></i> 首页</button>
        <h2>我的{this.props.title}</h2>
        <button onClick={this.handleClick.bind(this)}><i className="fa fa-arrow-left" aria-hidden="true"></i> 返回</button>
      </header>
    )
  }
}

export default Header;
