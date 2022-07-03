import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Form} from 'react-bootstrap'
import  DeleteForever from '@mui/icons-material/DeleteForever'
import reload from '../../../images/reload.gif'
const AdminDashboard = () => {
    const [allEvent,setAllEvent] = useState([])

    // update stutas of user

    const statusHandler=(id,status)=>{
      let modifiedEvents = []
      allEvent.forEach(event =>{
        if (event._id === id) {
           event.status = status
        }
        modifiedEvents.push(event)
      })
      setAllEvent(modifiedEvents)
      const modifiedStatus = {id,status}

      fetch('http://localhost:4000/update-status',{
          method:'put',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(modifiedStatus)
      })
      .then(res=>res.json())
      .then(result=>{
            if (result.modifiedCount) {
              alert(`set to order ${status}`)
            }
      })
  }
     

//  show all order/events of user 
    useEffect(()=>{
        fetch('http://localhost:4000/all-events-show')
        .then(res=> res.json())
        .then(data => setAllEvent(data))
    },[])


    // delete order of user
    const deleteAdminEvent = id =>{
      const procced =  window.confirm("Are you sure you want to delete this product")
      if (procced) {
       fetch(`http://localhost:4000/allEvents/${id}`,{
           method:"delete"
       })
       .then(res => res.json())
       .then(data=> {
           if (data.deletedCount > 0) {
                alert('voluntiar data has been deleted')
                const reamingProduct = allEvent.filter(allEevet => allEevet._id !== id)
                setAllEvent(reamingProduct)
           }
       })
      }
   }
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
      


    return (
        <div>
            <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                          <TableRow>
                            <StyledTableCell align='left'>Name</StyledTableCell>
                            <StyledTableCell align='center' >Email</StyledTableCell>
                            <StyledTableCell align="left">OrganicName</StyledTableCell>
                            <StyledTableCell align="left">Date</StyledTableCell>
                            <StyledTableCell align="left">Delete</StyledTableCell>
                            <StyledTableCell align="left">Action</StyledTableCell>
                            
                        
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {
                            allEvent.length < 1 && <img src={reload} className='w-44 m-auto mt-5' alt="" srcset="" /> 
                          }
           {
            allEvent.map(allEvent => {
                const {name,email,organicName,date,status} = allEvent
                return  <StyledTableRow key={allEvent._id}> 
                              <StyledTableCell align="left">{name}</StyledTableCell>
                              <StyledTableCell align="left">{email}</StyledTableCell>
                              <StyledTableCell align="left">{organicName}</StyledTableCell>
                              <StyledTableCell align="left">{date}</StyledTableCell>
                              <StyledTableCell align="left" > <button className='bg-blue-200 rounded-sm p-2' onClick={()=>deleteAdminEvent(allEvent._id)}><DeleteForever className='text-red-700'/></button> </StyledTableCell>
                              <StyledTableCell align="left">{
                               <Form.Control as="select" id='status-option' className={status==='pending' ? 'text-red-400 font-semibold': status ==='Done' ? 'text-green-400 font-semibold' : 'text-sky-600 font-semibold'}
                               defaultValue={status}
                               onChange={e => statusHandler(allEvent._id,e.target.value)}
                               >
                               <option >pending</option>
                               <option >On going</option> 
                               <option >Done</option>
                              </Form.Control>
                             
                               }
                               </StyledTableCell>
                            </StyledTableRow>
                    
            })
           }
             </TableBody>
                      </Table>
                    </TableContainer>
        </div>
    );
};

export default AdminDashboard;