import Collapse from '@mui/material/Collapse';
import Drawer from '@mui/material/Drawer';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Link from 'next/link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { usePathname } from 'next/navigation';
import { useTheme } from '@mui/material/styles';

interface DrawerProps {
    open: boolean;
    onClose: () => void;
}

const drawerWidth = 240;

const menuItems = [
    { label: 'Home', href: '/' },
    {
        label: 'News',
        href: '/news',
        subItems: [
            { label: 'Blockchain', href: '/news/blockchain' },
            { label: 'Technical', href: '/news/technical' },
            { label: 'Programming', href: '/news/programming' },
        ]
    },
    { label: 'About', href: '/about' },
];

const DrawerContent: React.FC = () => {
    const [openSubMenu, setOpenSubMenu] = React.useState('');
    const pathname = usePathname();

    const handleSubMenuToggle = (label: string) => {
        setOpenSubMenu(openSubMenu === label ? '' : label);
    };

    return (
        <List>
            {menuItems.map((item) => (
                <React.Fragment key={item.label}>
                    <ListItem disablePadding>
                        <ListItemButton
                            component={Link}
                            href={item.href}
                            selected={pathname === item.href}
                            onClick={() => item.subItems && handleSubMenuToggle(item.label)}
                        >
                            <ListItemText primary={item.label} />
                            {item.subItems && (openSubMenu === item.label ? <ExpandLess /> : <ExpandMore />)}
                        </ListItemButton>
                    </ListItem>
                    {item.subItems && (
                        <Collapse in={openSubMenu === item.label} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {item.subItems.map((subItem) => (
                                    <ListItemButton
                                        key={subItem.label}
                                        sx={{ pl: 4 }}
                                        component={Link}
                                        href={subItem.href}
                                        selected={pathname === subItem.href}
                                    >
                                        <ListItemText primary={subItem.label} />
                                    </ListItemButton>
                                ))}
                            </List>
                        </Collapse>
                    )}
                </React.Fragment>
            ))}
        </List>
    );
};

const AppDrawer: React.FC<DrawerProps> = ({ open, onClose }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Drawer
            variant={isMobile ? 'temporary' : 'permanent'}
            open={isMobile ? open : true}
            onClose={onClose}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                '& .MuiDrawer-paper': {
                    boxSizing: 'border-box',
                    width: drawerWidth,
                },
            }}
        >
            <Toolbar />
            <DrawerContent />
        </Drawer>
    );
};

export default AppDrawer;