import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { styled } from '@mui/styles';

const StyledCard=styled(Box)(({theme})=>({
        color: theme.palette.text.secondary,
        backgroundColor: theme.palette.secondary.main,
        textAlign:"center",
        display:"flex",
        flexDirection:"column", 
        alignItems:"center",
        justifyContent:"space-evenly",            
        [theme.breakpoints.up('xs')]: {
            padding:10,
            marginInline:10,
            height: "10rem",
            width: "100%"
        }, 
        [theme.breakpoints.up('md')]: {
            borderRadius:10,
            height:"15rem",
            padding:20,         
        },  
}    
));




export default function Home() {
    return (   
            <Grid 
            container
            sx={{
                height:"90vh",
            }}
            spacing={1}
            >
                <Grid 
                xs="12"
                sx={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center"
                }} 
                item> 
                    <Typography 
                    variant="h2" 
                    component="h1" 
                    align="center"
                    sx={{
                        color:"text.main",
                        fontFamily:"Poppins,sans-serif",
                        fontSize:{xs:"3rem",sm:"4rem",md:"4.5rem"},
                        fontWeight:"200",
                    }}
                    >
                    Hello, I am Goutham Ananda
                    </Typography>
                </Grid>

                <Grid 
                xs={12} 
                md={6} 
                sx={{
                    display: "flex",
                    alignItems:"center",
                    justifyContent:"center",
                }} 
                item>
                    <StyledCard>
                        <Typography
                        variant='h4'
                        sx={{
                            fontSize:{xs:"1.5rem",md:"2rem"},
                            fontWeight:{xs:"400",md:"200"}
                        }}

                        >
                        Looking for a Design Engineer?
                        </Typography>
                       
                        <Button
                        variant='contained'
                        color="primary"
                        size="large"
                        >
                            Click Here!
                        </Button>
                    </StyledCard>
                   
                </Grid>

                <Grid 
                xs={12} 
                md={6} 
                sx={{
                    display: "flex",
                    alignItems:"center",
                    justifyContent:"center",
                }} 
                item>
                    <StyledCard>
                        <Typography
                        variant='h4'
                        sx={{
                            fontSize:{xs:"1.5rem",md:"2rem"},
                            fontWeight:{xs:"400",md:"200"}
                        }}

                        >
                        Looking for a Structural Engineer?
                        </Typography>
                       
                        <Button
                        variant='contained'
                        color="primary"
                        size="large"
                        >
                            Click Here!
                        </Button>
                    </StyledCard>
                   
                </Grid>
               
              

            </Grid>           
    )
}
