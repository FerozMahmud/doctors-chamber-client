import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Service/Service';

const services = [
    {
        name: "abc",
        description: "zzzzzzzzzzzzzzzzzzzz",
        img: "https://i.ibb.co/42VgMRp/profile-icon.png"
    },
    {
        name: "xyz",
        description: "yyyyyyyyyyyyyyyyyyyyy",
        img: "https://i.ibb.co/42VgMRp/profile-icon.png"
    },
    {
        name: "mnp",
        description: "xxxxxxxxxxxxxxxxxxxx",
        img: "https://i.ibb.co/42VgMRp/profile-icon.png"
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, mt: 8, color: "success.main" }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 3 }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;