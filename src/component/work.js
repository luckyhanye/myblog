import React from "react"
import Pic1 from "../images/pic1.jpg"
import Pic2 from "../images/pic2.jpg"
import Pic3 from "../images/pic3.jpg"

class Work extends React.Component{
  constructor(){
    super();
    this.state={
      data:[]
    }
  }
  render(){
    return(
      <div className="work-root">
        <div className="work-card">
          <img src={Pic1}/>
          <a href="https://luckyhanye.github.io/todomvc">todomvc</a>
        </div>
        <div className="work-card">
          <img src={Pic2}/>
          <a href="https://luckyhanye.github.io/carousel">轮播图</a>
        </div>
        <div className="work-card">
          <img src={Pic3}/>
          <a href="https://luckyhanye.github.io">笔记</a>
        </div>
      </div>
    )
  }
}


export default Work
