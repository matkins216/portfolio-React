import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar } from '@mui/material';

export default function Navbar() {
    return (

        <AppBar sx={{ bgcolor: 'grey', color: 'black', boxShadow: 0 }}color="default" position="static">
            <Toolbar sx={{ mr: 1 }}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" sx={{ flexGrow: 0, m: 2}}>
                    Projects
                </Typography>
                <Typography variant="h6" sx={{ flexGrow: 0, m: 2 }}>
                    Music
                </Typography>
                <Typography variant="h6" sx={{ flexGrow: 0, m: 2}}>
                    About
                </Typography>
               
            </Toolbar>
            
        </AppBar>
    );
}

