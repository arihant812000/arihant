import React ,{Fragment,useState,useEffect} from "react";
import ReactDOM from 'react-dom';
import axios from "axios"
import Counter from "./Counter";
import { Form,Button ,Container,Row,Col} from "react-bootstrap";
const Register=()=>{
const [teamName, setTeamName]= useState()
const[memNum,setMemNum]=useState()
const [disable,setdisable]=useState(true)
const [teamMember,setTeamMember]=useState()
const [apiMessage,setApiMessage]=useState("")
const [problem,setproblem]=useState()
const team=[]
useEffect(() => {
  window.scrollTo(0, 0)
}, [])
const submitTeam=()=>{
  console.log(teamMember)
  setdisable(true)

axios.post('https://web-a-thon.000webhostapp.com/addPart.php', JSON.stringify(teamMember))
.then(function (response) {
  console.log(response.data.message);
  setApiMessage(response.data.message)
})
.catch(function (error) {
  console.log(error);
});

 
}
const submit=(event)=>{
  event.preventDefault()

  team.push({
    team: teamName,
    name: event.target.name.value,
    prob: problem,
    roll: event.target.roll.value,
    phone: event.target.phn.value,
    mail: event.target.mail.value,
    university : event.target.uni.value,
    college: event.target.col.value,
    course: event.target.course.value,
    semister: event.target.sem.value
  })
  event.target.submit.disabled=true
  if(team.length==memNum){
    setdisable(false)
    console.log(team)
    setTeamMember(team)
  }
 console.log (team)
  
}
const handleteam=(e)=>{
    setTeamName(e.target.value)
}

  const probst=(e)=>{
    setproblem(e.target.value)
  }

    const handleChange=(e)=>{
        setMemNum(e.target.value)
        
        
         
        console.log(memNum)
    }
    console.log(problem)
    if(apiMessage===""){
    return(
   
        
        <Container className = "register" style={{color:"#fff"}}>
         
            <h2 style ={{display:"flex", alignItems: "center" , justifyContent: "center", marginTop :"50px",color:"#f1c40f"}}>REGISTRATION ENDS IN :</h2>
             <Counter/>
           
           
  
          
            
        
             
            
            <h1 style={{textAlign:"center",margin:"50px",color:"#f1c40f"}}>REGISTER YOUR TEAM</h1>
             <Form style={{margin:"30px"}}>
        <Row style={{width:"100%"}}>
            
    <Col lg={4} md={4} sm={12}>
    <Form.Group controlId="formBasicEmail">
    <Form.Label><h5> Team Name</h5></Form.Label>
    <Form.Control type="text" onChange={handleteam.bind(this)} placeholder="Enter Team Name" />
    
  </Form.Group>
     
    </Col>
    
  
    <Col lg={5} md={5} sm={12}>
        <Form.Group controlId="formBasicEmail">
    <Form.Label><h5> Problem statement</h5></Form.Label>
    <Form.Control as="select" onChange={probst.bind(this)}>
    <option >CODE</option>
    <option value="G001">G001</option>
    <option value="G002">G002</option>
    <option value="G003">G003</option>
    <option value="G004">G004</option>
    <option value="G005">G005</option>
    <option value="G006">G006</option>
    <option value="G007">G007</option>
    <option value="G008">G008</option>
    <option value="G009">G009</option>
    <option value="G010">G010</option>
    <option value="G011">G011</option>
    <option value="G012">G012</option>
    <option value="G013">G013</option>
    <option value="G014">G014</option>
    <option value="G015">G015</option>
    <option value="G016">G016</option>
    <option value="G017">G017</option>
    <option value="G018">G018</option>
    <option value="G019">G019</option>
    <option value="G020">G020</option>
    <option value="G021">G021</option>
    <option value="G022">G022</option>
    <option value="G023">G023</option>
    <option value="G024">G024</option>
    <option value="G025">G025</option>
    <option value="G026">G026</option>
    <option value="G027">G027</option>
    <option value="G028">G028</option>
    <option value="G029">G029</option>
    <option value="G030">G030</option>
    <option value="G031">G031</option>
    <option value="G032">G032</option>
    <option value="G033">G033</option>
    <option value="G034">G034</option>
    <option value="G035">G035</option>
    <option value="G036">G036</option>
    <option value="G037">G037</option>
    <option value="G038">G038</option>
    <option value="G039">G039</option>
    <option value="G040">G040</option>
    <option value="G041">G041</option>
    <option value="G042">G042</option>
    <option value="G043">G043</option>
    <option value="G044">G044</option>
    <option value="G045">G045</option>
    <option value="G046">G046</option>
    <option value="G047">G047</option>
    <option value="G048">G048</option>
    <option value="G049">G049</option>
    <option value="G050">G050</option>
    </Form.Control>
  </Form.Group>

            </Col>

            <Col lg={3} md={3} sm={12}>
        <Form.Group controlId="formBasicEmail">
    <Form.Label><h5> Team Size</h5></Form.Label>
    <Form.Control as="select"  onChange={handleChange.bind(this)}>
    <option >Team Size</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
     </Form.Control>
    
  </Form.Group>
</Col>
  </Row>
</Form>

{(()=>{
    const data=[]
    const form=(  <Form style={{padding:"25px" , marginLeft:"10px"}} onSubmit={submit.bind(this)}>
        <Row style={{width:"100%"}}>
            
    <Col lg={6} md={6} sm={12}>
    <Form.Group controlId="formBasicEmail">
    <Form.Label>NAME</Form.Label>
    <Form.Control type="text"  placeholder="Enter Name" name="name" required/>
    
  </Form.Group>
     
    </Col>
    <Col lg={6} md={6} sm={12}>
    <Form.Group controlId="formBasicEmail">
    <Form.Label>Roll Number/ Registration Number</Form.Label>
    <Form.Control type="text"  placeholder="Enter  Roll No" name="roll" required/>
    </Form.Group>
    </Col>
    
  </Row>
  <Row style={{width:"100%"}}>
            
            <Col lg={6} md={6} sm={12}>
            <Form.Group controlId="formBasicEmail">
            <Form.Label>Contact No</Form.Label>
            <Form.Control type="text"  placeholder=" Enter Contact No" name="phn" required/>
            
          </Form.Group>
             
            </Col>
            <Col lg={6} md={6} sm={12}>
            <Form.Group controlId="formBasicEmail">
            <Form.Label>Mail Id</Form.Label>
            <Form.Control type="mail"  placeholder="Enter Mail Id" name="mail" required/>
            </Form.Group>
            </Col>
            
          </Row>
          <Row style={{width:"100%"}}>
            
            <Col lg={6} md={6} sm={12}>
            <Form.Group controlId="formBasicEmail">
            <Form.Label>University </Form.Label>
            <Form.Control type="text" placeholder="Enter  University id" name="uni" required/>
            
          </Form.Group>
             
            </Col>
            <Col lg={6} md={6} sm={12}>
            <Form.Group controlId="formBasicEmail">
            <Form.Label>COLLEGE NAME</Form.Label>
            <Form.Control type="text"  placeholder="Enter College Name" name="col" required/>
            </Form.Group>
            </Col>
            
          </Row>
          <Row style={{width:"100%"}}>
            
            <Col lg={6} md={6} sm={12}>
            <Form.Group controlId="formBasicEmail">
            <Form.Label>COURSE</Form.Label>
            <Form.Control as="select" placeholder="Enter course " name="course" requited >  
              <option >COURSE</option>
              <option value="B.TECH/B.E">B.TECH/B.E</option>
              <option value="BCA">BCA</option>
              <option value="M.TECH">M.TECH</option>
              <option value="MCA">MCA</option>
            </Form.Control>
           </Form.Group>
             
            </Col>
            <Col lg={6} md={6} sm={12}>
            <Form.Group controlId="formBasicEmail">
            <Form.Label>SEMESTER</Form.Label>
            <Form.Control as="select" name="sem"> 
              <option > SEMESTER</option>
              <option value="1">1st</option>
              <option value="2">2nd</option>
              <option value="3">3rd</option>
              <option value="4">4th</option>
              <option value="5">5th</option>
              <option value="6">6th</option>
              <option value="7">7th</option>
              <option value="8">8th</option>
            </Form.Control>
            </Form.Group>
              </Col>
                        
          </Row>
  <Button variant="primary" type="submit" name="submit"  disabled={false}>
    ADD MEMBER
  </Button>
</Form>)
    for (let i = 0; i < memNum; i++) {
   if(i==0){
     data.push( <fieldset style={{border:"2px solid white",marginBottom:"50px", width:"100%"}}>
      <legend style={{textAlign:"center",width:"auto"}}>LEADER DETAILS</legend>
      {form}
    </fieldset> )
   }
       else{
        data.push( <fieldset style={{border:"2px solid white",marginBottom:"50px", width:"100%"}}>
        <legend style={{textAlign:"center",width:"auto"}}>MEMBER {i} DETAILS</legend>
        {form}
      </fieldset> )
       }
            
        }
        return data
        })()}
<Button variant="primary" onClick={submitTeam} disabled={disable}>
    SUBMIT TEAM
  </Button>
        </Container>
  
  

        // <h1>hello</h1>
    
)  
    }
    else if(apiMessage=="team added successfully"){
     return (<Fragment>
       
          <img src="/images/added.png"  style={{width:"30%",color:"white",display:"block",margin:"auto",padding:"30px"}}/>
       <h1 style={{color:"#f1c40f",width:"100%",margin:"auto",textAlign:"center"}}>Team Added Successfully</h1>
     <h5 style={{color:"white",width:"100%",margin:"auto",textAlign:"center",padding:"20px"}}>we will contact you soon</h5>
      
        
     
   
     </Fragment>)
    }
else{
  return (
    <Fragment>
       
          <img src="/images/robot.png"  style={{width:"30%",color:"white",display:"block",margin:"auto",padding:"30px"}}/>
       <h1 style={{color:"#f1c40f",width:"100%",margin:"auto",textAlign:"center"}}>OOPS!!!<br/>Some error has occured.<br/> Please try again or Contact us on our Mail Id :<br/> apptechtell@gmail.com<br/>or call at : 9518407256</h1>
    
      
        
     
   
     </Fragment>

    )
}
}
export default Register