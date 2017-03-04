import React from 'react';

class Header extends React.Component {
  render () {
    return(
      <header>
        <button><i className="fa fa-home" aria-hidden="true"></i> 首页</button>
        <h2><i className="fa fa-github-square" aria-hidden="true"></i>我的博客</h2>
        <button><i className="fa fa-arrow-left" aria-hidden="true"></i> 返回</button>
      </header>
    )
  }
}

export default Header;
