import { useTheme } from '@mui/material';
import { ResponsiveBar } from '@nivo/bar';
import { tokens } from '../theme';
import { mockBarData as data } from '../data/mockData';

const BarChart = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


}

export default BarChart;