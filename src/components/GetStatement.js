import React,{useState} from "react";
import { Button,Modal ,Table } from "react-bootstrap";
import './Problem.css'
import './getStatement.css'

function MyVerticallyCenteredModal(props) {
  // console.log("data is ",props.data)
    return (
      <Modal className ="modal"
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter container"
        centered         
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            WEB-A-THON
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Table className= "mtable" striped bordered hover>
  <thead className="mthead">
    <tr calssName ="mtt">
      <th className ="mth" colSpan="2">PROBLEM DESCRIPTION</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td className ="">  Code </td>
      <td>{props.data.ps_code}</td>

    </tr>
    <tr>
      <td>Domain</td>
      <td>{props.data.domain}</td>

    </tr>
    <tr>
      <td className="mtitle" >Title</td>
      <td >{props.data.ps_title}</td>

    </tr>
    <tr>
      <td>Statement</td>
      <td className ="mtd">{props.data.ps}</td>

    </tr>
  </tbody>
</Table>
          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
const GetStatement=(row,column)=>{
    const [modalShow, setModalShow] = useState(false);
// console.log(row.cell.row.original)
    return (
      <>
        <p clssName="p" onClick={() => setModalShow(true)} style={{cursor:"pointer"}}>
          Click for complete description
        </p>
  
        <MyVerticallyCenteredModal
        data={row.cell.row.original}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
}
   export default GetStatement