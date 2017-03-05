import React from 'react';
import {Router,Route,browserHistory,IndexRoute} from "react-router"
import App from "./App.js"
import Home from "./component/home.js"
import Blog from "./component/blog.js"
import Work from "./component/work.js"
import About from "./component/about.js"
import Post from "./component/post.js"

export default function(){
  return(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="blog" component={Blog}/>
        <Route path="work" component={Work}/>
        <Route path="about" component={About}/>
        <Route path="post/:title" component={Post}/>
      </Route>
    </Router>
  )
}
