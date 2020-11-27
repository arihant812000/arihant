import React ,{useEffect , Fragment}from "react";
import  AOS from "aos";
import Faq from 'react-faq-component';
import "aos/dist/aos.css";
import { Container,Row,Col } from "react-bootstrap";
import './FAQ.css'
const Faqs=()=>{
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
        AOS.refresh();
          window.scrollTo(0, 0)
      }, []);
      
      const data = {
        
        rows: [
          {
            title: " What is WEB-A-THON ?",
            content: "WEB-A-THON is a Virtual Hackathon. Whether you are a beginner or expert ,here is a perfect chance to show your skills and witness a competitive yet inclusive developer community around it. In light of the CoronaVirus outbreak, your safety and well being are our primary concern. Hence all the activities Related to WEB-A-THON like workshops,talks will be conducted online. "
          },
          {
            title: " What is the goal of WEB-A-THON?",
            content: " We want to create an environment that embraces new ideas and technology solutions. A place where technology designers and developers can come to help the industry, and a safe zone Research and Development teams to geek out without having to worry about failure. We know it takes longer than a weekend to build great solutions, but this is ample time to form teams of good people and begin creating great solutions."
          },
          {
            title: "What is the team size ?",
            content: "You can participate as solo or your can make the team in range of 2 to 5."
          },
          {
            title: "What are the benefits of participating ?",
            content: "As a participant, the biggest prize for you is the experience and learning you will gain."
          },
          {
            title: " How much does it cost?",
            content: "WEB-A-THON is absolutely free to attend!"
          },
          {
            title: "What if I want to edit your team or want to change your problem statement?",
            content: "If you have any changes or edits in your registrations, mail on <a href='mailto:apptechtell@gmail.com'>apptechtell@gmail.com</a>. We'll get back to you shortly for that! But remember, this change can be done only once! So think carefully before you make any changes."
          },
          {
            title: "Can I start working on my Web before the event ?",
            content: "Yes, you may start working on the project on the first day of registering itself. This will help you pitch your ideas in a better way and also give you an upperhand over other teams."
          },
          {
            title: " What if I don't know how to code?",
            content: "Not a problem! The entire WEB-A-THON team knew very little when they each attended their very first hackathon. It’s entirely irrelevant what your experience is going into a hackathon, it’s more about your interest in technology. Every WEB-A-THON Member is passionate about making their hackathons very welcoming and beginner-friendly."
          }
        
        ]
      }
    
return(<Fragment>
  <Container>
  <Row style={{width:"100%"}} >
  
    <Col lg={12} md={12} sm={12}><img src="/images/FAQ.png" className="imagefaq" ></img></Col>
  </Row>
  </Container>
 
 <div style={{width:"80%",marginLeft:"10%",marginTop:"-500px",marginBottom:"100px"}}>
   <Faq data={data}
        styles={{
          width:"50%",
          bgColor: "#000033",
          rowTitleColor: "white",
          // rowTitleTextSize: '20px',
          rowContentColor: "#f1c40f",
          // rowContentTextSize: '15px',
          rowContentPaddingTop: '10px',
          rowContentPaddingBottom: '30px',
          rowContentPaddingLeft: '20px',
          rowContentPaddingRight: '20px',
          arrowColor: "white",
          background:"transparent"
          }} 
         
        /></div>
        
        
</Fragment>)
}
export default Faqs