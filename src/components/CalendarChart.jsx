import { ResponsiveCalendar } from '@nivo/calendar';
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { mockCalendarChartData as data } from "../data/mockData";


const CalendarChart = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <ResponsiveCalendar
        data={data}
        theme={{
            labels: {
                text: {
                    fill: colors.greenAccent[100],
                    fontSize: 18
                },
            }
        }}
        from="2015-03-01"
        to="2016-07-12"
        emptyColor="#eeeeee"
        colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        yearSpacing={40}
        monthBorderColor="#ffffff"
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'row',
                translateY: 36,
                itemCount: 4,
                itemWidth: 42,
                itemHeight: 36,
                itemsSpacing: 14,
                itemDirection: 'right-to-left'
            }
        ]}
    />
    )
};

export default CalendarChart;