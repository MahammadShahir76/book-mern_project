import React, { useState } from "react";
import { AppBar, Tab,Tabs, Toolbar, Typography } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
import {NavLink} from 'react-router-dom'

const Headers = () => {
    const[value,setvalue]=useState();
  return (
    <div>
      <AppBar sx={{backgroundColor:"#232F30"}} position="sticky">
        <Toolbar>
          <NavLink to="/" style={{color:"white"}}>
          <Typography>
            <BookIcon />
          </Typography></NavLink>
          <Tabs sx={{ml:"auto"}} textColor="inherit" indicatorColor="primary" value={value} onChange={(e,val)=>setvalue(val)}>
            <Tab LinkComponent={NavLink} to="/add" label="Add Product"/>
            <Tab LinkComponent={NavLink} to="/books" label="Books"/>
            <Tab LinkComponent={NavLink} to="/about" label="About Us"/>
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Headers;
