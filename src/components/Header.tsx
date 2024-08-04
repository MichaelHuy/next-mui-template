'use client'

import React, { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => {

    console.log('Render header....')
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setMobileMoreAnchorEl(null);
    };

    const menuItems = [
        { label: 'All Categories', href: '/categories' },
        {
            label: 'News', href: '/news', subItems: [
                { label: 'Technology', href: '/news/technology' },
                { label: 'Business', href: '/news/business' },
            ]
        },
        { label: 'Blog', href: '/blog' },
        { label: 'About', href: '/about' },
    ];

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
        >
            {menuItems.map((item) => (
                <MenuItem key={item.label} onClick={handleMenuClose}>
                    <Link href={item.href}>
                        {item.label}
                    </Link>
                </MenuItem>
            ))}
        </Menu>
    );

    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            open={Boolean(mobileMoreAnchorEl)}
            onClose={handleMenuClose}
        >
            {menuItems.map((item) => (
                <MenuItem key={item.label} onClick={handleMenuClose}>
                    <Link href={item.href}>
                        {item.label}
                    </Link>
                </MenuItem>
            ))}
        </Menu>
    );

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    My App
                </Typography>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    {menuItems.map((item) => (
                        <Button
                            key={item.label}
                            color="inherit"
                            onClick={item.subItems ? handleMenuOpen : undefined}
                        >
                            {item.label}
                        </Button>
                    ))}
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleMobileMenuOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>
            </Toolbar>
            {renderMenu}
            {renderMobileMenu}
        </AppBar>
    );
};

export default Header;