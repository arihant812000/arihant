import React ,{useEffect , Fragment}from "react";
import  AOS from "aos";
import "aos/dist/aos.css";
import {navigate} from "@reach/router"
import { Container,Row,Col, Card} from "react-bootstrap";
import './Home.css';
const Home=()=>{
  const data=[{
    name:"Arihant"
  }]
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
        AOS.refresh();
      
          window.scrollTo(0, 0)
        
      }, []);
      const reg=()=>{
    
        navigate("/register");
        
       }
   
   const click=()=>{
    
    window.open('https://www.gangainstitute.com/', '_blank');
    
   }
return(<Fragment>
  <Container style={{color:"white",marginTop:"30px",textAlign:"center"}} fluid>
  <h1 style ={{fontSize:"40px" , fontFamily: 'Rye'}} >GANGA INSTITUTE OF TECHNOLOGY AND MANAGEMENT</h1>
  <h5 style={{color:"#ccccff"}}>presents</h5>
  <Row style={{width:"100%"}}>
    <Col lg={6} md={7} sm={12} style={{color:"white",marginTop:"30px",textAlign:"center"}} data-aos="fade-down">
    
      
     <h1 style={{color:"#f1c40f"}}  className="web">WEB-A-THON</h1>
     <h3 style={{textAlign:"center"}} >(A NATIONAL LEVEL VIRTUAL-HACKATHON)</h3>
     <h5>ON</h5> <br/>
     <h1>18-19 DECEMBER 2020</h1> <br/>
     <button className="regbtn" onClick={reg}><span>Register</span></button>
    </Col>
    {/* <Col lg={3} md={3} sm={12}><img src="/images/image1.png" className="image" data-aos="fade-down"></img></Col> */}
    <Col lg={3} md={3} sm={12}><img src="/images/image2.png" className="image" data-aos="fade-down"></img></Col>
  </Row>
  <section class="section">
  <h1 className="data " >WEB-A-THON??</h1>
<p className="p">In this hackathon, we try to use web to hack into real world problem to solve them better. It's a 24–72 hours product making competition where every team needs to develop a product from scratch during those pretty hours. A team size can vary from 2–6 depending on the organization who is organizing it. </p>
<p className="p"> This WEB-A-THON is usually a coding competition that can last upto 48 hours where software programmers, developers, designers, etc. come together to build and design something innovative and productive.</p>
 
<p className="p">The WEB-A-THON is a virtual national-level hackathon in which you will be provided with a set of real-life problems and you have to provide a solution for the same. It is a great platform to showcase your hidden talent and skills.</p>

</section>

<Row>
  <Col lg={11} md ={11} sm ={11}> 
  <img src="/images/Winning.png" className="winimage" ></img>
  </Col>
  </Row>
  <hr  style = {{borderBottom:"2px solid #FFFF66	"}}/>
{/* <Row style={{width:"100%",marginTop:"100px"}}>
  <Col xl={4} md={12} sm={12}> <img src="/images/dir.jpg" className="imagedir" data-aos="fade-left"></img></Col>
    <Col xl={8} md={12} sm={12}>
    
    <h1 style={{fontSize:"40px",color:"#f1c40f"}}>From the Desk of Director </h1>
      <div className= "info" >
      <h3>"I am confident that the participants will find WEB-A-Thon 2020 a very valuable experience. 
        I wish the WEB-A-THON great success. 
        I hope you have a good time and opportunity to connect with experts from the scientific 
        community and influential entrepreneurs from industries."</h3>
      <h4 style={{textAlign:"center"}}>- Dr. Aman Aggarwal<br/></h4>
      <h3 style={{textAlign:"center"}}>(GANGA INSTITUTE OF TECHNOLOGY AND MANAGEMENT)</h3>
      </div>
    </Col>

  </Row> */}

  <Row>
  <Col lg= {6} md={6} sm = {12} >
    <br/>
      <h1 style={{fontSize:"35px",color:"#f1c40f"}}>Chairman's Message </h1><br/>
        <Card style={{  backgroundColor:"transparent" }}>
          <Card.Img cascade style={{ height: '20rem' , maxWidth:"30rem" , margin:"auto"}} src="/images/chairman.jpg" />
          <Card.Body cascade className="text-left" >
            
            <Card.Text  sytle ={{color:"black"}} > <p>"WEB-A-THON focuses on the National and International Industrial needs and also
               encourages students to work hard in this direction to provide technical solutions. We motivate students to excel in all
                spheres of Technical and Managerial skills.

I wish all a successful life ahead."</p>
        <h4 style={{textAlign:"right"}}>-Mr. Bharat Gupta<br/></h4>
        <h3 style={{textAlign:"right"}}>(Chairman, 
Ganga Group of Institutions)</h3>
        </Card.Text>
           
          </Card.Body>
        </Card>
      </Col>
 
      <Col lg= {6} md={6} sm = {12} ><br/>
      <h1 style={{fontSize:"35px",color:"#f1c40f"}}>Director's Message </h1><br/>
        <Card style={{  backgroundColor:"transparent" }}>
          <Card.Img cascade style={{ height: '20rem' , maxWidth:"30rem" , margin:"auto"}} src="/images/dir.jpg" />
          <Card.Body cascade className="text-left" >
          <Card.Text  sytle ={{color:"black"}} > <p>"I am confident that the participants will find WEB-A-Thon 2020 a very valuable experience. 
        I wish the WEB-A-THON great success. 
        I hope you have a good time and opportunity to connect with experts from the academic 
        community.I wish all a successful life ahead."</p>
        <h4 style={{textAlign:"right"}}>-Prof.(Dr.) Aman Aggarwal<br/></h4>
        <h3 style={{textAlign:"right"}}>(Director , Ganga Institute Of Technology And Management)</h3>
        </Card.Text>

           
           
          </Card.Body>
        </Card>
      </Col>
     
    </Row>
    <Row>
    <h1 className = "ogb" style={{fontSize:"40px",color:"#f1c40f"}}>ORGANISED BY </h1>
    </Row>
  <Row style={{width:"100%",marginTop:"50px"}}>
    
  <Col xl={6} md={6} sm={12}>
  
    <Card style={{ width: '100%' ,backgroundColor:"transparent"}}>
  <Card.Img variant="top" src="/images/apptechtell.png" style={{width:"30%",margin:"auto" , color:"brown",backgroundColor:"#8080ff",borderRadius:"50%",padding:"10px"}}/>
  <Card.Body>
    <Card.Title>APPTECHTELL</Card.Title>
    <Card.Text>
    IT CLUB @ GANGA INSTITUTE OF TECHNOLOGY AND MANAGEMENT
    </Card.Text>
  </Card.Body>
  
</Card></Col>
    <Col xl={6} md={6} sm={12} onClick={click}>
   <Card style={{ width: '100%' ,backgroundColor:"transparent"}}>
  <Card.Img variant="top" src="/images/gitam-logo.png" style={{width:"40%",margin:"auto"}}/>
  <Card.Body>
    <Card.Title>GANGA INSTITUTE OF  TECHNOLOGY AND MANAGEMENT</Card.Title>
    <Card.Text>
    Approved by AICTE, New Delhi & Affiliated to Maharshi Dayanand University , Rohtak and HSBTE, Panchkula
    </Card.Text>
    <Card.Text>
    
    </Card.Text>
  </Card.Body>
  
</Card>
    </Col>
    
  </Row>
  
  <section id="cliens" class="cliens section-bg">
      <div class="container">
          <h1 id = "logoheading">In Association with</h1>
        <div class="row" data-aos="zoom-in">

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="/images/logos/webtek.png" class="img-fluid" alt=""/>
          </div>

          <div class="col-lg-3 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="/images/logos/iant.png" class="img-fluid" alt=""/>
          </div>

          <div class="col-lg-3 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="/images/logos/myweb.png" class="img-fluid" alt=""/>
          </div>

          <div class="col-lg-3 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="/images/logos/avinfosys.png" class="img-fluid" alt=""/>
          </div>

          <div class="col-lg-4 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="/images/logos/aptron_logo.png" class="img-fluid" alt=""/>
          </div>

          <div class="col-lg-4 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="/images/logos/hcllogo.png" class="img-fluid" alt="" style={{maxWidth:"80%"}}/>
          </div>
          <div class="col-lg-4 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="/images/logos/spektra.jpeg" class="img-fluid" alt=""/>
          </div>
        </div>

      </div>
    </section>

</Container>



 



</Fragment>)
}
export default Home