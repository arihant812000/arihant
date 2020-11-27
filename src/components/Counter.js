import React,{useEffect,useState} from 'react';
// import  Timer from "time-counter ";
import './Counter.css'
import { Container,Row,Col, Card} from "react-bootstrap";

const Counter=()=>{
    const [day,setDay]=useState()
    const [hour,sethour]=useState()
    const [min,setmin]=useState()
    const [sec,setsec]=useState()
    const fun=()=>{
         var countDownDate = new Date ("Dec 10,2020 00:00:00").getTime();
    var x = setInterval(function(){
        var now = new Date().getTime();
        var dd = countDownDate - now;

        var days= Math.floor(dd/(1000*60*60*24));
        var hours = Math.floor((dd%(1000*60*60*24))/(1000*60*60));
        var minutes = Math.floor((dd%(1000*60*60))/(1000*60));
        var seconds = Math.floor((dd%(1000*60))/1000);

        // document.querySelector(".timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
       setDay(days)
       sethour(hours)
       setmin(minutes)
       setsec(seconds)

        if(dd <= 0){
            clearInterval(x);
        }
        },1000);
    }

useEffect(()=>{
fun()
   
},1000)
    

return(
<Container style={{color:"white",marginTop:"50px",textAlign:"center"}} fluid>
    <Row style={{width:"100%"}}>
        <Col lg={3} md={3} sm={3} xs={6}>
        <div className="countd">
<span id ="days">{day}</span>
                DAYS
            </div>
        </Col>
        <Col lg={3} md={3} sm={3} xs={6}>
        <div class="countd">
                <span id ="hours">{hour}</span>
                HOURS
            </div>
        </Col>
        <Col lg={3} md={3} sm={3} xs={6}>
        <div class="countd">
                <span id ="minutes">{min}</span>
                MINUTES
            </div>
        </Col>
        <Col lg={3} md={3} sm={3} xs={6}>
        <div class="countd">
                <span id ="seconds">{sec}</span>
                SECONDS
            </div>
        </Col>
    </Row>
        
    </Container>)
 
      
}
export default Counter