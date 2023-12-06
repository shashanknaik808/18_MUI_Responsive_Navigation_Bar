import React from 'react';
import {
    AppBar,
    Box,
    Button,
    Grid,
    Tab,
    Tabs,
    Toolbar,
    Typography
} from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

function Navbar() {
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <Grid container>
                        <Grid item xs={2}>
                            <Typography>
                                <ShoppingCartCheckoutIcon />
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Tabs indicatorColor="Secondary" textColor='inherit' value={1}>
                                <Tab label="Products" />
                                <Tab label="Overview" />
                                <Tab label="Pricing" />
                            </Tabs>
                        </Grid>
                        <Grid item xs={1} />
                        <Grid item xs={3}>
                            <Box>
                                <Button variant='contained'>Login</Button>
                                <Button variant='contained'>SignUp</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;