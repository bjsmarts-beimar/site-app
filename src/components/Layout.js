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

          <div id="ABOUT">
            <div style={{fontFamily: "fantasy", fontSize: "40px", fontWeight: "800", marginLeft: "300px", marginTop: "36px", height: "680px"}}>ABOUT ME<span style={{color: "#ff0000"}}> | </span>Professional Software Developer</div>
          </div>   

          <div id="SERVICES">
            <div style={{fontFamily: "fantasy", fontSize: "40px", fontWeight: "800", marginLeft: "300px", marginTop: "20px", height: "680px"}}>MY SERVICES<span style={{color: "#ff0000"}}> | </span>WHAT I CAN DO</div>
          </div>

          <div id="PORTFOLIO">
            <div style={{fontFamily: "fantasy", fontSize: "40px", fontWeight: "800", marginLeft: "300px", marginTop: "20px", height: "680px"}}>PORTFOLIO</div>
          </div>                       

          <div id="CONTACT">
            <div style={{fontFamily: "fantasy", fontSize: "40px", fontWeight: "800", marginLeft: "300px", marginTop: "20px", height: "680px"}}>SAY HELLO TO ME</div>
          </div>          
      </div>
    );
  }
}

export default Layout;