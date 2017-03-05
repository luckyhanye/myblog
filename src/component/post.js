import React from "react"
import axios from "axios"
import marked from "marked"      //转译markeddown  语法
import hljs from "highlight.js"



marked.setOptions({
  highlight: function (code) {
    return hljs.highlightAuto(code).value
  }
})


class Post extends React.Component{
  constructor(){
    super();
    this.state={
      data:''
    }
  }
  componentDidMount(){
    axios.get(`https://raw.githubusercontent.com/luckyhanye/myblog/master/blogs/${this.props.params.title}.md`)
      .then(res=>this.setState({data:res.data}))
  }
  render(){
    console.log("post======",this.props);
    return(
      <div>
        文章内容
        {this.state.data.length==0?'加载中……':
        <div dangerouslySetInnerHTML={{__html:marked(this.state.data)}}></div>
        }
      </div>
    )
  }
}


export default Post
