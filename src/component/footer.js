import React from 'react';
import {Link} from 'react-router';

class Footer extends React.Component {
  render () {
    return(
      <footer>
        <Link to="/" activeStyle={{color:"blue"}} onlyActiveOnIndex={true}><i className="fa fa-home" aria-hidden="true"></i> <br/> Home </Link>
        <div/>
        <Link to="/blog" activeStyle={{color:"blue"}}><i className="fa fa-envelope-open" aria-hidden="true"></i> <br/> Blog </Link>
        <div/>
        <Link to="/work" activeStyle={{color:"blue"}}><i className="fa fa-graduation-cap" aria-hidden="true"></i> <br/> Work </Link>
        <div/>
        <Link to="/about" activeStyle={{color:"blue"}}><i className="fa fa-user-circle-o" aria-hidden="true"></i> <br/> About </Link>
      </footer>
    )
  }
}

export default Footer;
