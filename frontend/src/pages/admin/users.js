import {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {
  Paper,
  Button
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import {
  Link,
} from "react-router-dom";

import {gql, useQuery} from '@apollo/client'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, prix, edit) {
  return { name,prix, edit };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0),
  createData('Ice cream sandwich', 237, 9.),
  createData('Eclair', 262, 16.0),
];

const query = gql`
query {
  users{
    id
    name
    age
  }
 }
`
const Users = () => {
  const classes = useStyles();

  const {loading, data} = useQuery(query)
  const [users, setUsers] = useState('')
  useEffect(() => {
    if (data) setUsers(data.users)
    
  },[loading])

  return (
    <>
    <div className="title">
      Users
    </div>
    <hr
      style={{
      color: '#3b4752',
      backgroundColor: '#3b4752',
      height: 5
    }}/>
    <div className="products">
    <div className="create" >
        <Link to="/admin/product/create" style={{textDecoration: 'none'}}>
            <Button variant="contained" color="primary">
                New User
            </Button>
        </Link>
    </div>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="cell">name</TableCell>
            <TableCell className="cell" align="right">age</TableCell>
            <TableCell className="cell" align="right">edit</TableCell>
            <TableCell className="cell" align="right">delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users && users.length ? users.map((user) => (
            
            <TableRow hover key={user.name}>
              <TableCell style={{color:'#3b4752'}} className="cell" component="th" scope="row">
                {user.name}
              </TableCell>
              <TableCell style={{color:'#3b4752'}}align="right">{user.age}</TableCell>
              
              <TableCell className="cell" align="right"><FontAwesomeIcon icon={faEdit}/></TableCell>
              <TableCell className="cell" align="right" ><FontAwesomeIcon style={{color:'#3b4752'}} icon={faTrash}/></TableCell>
            </TableRow>
            
          )):""}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </>
  );
}

export default Users