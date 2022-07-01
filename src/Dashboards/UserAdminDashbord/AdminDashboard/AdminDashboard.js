import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import  DeleteForever from '@mui/icons-material/DeleteForever'
import reload from '../../../images/reload.gif'
const AdminDashboard = () => {
    const [allEvent,setAllEvent] = useState([])
    
    useEffect(()=>{
        fetch('http://localhost:4000/all-events-show')
        .then(res=> res.json())
        .then(data => setAllEvent(data))
    },[])

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
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {
                            allEvent.length < 1 && <img src={reload} className='w-44 m-auto mt-5' alt="" srcset="" /> 
                          }
           {
            allEvent.map(allEvent => {
                const {name,email,organicName,date} = allEvent
                return  <StyledTableRow>
                              <StyledTableCell align="left">{name}</StyledTableCell>
                              <StyledTableCell align="left">{email}</StyledTableCell>
                              <StyledTableCell align="left">{organicName}</StyledTableCell>
                              <StyledTableCell align="left">{date}</StyledTableCell>
                              <StyledTableCell align="left"><DeleteForever/></StyledTableCell>
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