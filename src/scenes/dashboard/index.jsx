import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
// import { mockTransactions } from "../../data/mockData";
// import  DownloadOutlinedIcon from "@mui/icons-material/DownloadDoneOutlined";
// import  EmailIcon from "@mui/icons-material/Email";
// import  PointOfSaleIcon from "@mui/icons-material/PointOfSale";
// import  PersonAddIcon from "@mui/icons-material/PersonAdd";
// import  TrafficIcon from "@mui/icons-material/Traffic";
// import LineChart from '../../components/LineChart';
// import BarChart from '../../components/BarChart';
// import GeographyChart from '../../components/GeographyChart';
// import StatBox from '../../components/StatBox';
// import ProgressCircle from '../../components/ProgressCircle';
import Header from "../../components/Header";

const Dashboard = () => {
    const theme = useTheme();
    // const colors = tokens(theme.palette.mode);  //video 3:36:15

    return (
        <Box>
            <Box
             display= 'flex'
             justifyContent= 'space-between'
             alignItems= 'center'
             >
                <Header title='DASHBOARD' subtitle='Welcome to your dashboard' />
            </Box>
        </Box>    
    );
};

export default Dashboard;