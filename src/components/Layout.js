import React, { Component } from 'react';
import {Row, Col, SideNav, SideNavItem, Button, Tabs, Tab} from 'react-materialize';
import $ from 'jquery';
import jQuery from 'jquery';
import './Layout.css';



class Layout extends Component {

  contructor() {

  }  

  componentDidMount() {  

    window.jQuery = window.$ = require('jquery');
    require('materialize-css/dist/js/materialize');
    
    $('ul.tabs').tabs();
    
    (function($){
       $(function(){

          $('.button-collapse').sideNav();
        
          $('a').click(function(){                                 
            
            if ( $(this)[0].offsetParent.className !== "side-nav fixed" )
            {                                          
              return true;
            }
                                
            $('html, body').stop().animate({
              scrollTop: $( $(this).attr('href') ).offset().top - 20
              }, 400);
              return false;
          });
          
          $('.scrollTop a').scrollTop();                        
    
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
          <a href="#" data-activates="slide-out" className="button-collapse show-on-large"><i className="material-icons">menu</i></a>

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
            <div style={{fontFamily: "fantasy", fontSize: "40px", fontWeight: "800", marginLeft: "300px", marginTop: "36px", height: "100px"}}>ABOUT ME<span style={{color: "#ff0000"}}> | </span>Professional Software Developer</div>
            <Row style={{marginLeft: "300px", height: "580px"}}>
	            <Col s={6}>
                <p style={{fontFamily: "cursive", textAlign: "left"}}>Quisque in metus tristique, gravida dolor ut, varius neque. Maecenas ac risus aliquam, facilisis massa id, vulputate elit. Curabitur pretium arcu dictum, faucibus diam quis, commodo turpis. Proin viverra, risus eget egestas sodales, felis ante scelerisque ligula, eget condimentum diam ligula eu tellus.</p>
                <p style={{fontFamily: "cursive", textAlign: "left"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, exercitationem, laboriosam, modi non quisquam voluptas accusamus numquam ipsum reiciendis saepe veniam cupiditate explicabo autem. Repudiandae tempore dolore deserunt nemo voluptatum consectetur aspernatur expedita aliquid iste illo enim molestias vel animi quod.</p>
              </Col>
	            <Col s={6}>
                <img id="face" src="/images/face.jpg" style={{width: "300px"}} /> 
              </Col>
            </Row>
          </div>   

          <div id="SERVICES">
            <div style={{fontFamily: "fantasy", fontSize: "40px", fontWeight: "800", marginLeft: "300px", marginTop: "20px", height: "100px"}}>MY SERVICES<span style={{color: "#ff0000"}}> | </span>WHAT I CAN DO</div>
            <Row style={{marginLeft: "300px", height: "580px"}}>
            <Tabs className='tab-demo z-depth-1'>
                <Tab title="Software Design" active>
                  <p style={{fontFamily: "cursive", textAlign: "left", paddingLeft: "30px", paddingRight: "30px"}}>Quisque in metus tristique, gravida dolor ut, varius neque. Maecenas ac risus aliquam, facilisis massa id, vulputate elit. Curabitur pretium arcu dictum, faucibus diam quis, commodo turpis. Proin viverra, risus eget egestas sodales, felis ante scelerisque ligula, eget condimentum diam ligula eu tellus.</p>
                </Tab>
                <Tab title="Software Architecture">
                  <p style={{fontFamily: "cursive", textAlign: "left", paddingLeft: "30px", paddingRight: "30px"}}>Quisque in metus tristique, gravida dolor ut, varius neque. Maecenas ac risus aliquam, facilisis massa id, vulputate elit. Curabitur pretium arcu dictum, faucibus diam quis, commodo turpis. Proin viverra, risus eget egestas sodales, felis ante scelerisque ligula, eget condimentum diam ligula eu tellus.</p>
                </Tab>
                <Tab title="Development" >
                  <p style={{fontFamily: "cursive", textAlign: "left", paddingLeft: "30px", paddingRight: "30px"}}>Quisque in metus tristique, gravida dolor ut, varius neque. Maecenas ac risus aliquam, facilisis massa id, vulputate elit. Curabitur pretium arcu dictum, faucibus diam quis, commodo turpis. Proin viverra, risus eget egestas sodales, felis ante scelerisque ligula, eget condimentum diam ligula eu tellus.</p>
                </Tab>
                <Tab title="Installation & Deployment" >
                  <p style={{fontFamily: "cursive", textAlign: "left", paddingLeft: "30px", paddingRight: "30px"}}>Quisque in metus tristique, gravida dolor ut, varius neque. Maecenas ac risus aliquam, facilisis massa id, vulputate elit. Curabitur pretium arcu dictum, faucibus diam quis, commodo turpis. Proin viverra, risus eget egestas sodales, felis ante scelerisque ligula, eget condimentum diam ligula eu tellus.</p>
                </Tab>
                <Tab title="Training" >
                  <p style={{fontFamily: "cursive", textAlign: "left", paddingLeft: "30px", paddingRight: "30px"}}>Quisque in metus tristique, gravida dolor ut, varius neque. Maecenas ac risus aliquam, facilisis massa id, vulputate elit. Curabitur pretium arcu dictum, faucibus diam quis, commodo turpis. Proin viverra, risus eget egestas sodales, felis ante scelerisque ligula, eget condimentum diam ligula eu tellus.</p>
                </Tab>
            </Tabs>
            </Row>
          </div>

          <div id="PORTFOLIO">
          <div style={{fontFamily: "fantasy", fontSize: "40px", fontWeight: "800", marginLeft: "300px", marginTop: "20px", height: "100px"}}>PORTFOLIO</div>
            <Row style={{marginLeft: "300px", height: "580px"}}>

            </Row>            
          </div>                       

          <div id="CONTACT">
            <div style={{fontFamily: "fantasy", fontSize: "40px", fontWeight: "800", marginLeft: "300px", marginTop: "20px", height: "680px"}}>SAY HELLO TO ME</div>
          </div>          
      </div>
    );
  }
}

export default Layout;