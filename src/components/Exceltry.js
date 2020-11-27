import React ,{useEffect , useState, Fragment}from "react";
import { csv } from 'd3';
import { Form } from "react-bootstrap";
import dataex from './Problem Statement GITAM.csv';
import { useTable , usePagination  } from "react-table";
import GetStatement from "./GetStatement";
// import 'reactjs-popup/dist/index.css'
import './Problem.css'

const ProblemStatements=()=>{
  var [probl,setProb]=useState([])
  var [disable,setDisable]=useState(false)
  var [problem,setProblem]=useState([])
  // const [value,setValue]=useState("all")
      
      useEffect(()=>{
          window.scrollTo(0, 0)
console.log("callres")
csv(dataex).then(data=>{
  // console.log(probl)
  var prob= data;
  setProb(prob);
  setProblem(prob)
})

},[])
// console.log(probl)
const TableCell = ({ value }) => (
  <div>
    <p>{value}</p>
  </div>
)
  const change =(value)=>{
     console.log(value); 
     var probles=problem.slice()
var datap=[]
console.log(datap)
if(value=="all"){
  datap=probles
  setDisable(false)
}
else{
 probles.forEach((element,index) => {
   
   if(element['DOMAIN']==value){
console.log(element)
datap.push(element)
setDisable(true)
   }
  else{
    
  }
 }

 ); 
}
 
 console.log(datap)
setProb(datap)
  }
    const sorted=(event)=>{
console.log(event.target.value)
// setValue(event.target.value)

change(event.target.value)



//  setProb(datap)
// forceUpdate()
    }  
     

      const data = React.useMemo(
        () => {return probl.map((item,index)=>{
          
            return(
            {
              sno:index+1,
              domain:item["DOMAIN"],
              ps:item["PROBLEM STATEMENTS"],
              ps_code:item["PS CODE"],
              ps_title:item["PS TITLE"]    
          }
          )         
            
          
          
                })},
        [probl]
      )
    
      const columns = React.useMemo(
        () => [
         
          {
            Header: 'CODE ',
            accessor: 'ps_code', // accessor is the "key" in the data
            Cell: TableCell
          },
          {
            Header: 'DOMAIN',
            accessor: 'domain',
            Cell: TableCell
          },
           {
            Header: 'TITLE ',
            accessor: 'ps_title', // accessor is the "key" in the data
            Cell: TableCell
          },
          {
            Header: 'PROBLEM STATEMENT',
            accessor: 'ps', // accessor is the "key" in the data
            Cell: GetStatement
          },
         
        ],
        []
      )
    
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        // rows,
        prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
      } = useTable({ columns, data,initialState: { pageIndex: 0,pageSize: 10 }, }, usePagination)
    
      return (
        <Fragment>
          <h1 className="h1"> PROBLEM STATEMENTS</h1>
          <Form className="form">
          <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Control as="select" onChange={sorted.bind(this)}>
      <option value="all">ALL</option>
      <option value="MOBILE APP DEVELOPMENT">Mobile App Development</option>
      <option value="WEB APPLICATION">WEB APPLICATION</option>
      <option value="Smart Technologies">Smart Technologies</option>
      <option value="Cyber Security">CYBER SECURITY</option>
      <option value="INNOVATION">INNOVATIONS</option>
    </Form.Control>
  </Form.Group>
  
  
  
</Form>
        <table {...getTableProps()} style={{ border: 'solid 1px blue', width:"auto" }}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th
                    {...column.getHeaderProps()}
                    
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
          </tbody>
        </table>
        <div className="pagination" >
       
        <button onClick={() => previousPage()} disabled={!canPreviousPage} >
          {'<'}
        </button>{' '}
        <button className='number' onClick={() => gotoPage(0)} disabled={disable}>
          {'1'}
        </button>
        <button className='number' onClick={() => gotoPage(1)} disabled={disable}>
          {'2'}
        </button>
        <button className='number' onClick={() => gotoPage(2)} disabled={disable}>
          {'3'}
        </button>
        <button className='number' onClick={() => gotoPage(3)} disabled={disable}>
          {'4'}
        </button>
        <button className='number' onClick={() => gotoPage(4)} disabled={disable}>
          {'5'}
        </button>
         
       
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
       
    
        
       
      </div>
        </Fragment>
      )
    
    

}
export default ProblemStatements