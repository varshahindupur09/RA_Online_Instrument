import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import logo from '../images/UCF_Logo_1.png'; // Adjust the path as needed

const Navbar = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#000000' }}> {/* Use UCF colors */}
            <Toolbar>
                <Grid container alignItems="center" spacing={2}>
                    <Grid item xs={6}>
                        <img src={logo} alt="UCF Logo" style={{ height: '50px', paddingRight: '16px' }} /> {/* Adjust the height as needed */}
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{ textAlign: 'right', color: '#FFD700' }}> {/* Use UCF colors */}
                            {/* <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                EXPLANATION OF RESEARCH
                            </Typography> */}
                            <Typography variant="h6">
                                Title of Study: Data Visualization in Managerial Judgments
                            </Typography>
                            <Typography variant="h6">
                                Principal Investigator: Kelly Wellman
                            </Typography>
                            <Typography variant="h6">
                                Faculty Supervisor: Dr. Theresa Libby
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
