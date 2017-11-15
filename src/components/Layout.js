import React, { Component } from 'react';
import {Row, Col, SideNav, Input, SideNavItem, Button, Tabs, Tab} from 'react-materialize';
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
    
      }); 
    })(jQuery); 
  }

  render() {        
            
    var homeStyle = {
      backgroundColor: "#fff", backgroundImage: `url(${'images/header.jpg'})`, height: "auto", minHeight: "700px", backgroundPosition: "center top", backgroundSize: "cover", position: "relative", textAlign: "center"
    }

    var titleStyle = {
      fontFamily: "fantasy", fontSize: "40px", fontWeight: "800", marginTop: "36px", height: "100px"
    }
    
    return (
      
      <div>
        
          <ul id="slide-out" className="side-nav fixed">            
            <img id="logo" src="/images/logo.png" className="logo-bg" />          
            <li><a href="#HOME">HOME</a></li>
            <li><a href="#ABOUT">ABOUT ME</a></li>
            <li><a href="#SERVICES">SERVICES</a></li>
            <li><a href="#PORTFOLIO">PORTFOLIO</a></li>
            <li><a href="#CONTACT">CONTACT ME</a></li>
          </ul>
          <a href="#" data-activates="slide-out" className="button-collapse show-on-large button-collapse-bg"><i className="material-icons">menu</i></a>

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
            <Row className="header-bg" style={titleStyle}>
              <Col s={12}>ABOUT ME<span style={{color: "#ff0000"}}> | </span>Professional Software Developer</Col>
            </Row>
            <Row className="header-bg" style={{height: "580px"}}>
	            <Col s={12} m={6}>
                <p style={{fontFamily: "cursive", textAlign: "left"}}>Quisque in metus tristique, gravida dolor ut, varius neque. Maecenas ac risus aliquam, facilisis massa id, vulputate elit. Curabitur pretium arcu dictum, faucibus diam quis, commodo turpis. Proin viverra, risus eget egestas sodales, felis ante scelerisque ligula, eget condimentum diam ligula eu tellus.</p>
                <p style={{fontFamily: "cursive", textAlign: "left"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, exercitationem, laboriosam, modi non quisquam voluptas accusamus numquam ipsum reiciendis saepe veniam cupiditate explicabo autem. Repudiandae tempore dolore deserunt nemo voluptatum consectetur aspernatur expedita aliquid iste illo enim molestias vel animi quod.</p>
              </Col>
	            <Col s={12} m={6}>
                <img id="face" src="/images/face2.jpg" style={{width: "300px"}} /> 
              </Col>
            </Row>
          </div>   

          <div id="SERVICES">            
            <Row style={titleStyle}>
              <Col s={12}>MY SERVICES<span style={{color: "#ff0000"}}> | </span>WHAT I CAN DO</Col>
            </Row>
            <Row className="header-bg" style={{height: "580px"}}>
            <Col s={12}>
              <Tabs className='tab-demo z-depth-1'>
                  <Tab title="Software Design" active>
                    <p style={{fontFamily: "cursive", textAlign: "left", paddingLeft: "30px", paddingRight: "30px"}}>Quisque in metus tristique, gravida dolor ut, varius neque. Maecenas ac risus aliquam, facilisis massa id, vulputate elit. Curabitur pretium arcu dictum, faucibus diam quis, commodo turpis. Proin viverra, risus eget egestas sodales, felis ante scelerisque ligula, eget condimentum diam ligula eu tellus.</p>
                  </Tab>
                  <Tab title="Software Architecture">
                    <p style={{fontFamily: "cursive", textAlign: "left", paddingLeft: "30px", paddingRight: "30px"}}>Lorem ipsum dolor sit amet, lacinia commodo erat integer. Suspendisse nec justo, maecenas duis nulla nascetur nisl, non arcu illo enim, cursus sit, eleifend aliquam neque varius sit nonummy. Donec pede do aliquam consectetuer, odio tellus nulla. Vestibulum maecenas senectus nunc amet, at rutrum magnis. Vel vel nonummy nulla suscipit nunc mi, quam id tempor risus neque hac cursus, hac pellentesque cursus nulla ut. Nulla euismod dignissim orci congue dolor mauris, placerat dui vehicula nunc sodales nullam. Nunc blandit egestas vestibulum integer, eget maecenas pellentesque vel odio, mollis mauris, pede condimentum lacus in ut dis suscipit. Nec sed praesent tincidunt pellentesque, at potenti ipsum adipiscing facilisis in laoreet, ac vehicula eget sodales accumsan sollicitudin rhoncus, vestibulum phasellus cras justo, integer arcu nibh. Magna velit, imperdiet pede felis tristique. Eget eu dolor imperdiet pharetra nulla wisi, sed ad pede id odio, vivamus sociis elit purus, orci leo nec.</p>
                  </Tab>
                  <Tab title="Development" >
                    <p style={{fontFamily: "cursive", textAlign: "left", paddingLeft: "30px", paddingRight: "30px"}}>Nullam nullam suspendisse vivamus eleifend, accumsan pellentesque accumsan nunc suscipit felis, et condimentum pretium, nullam tristique ligula vel arcu a, id quis ipsum sed imperdiet ut. Faucibus dolor at mus tortor cursus, vitae euismod in convallis enim integer justo. Lobortis pede aliquam ac enim aliquam, ultricies dolor molestie aliquam vehicula lectus, suscipit sem varius id augue ut dolor, lobortis proin ultrices turpis eleifend nunc. Etiam felis, a interdum feugiat sodales aenean luctus, amet litora in arcu, aliquet et vivamus diam imperdiet libero. Elit molestias ac vivamus ullamcorper erat. Eget libero amet, ante aut cras vestibulum velit leo, commodo nunc donec laoreet condimentum mauris metus, sit aliquam lacus leo. Augue metus. Nec tristique lorem aliquam nulla et, orci accumsan adipiscing nec urna ac leo, tincidunt feugiat morbi nullam. Vel dui tellus nunc aenean. Vivamus habitasse ac et etiam nec, massa in integer blandit, et gravida conubia, fusce nunc. Mauris class maecenas, a dignissim luctus in massa.</p>
                  </Tab>
                  <Tab title="Installation & Deployment" >
                    <p style={{fontFamily: "cursive", textAlign: "left", paddingLeft: "30px", paddingRight: "30px"}}>Vitae nunc pharetra, suspendisse dui proin orci posuere augue diam, sollicitudin sit purus, felis mauris dictumst ultricies. Ut sit excepturi felis pretium sit vestibulum, id ipsum ut quis. Ante vestibulum nullam pede vitae, sodales feugiat. Leo pede, ante pede minus nunc quam quis neque, sem magna nullam gravida cursus laoreet. Erat molestie adipiscing, dis in risus inventore, justo id, ac erat ipsum quisque. Non ac ut leo, velit et eu et et sodales id. Ut nulla felis laoreet turpis fringilla.</p>
                  </Tab>
                  <Tab title="Training" >
                    <p style={{fontFamily: "cursive", textAlign: "left", paddingLeft: "30px", paddingRight: "30px"}}>Purus lorem volutpat dui eu leo vel, luctus diam, nulla est egestas nonummy est. Sed lacinia dui rutrum sed nulla, neque turpis tellus, porttitor eget ultrices neque. Eu velit integer commodo mattis vitae. Nam tempor vitae dui faucibus, turpis ac vestibulum faucibus elit, a blandit sapien quis cras, vel ante, amet magna conubia pharetra facere. Integer risus tellus orci mattis dictumst integer, est vulputate erat vitae enim, mauris at nec molestie, non amet, urna amet eros blandit maecenas. Magna ridiculus non non turpis neque ultrices.</p>
                  </Tab>
              </Tabs>
            </Col>
            </Row>
          </div>

          <div id="PORTFOLIO">
          {/* <div style={{fontFamily: "fantasy", fontSize: "40px", fontWeight: "800", marginLeft: "0px", marginTop: "20px", height: "680px"}}>PORTFOLIO</div>             */}
            <Row style={titleStyle}>
                <Col s={12}>PORTFOLIO</Col>
            </Row>
            <Row className="header-bg" style={{height: "580px"}}>
              <Col s={12}>
              </Col>
            </Row>
          </div>                       

          <div id="CONTACT" style={{height: "700px"}}>
            {/* <div style={{fontFamily: "fantasy", fontSize: "40px", fontWeight: "800", marginLeft: "300px", marginTop: "20px", height: "680px"}}>SAY HELLO TO ME</div> */}
            <Row style={titleStyle}>
              <Col s={12}>SAY HELLO TO ME</Col>
            </Row>
            <Row className="header-bg">
              <Input placeholder="Name" s={12} m={6} label="Name" />
              <Input placeholder="Email" s={12} m={6} label="Email" />              
            </Row>
            <Row className="header-bg">
              <Input placeholder="Subject" s={12} m={12} label="Subject" />
            </Row>
            <Row className="header-bg">
              <Input type="textarea" placeholder="Message" s={12} m={12} label="Message" />
            </Row>
            <Row className="header-bg">
              <Button waves='light'>Send Message</Button>
            </Row>
          </div>          
      </div>
    );
  }
}

export default Layout;