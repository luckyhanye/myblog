import React from 'react';
import Header from './component/header.js';
import Footer from './component/footer.js';

class App extends React.Component {
  render () {
    return(
      <div className="root">
        <Header/>
        <div className="mywrap">
          {this.props.children}
        </div>
        <Footer/>
      </div>
    )
  }
}

export default App;
