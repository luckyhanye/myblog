import React from 'react';
import Header from './component/header.js';
import Footer from './component/footer.js';
import LeftNav from './component/leftNav.js';

class App extends React.Component {
  constructor(){
    super()
    this.state={
      showLeft:false,
      title:"主页"
    }
  }
  setTitle(){
    this.setState({
      title:this.props.router.isActive('/',true) ? '主页':
            this.props.router.isActive('/blog') ? '博客':
            this.props.router.isActive('/work') ? '作品':
            this.props.router.isActive('/about') ? '关于':'文章'
    })
  }
  componentWillReceiveProps(){
    this.setTitle()
  }
  componentWillMount(){
    this.setLeftNav()
    window.onresize=this.setLeftNav.bind(this)
    this.setTitle()
  }
  setLeftNav(){
    // if(window.innerWidth>750){
    //   this.setState({showLeft:true})
    // }else{
    //   this.setState({showLeft:false})
    // }
    this.setState({showLeft:window.innerWidth>750 ? true:false})
  }
  render () {
    console.log(this.state.title);
    return(
      <div className="root">
        {this.state.showLeft ? <LeftNav title={this.state.title}/>:<Header title={this.state.title}/>}
        <div className="mywrap">
          {this.props.children}
        </div>
        {this.state.showLeft ? null:<Footer/>}
      </div>
    )
  }
}

export default App;
