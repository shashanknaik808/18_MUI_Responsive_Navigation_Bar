import React, { useState } from 'react';
import { AppBar, Box, Button, Grid, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import ShoppingCartCheckout from '@mui/icons-material/ShoppingCartCheckout';
import DrawerComp from './DrawerComp';

function Navbar({ links }) {
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    console.log(isMatch);
    const [value, setValue] = useState(0);
    return (
        <AppBar sx={{
            backgroundImage: 'linear-gradient(90deg, rgba(180, 58, 58, 1) 2%, rgba(49, 49, 116, 1) 36%, rgba(105, 0, 161, 1) 73%, rgba(166, 69, 252, 1) 100%)'
        }}>
            <Toolbar>
                
                {isMatch ? <>
                    <DrawerComp />
                </> : <Grid sx={{ placeItems: "center" }} container>
                    <Grid item xs={2}>
                        <Typography>
                            <ShoppingCartCheckout />
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Tabs indicatorColor="secondary" textColor='inherit' value={value} onChange={(e, val) => setValue(val)}>
                            {links.map((link, index) => (
                                <Tab key={index} label={link} />
                            ))}
                        </Tabs>
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={3}>
                        <Box display="flex">
                            <Button sx={{ marginLeft: 'auto', background: "rgba(180, 58, 58, 1)" }} variant='contained'>Login</Button>
                            <Button sx={{ marginLeft: 1, background: "rgba(180, 58, 58, 1)" }} variant='contained'>SignUp</Button>
                        </Box>
                    </Grid>
                </Grid>}

            </Toolbar>
        </AppBar>
    );
}
export default Navbar;