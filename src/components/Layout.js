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
          
          console.log('click');
          console.log('$ ', $( $(this).attr('href') ).offset().top);

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
      color: "#555",
      position: "absolute",
      textAlign: "center",
      top: "250px",
      left: "140px",
      verticalAlign: "middle",
      width: "100%",
      zIndex: 8
  }

    var headerGg = {
      backgroundImage: `url(${'https://3.bp.blogspot.com/-tfJYx3gqzfU/WEWTofYzJ1I/AAAAAAAAAeA/g6GbdvUJacw_rwl246bVenNrF-A00WUTgCLcB/s1600/header.jpg'})`,      
      backgroundPosition: "center top",
      backgroundSsize: "cover",
      color: "#fff",
      float: "left",
      height: "670px",
      position: "relative",
      textAlign: "center",
      width: "100%"
    }

    
    var divStyle = {
      "paddingLeft": "300px",
      "height": "640px"
    };

    var homeDivStyle = {
      backgroundColor:  "#fff",
      backgroundImage: `url(${'https://3.bp.blogspot.com/-tfJYx3gqzfU/WEWTofYzJ1I/AAAAAAAAAeA/g6GbdvUJacw_rwl246bVenNrF-A00WUTgCLcB/s1600/header.jpg'})`,
      height: "640px",      
      backgroundSize: "78%",
      width: "95%",
      backgroundPositionX: "300px"
    }

    var nameStyle = {
      color: "#ff0000"
    }

    
    return (
      
      <div>
          <img alt="Studio Press " height="100px;" id="Header1_headerimg" src="{images\logo.png}" width="400px;" />
          <ul id="slide-out" className="side-nav fixed">            
            <li><a href="#HOME">HOME</a></li>
            <li><a href="#ABOUT">ABOUT ME</a></li>
            <li><a href="#SERVICES">SERVICES</a></li>
            <li><a href="#PORTFOLIO">PORTFOLIO</a></li>
            <li><a href="#CONTACT">CONTACT ME</a></li>
          </ul>
          {/* <a href="#" data-activates="slide-out" className="button-collapse show-on-large"><i className="material-icons">menu</i></a> */}

          <div id="HOME" style={homeDivStyle}>
            <div style={textHeader}>
            <h2>
              HI, I&#8217;M 
              <span style={nameStyle}>
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