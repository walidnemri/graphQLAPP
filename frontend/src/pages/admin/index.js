import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import {
    ListItemText,
    Button
} from '@material-ui/core';
import List from '@material-ui/core/List';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import AdminNav from '../../navigation/adminNav'


import './styles.css' 


const Index = (props) => {

    const handleCreate = (e,url) => {
        e.preventDefault()
        //history.push(url)
    }
   
    return (        
        <Router>
        <div className="container">
            <div className="menu">
            <List component="nav" aria-label="main mailbox folders">
                <Link to='/admin/users' style={{textDecoration: 'none'}}>
                <ListItem button>
                    <ListItemText style={{color: '#c7d1d6'}} primary="Users" />
                </ListItem>
                </Link>
                <Link to='/admin/category' style={{textDecoration: 'none'}}>
                <ListItem button>
                    <ListItemText  style={{color: '#c7d1d6'}} primary="Category" />
                </ListItem>
                </Link>
            </List>
            </div>
            <div className="vue">
                <AdminNav/>
            </div>
        </div>
        </Router>
    )
}

export default Index