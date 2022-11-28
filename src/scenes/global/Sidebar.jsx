import { useState } from "react";
import { ProSidebarProvider, Menu, MenuItem } from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typograhy, useThem } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from '../../theme';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonalOutlinedIcon from '@mui/icons-material/PersonalOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import BarOutlinedIcon from '@mui/icons-material/BarOutlined';
import PieOutlinedIcon from '@mui/icons-material/PieOutlined';
import TimeOutlinedIcon from '@mui/icons-material/TimeOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const {isCollaapsed, setIsCollapsed} = useState(false);
    const { selected, setSelected } = useState('Dashboard');

    return (
        <Box
        sx={{
            '& .pro-sidebar-inner': {
                background: `${colors.primary[400]} !important`
            },
            '& .pro-icon-wrapper': {
                backgroundColor: 'transparent !important'
            },
            '& .pro-inner-item': {
                padding: '5px 35px 5px 20px !important'
            },
            '& .pro-inner-item:hover': {
                color: '#868dfb !important'
            },
            '& .pro-menu-item:active': {
                color: '#6870fa !important'
            },
        }}>
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape='square'>
                    {/* LOGO AND MENU ICON */}
                </Menu>
            </ProSidebar>
        </Box>
    );
}

export default Sidebar;