import React, { Component } from "react";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { sidebar, setSidebar } = this.props;

    return (
      <div id="navbar">
  
        <span className="toggler" onClick={e => setSidebar(!sidebar)} >
          
           <img className="logoImage" src = "/image/_logo.png"/>
        
          </span> 
{/* if 걸어서 login -> logout 설정 */}
        <span className="login">login</span>
        
        <a></a>
      </div>
    );
  }
}

export default Navbar;
