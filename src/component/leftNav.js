import React from "react"
import {Link,hashHistory} from "react-router"

class LeftNav extends React.Component{
  constructor(){
    super();
    this.state={

    }
  }
  render(){
    return(
      <div className="leftnav">
        <div className="navtop">
          <h3>我的{this.props.title}</h3>
          <button onClick={()=>hashHistory.push('/')}><i className="fa fa-home" aria-hidden="true"></i> 首页</button><br/>
          <button onClick={()=>hashHistory.goBack()}><i className="fa fa-arrow-left" aria-hidden="true"></i> 返回</button>
        </div>
        <Link to="/" activeStyle={{color:"#fcd475"}} onlyActiveOnIndex={true}><i className="fa fa-home" aria-hidden="true"></i>Home </Link>
        <Link to="/blog" activeStyle={{color:"#fcd475"}}><i className="fa fa-envelope-open" aria-hidden="true"></i>Blog </Link>
        <Link to="/work" activeStyle={{color:"#fcd475"}}><i className="fa fa-graduation-cap" aria-hidden="true"></i>Work </Link>
        <Link to="/about" activeStyle={{color:"#fcd475"}}><i className="fa fa-user-circle-o" aria-hidden="true"></i>About </Link>
      </div>
    )
  }
}


export default LeftNav
