
import React ,{ useState,useEffect}from "react";
import { Container,Row,Col } from "react-bootstrap";
import "./team.css"
const Team=()=>{

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    const info=[
        {
            
            name:"Prof.(Dr.) NEETU SHARMA",
            title: "Organiser",
            image:"/Team/neetumam1.jpeg",
            social:<h2 style={{backgroundImage:"linear-gradient(to left, #2d00f7, #ff0291)",color:"white",height:"100%",fontSize:"15px"}}><a href="mailto:hod.cse@gangainstitute.com" style={{color:"white",textDecoration:"none"}}><i class='fa fa-envelope' aria-hidden='true'></i> &emsp;hod.cse@gangainstitute.com</a></h2>
        },
        {
           
            name:"Er. MAHESH KUMAR",
            title: "Faculty Coordinator",
            image:"/Team/maheshsir.jpeg",
            social:<h2 style={{backgroundImage:"linear-gradient(to left, #2d00f7, #ff0291)",color:"white",height:"100%",fontSize:"15px"}}><a href="mailto:mahesh.cse@gangainstitute.com" style={{color:"white",textDecoration:"none"}}><i class='fa fa-envelope' aria-hidden='true'></i> &emsp;mahesh.cse@gangainstitute.com</a></h2>
 
        },
        {
            
            name:"ARIHANT JAIN",
            title: "President",
            image:"/Team/aj.jpg",
            social:<h2 style={{backgroundImage:"linear-gradient(to left, #2d00f7, #ff0291)",color:"white",height:"100%"}}><i class='fa fa-facebook' aria-hidden='true' onClick={event =>  window.location.href='https://www.facebook.com/profile.php?id=100021723864058'}></i> &emsp;<i class='fa fa-instagram' aria-hidden='true' onClick={event =>  window.location.href='https://www.instagram.com/arihantjain812000?r=nametag'}></i> &emsp;<i class='fa fa-linkedin' aria-hidden='true' onClick={event => window.location.href='https://www.linkedin.com/in/arihant-jain-8642881a6'}></i>&emsp;</h2>
        },
        {
           name:"DEEPANSHI JAIN",
             title: "Cultural Head",
             image:"/Team/deepanshi.jpeg",
             social:<h2 style={{backgroundImage:"linear-gradient(to left, #2d00f7, #ff0291)",color:"white",height:"100%"}}><i class='fa fa-facebook' aria-hidden='true' onClick={event =>  window.location.href='https://www.facebook.com/deepanshi.jain.10/'}></i> &emsp;<i class='fa fa-instagram' aria-hidden='true' onClick={event =>  window.location.href='https://www.instagram.com/deepanshi.jain.10/'}></i> &emsp;<i class='fa fa-linkedin' aria-hidden='true'  onClick={event => window.location.href='https://www.linkedin.com/in/deepanshi-jain-090a3a1a6/'}></i>&emsp;</h2>
        },
        {
              name:"ANKIT GUPTA",
             title: "Technical Events Head",
             image:"/Team/Ankit.png",
             social:<h2 style={{backgroundImage:"linear-gradient(to left, #2d00f7, #ff0291)",color:"white",height:"100%"}}><i class='fa fa-facebook' aria-hidden='true' onClick={event =>  window.location.href='https://www.facebook.com/profile.php?id=100007081412460'}></i> &emsp;<i class='fa fa-instagram' aria-hidden='true' onClick={event =>  window.location.href='https://www.instagram.com/ankit_gupta2611/'}></i> &emsp;<i class='fa fa-linkedin' aria-hidden='true'  onClick={event =>window.location.href='https://www.linkedin.com/in/ankit-gupta-7364b41ba/'}></i>&emsp;</h2>
        },
       
    ]

  const[data,setData]=useState(info)
  
 console.log(data)
 const datadata=(inf)=>{
     console.log("inf",inf)
     return(
         inf.map((item,index)=>{
           if(index<2){
              return(
                 
                 <Col lg={6} xl={6} md={6} sm={12} style={{paddingBottom:"50px"}}>
                <div className='Card'>
                  <div className='upper-container'>
                    <div className='image-container'>
                    <img src={`/images/${item.image}` } className="img" alt='' height="100px" width="100px" />
                      </div>
                  </div>
                  <div className='lower-info'>
                    <h3 className="title"> { item.name } </h3>
                    <h4> { item.title } </h4>
             <h3 class="social" style={{bottom:"0px"}}>{item.social}</h3>
                    {/*  */}
                  </div>
                </div>
                
                </Col>
             )
           }
            else{
              return(
                 
                <Col lg={4} xl={4} md={6} sm={12} style={{paddingBottom:"50px"}}>
               <div className='Card'>
                 <div className='upper-container'>
                   <div className='image-container'>
                   <img src={`/images/${item.image}` } className="img" alt='' height="100px" width="100px" />
                     </div>
                 </div>
                 <div className='lower-info'>
                   <h3 className="title"> { item.name } </h3>
                   <h4> { item.title } </h4>
            <h3 class="social" style={{bottom:"0px"}}>{item.social}</h3>
                   {/*  */}
                 </div>
               </div>
               
               </Col>
            )
            }
         })
     )

 }

    return(
    <Container>
        <Row>
   {datadata(data)}</Row>
   </Container>
    )
  }
    


export default Team
