import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Avatar, FormControlLabel, Switch } from '@mui/material';
import { Link } from 'react-router-dom';



export default function ButtonAppBar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={props.mode}>
        <Toolbar sx={{ display: "flex",justifyContent:"space-between"  }}>
          <Box>
            <Typography variant="h6" component="div" sx={{ flexGrow: 0.5 }}>
              Text Analyzer App
            </Typography>
          </Box>
          <Box>
            <Link style={{ textDecoration: "none", paddingRight: "15%", color: props.mode.color }} to={"/"}>Home</Link>
            <Link style={{ textDecoration: "none", color: props.mode.color }} to={"/about"}>About</Link>
          </Box>

          <Box sx={{display:"flex"}}>
            <div onClick={() => props.toggle("green")} style={{ backgroundColor: "green", marginInline: "8px", borderRadius:"50%", height: "25px", width: "25px", cursor: "pointer" }}></div>
            <div onClick={() => props.toggle("yellow")} style={{ backgroundColor: "yellow", marginInline: "8px", borderRadius:"50%", height: "25px", width: "25px", cursor: "pointer" }}></div>
            <div onClick={() => props.toggle("red")} style={{ backgroundColor: "red", marginInline: "8px", borderRadius:"50%", height: "25px", width: "25px", cursor: "pointer" }}></div>
            <div onClick={() => props.toggle("blue")} style={{ backgroundColor: "blue", marginInline: "8px", borderRadius:"50%", height: "25px", width: "25px", cursor: "pointer" }}></div>
            <div onClick={() => props.toggle("black")} style={{ backgroundColor: "black", marginInline: "8px", borderRadius:"50%", height: "25px", width: "25px", cursor: "pointer" }}></div>
          </Box>


          {/* <FormControlLabel onClick={props.toggle} control={<Switch />} label={props.mode.backgroundColor === "white" ? "Enable Dark Mode" : "Disable Dark Mode"} /> */}

          <Box>
            <IconButton sx={{p:"0"}}>
              <Avatar alt="Remy Sharp" src={require("../images/1.jpg")} />
            </IconButton>
          </Box>

        </Toolbar>
      </AppBar>
    </Box>
  );
}