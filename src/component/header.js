import React from 'react';

class Header extends React.Component {
  handleClick(){
    
  }
  render () {
    return(
      <header>
        <button><i className="fa fa-home" aria-hidden="true"></i> 首页</button>
        <h2>我的博客</h2>
        <button onClick={this.handleClick.bind(this)}><i className="fa fa-arrow-left" aria-hidden="true"></i> 返回</button>
      </header>
    )
  }
}

export default Header;
