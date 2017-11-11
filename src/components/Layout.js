import React, { Component } from 'react';
import {Row, Col, SideNav, SideNavItem, Button} from 'react-materialize';
import $ from 'jquery';
import jQuery from 'jquery';
import './Layout.css';



class Layout extends Component {

  contructor() {
      
  }

  componentDidMount() {    

    (function($){
       $(function(){

        $('a').click(function(){  
                    
          $('html, body').stop().animate({
            scrollTop: $( $(this).attr('href') ).offset().top - 20
            }, 400);
            return false;
          });
          $('.scrollTop a').scrollTop();

        //$('.button-collapse').sideNav();
    
      }); // end of document ready
    })(jQuery); // end of jQuery name space        
  }

  render() {    

    var textHeader = { 
    }
        
    var divStyle = {
      "paddingLeft": "300px",
      "height": "640px"
    };

    var homeDivStyle = {
      backgroundColor:  "#fff",
      backgroundImage: `url(${'images/header.jpg'})`,      
      height: "640px",      
      backgroundSize: "78%",
      width: "95%",
      backgroundPositionX: "300px"
    }    

    var logoStyle = {
      height: "60px", width: "200px", marginTop: "100px", marginBottom: "60px"
    }

    var homeStyle = {
      backgroundColor: "#fff", backgroundImage: `url(${'images/header.jpg'})`, height: "670px", backgroundPosition: "center top", backgroundSize: "cover", position: "relative", textAlign: "center"
    }

    
    return (
      
      <div>
          <ul id="slide-out" className="side-nav fixed">            
            <img id="logo" src="/images/logo.png" style={logoStyle} />          
            <li><a href="#HOME">HOME</a></li>
            <li><a href="#ABOUT">ABOUT ME</a></li>
            <li><a href="#SERVICES">SERVICES</a></li>
            <li><a href="#PORTFOLIO">PORTFOLIO</a></li>
            <li><a href="#CONTACT">CONTACT ME</a></li>
          </ul>
          {/* <a href="#" data-activates="slide-out" className="button-collapse show-on-large"><i className="material-icons">menu</i></a> */}

          <div id="HOME" className="header-bg" style={homeStyle}>
          <div style={{color: "#555", position: "absolute", textAlign: "center", top: "300px", left: "0px", verticalAlign: "middle", width: "100%", zIndex: 8, fontFamily: "fantasy", fontSize: "77px", fontWeight: "800" }}>
            <h2>
              HI, I&#8217;M <br/>
              <span style={{color: "#ff0000"}}>
                Beimar Medina
              </span>
            </h2>
          </div>
            
          </div>                    

          <article style={divStyle}>
          <h1 id="ABOUT">2. About</h1>
          <p>Currently works well on <b>all modern browsers</b> such as recent versions of <b>Chrome, Safari, Opera, Firefox and IE10+</b>. I have also tested this on current mobile operating systems such as <b>iOS6, iOS7, Jellybean and BlackBerry's OS 10 Software</b>.</p>
          </article>

          <article style={divStyle}>
          <h1 id="SERVICES">3. Services</h1>
          <p>The current version of the code is maintained on <b>GitHub</b>, this could be an old version!</p>        
          </article>

          <article style={divStyle}>
            <h1 id="PORTFOLIO">4. Portfolio</h1>
            <p>This script was written by Matt Litherland @mattsince87 and is intended for public use. please <b>do not</b> sell this script as an individual product. It may be included in your projects that are sold as an entire website or application.</p>            
          </article>

          <article style={divStyle}>
            <h1 id="CONTACT">5. Contact</h1>
            <p>This script was written by Matt Litherland @mattsince87 and is intended for public use. please <b>do not</b> sell this script as an individual product. It may be included in your projects that are sold as an entire website or application.</p>            
          </article> 
      </div>
    );
  }
}

export default Layout;