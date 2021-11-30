import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import Bg from '../../../Asset/Image/appoientmentBg.png'

const appointmentBg = {
    background: `url(${Bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "center center",
    backgroundColor: 'rgba(40, 55, 70, 0.8)',
    backgroundBlendMode: 'darken, luminosity',
    height: "100%",
    marginTop: 150
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: 400, marginTop: -125, marginBottom: -4 }}
                        src="https://i.ibb.co/k8zg1qt/Male-young-doctor-transparent-PNG.png" alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    textAlign: 'left'
                }}>
                    <Box sx={{ m: 4 }}>
                        <Typography variant="h6" sx={{ mb: 2 }} style={{ color: '#48CAF3' }}>
                            Appoinment
                        </Typography>
                        <Typography variant="h4" style={{ color: 'white' }}>
                            Make an appoinment<br />Today
                        </Typography>
                        <Typography variant="h4" sx={{ my: 4 }} style={{ color: 'white', fontSize: 15, fontWeight: 300 }}>
                            The only end-to-end solution for social care.
                            <br />
                            We are creating an efficient system of care within the country to improve health.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5975DC' }}>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;