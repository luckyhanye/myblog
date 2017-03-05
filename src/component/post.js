import React from "react"

class Post extends React.Component{
  constructor(){
    super();
    this.state={

    }
  }
  render(){
    console.log("post======",this.props);
    return(
      <div>
        文章内容
        {this.props.params.title}
      </div>
    )
  }
}


export default Post
