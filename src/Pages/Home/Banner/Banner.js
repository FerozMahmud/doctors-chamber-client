import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import bg from '../../../Asset/Image/doctor-patient.jpg'
import banner from '../../../Asset/Image/doctorshappy.jpg'
import { Button, Typography } from '@mui/material';

const bannerBg = {
    background: `url(${banner})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "center center",
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    backgroundBlendMode: 'lighten, luminosity',
    height: "520px",
    marginTop: 16
}

const verticalCenter = {
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center',
    height: 280
}

const Banner = () => {
    return (
        <Box style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ verticalCenter, textAlign: 'center' }} sx={{ mt: 10 }} xs={12} md={6}>
                    <Box>
                        <Typography variant="h3" style={{ color: '#231F3E', fontWeight: 450 }}>
                            Let’s talk about<br />a healthier today
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, mx: 5, fontSize: 18, fontWeight: 350, color: '#231F3E' }}>
                            A doctor's warmth has more healing power upon the patient than all the medical tools in the world.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5975DC' }}>Get an appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} sx={{ my: 12 }} style={verticalCenter}>
                    <Box sx={{ boxShadow: 3 }}><img src={bg} alt="" style={{ width: '400px' }} /></Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Banner;