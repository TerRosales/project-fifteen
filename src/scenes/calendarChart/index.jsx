import { Box } from "@mui/material";
import Header from "../../components/Header";
import CalendarChart from "../../components/CalendarChart";


const CalendarVisuals = () => {
    return (
        <Box m="20px">
            <Header title="Calendar Chart" subtitle="Simple Sample Calendar Chart" />
            <Box height="60vh">
                <CalendarChart />
            </Box>
        </Box>
    )
};

export default CalendarVisuals;