import React from 'react'
import pages from './NavbarLinks';
import {
    AppBar,
    Box,
    Container, 
    Toolbar, 
    Button,
    Avatar,
    IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import pic from "../../Assets/pic.jpg";

export default function Header({toggleDrawer}) {
    

    const navigate=useNavigate();
    return (
        <AppBar
        position='static'
        elevation={0}
        sx={{
            backgroundColor:"transparent",
            height:"11vh"
        }}
        >
            <Container maxWidth="xl"> 
                <Toolbar disableGutters>
                    <Avatar 
                    alt="Goutham Ananda" 
                    src={pic} 
                    onClick={()=>{
                        navigate("/")
                    }}
                    sx={{
                    width: 50, 
                    height: 50, 
                    cursor:"pointer"
                    }}/>
                    <Box 
                    sx={{
                        flex: 1
                    }}
                    />
                    <Box
                    sx={{
                    display:{xs:"none",sm:"block"}
                    }}
                    >
                       {
                           pages.map(
                               (page)=>{
                                return(
                                    <Button 
                                    variant="text"
                                    color="primary"
                                    onClick={()=>{
                                        navigate(page.path)
                                    }}
                                    >
                                        {page.text}
                                    </Button>                                              
                                )
                               }
                           )
                       }

                   </Box>

                   <IconButton 
                       size="medium"
                       sx={{
                           display: {xs:"block",sm:"none"}
                       }}
                       onClick={toggleDrawer(true)}
                       >
                           <MenuIcon/>
                       </IconButton>
              
                </Toolbar>
            </Container>
        </AppBar>
    )
}
