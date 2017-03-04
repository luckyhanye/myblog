import React from "react"

import axios from "axios"

class Blog extends React.Component{
  constructor(){
    super();
    this.state={

    }
  }
  componentDidMount(){
    axios.get('https://raw.githubusercontent.com/newming/demodata/master/duopingshidai.json')
      .then(res=>console.log(res))
  }
  render(){
    return(
      <div>
        blog
      </div>
    )
  }
}


export default Blog
