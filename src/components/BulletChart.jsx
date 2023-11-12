import { ResponsiveBullet } from '@nivo/bullet';
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { mockBulletData as data } from "../data/mockData";


const BulletChart = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
        return (
            <ResponsiveBullet
            data={data}
            theme={{
                labels: {
                    text: {
                        fill: colors.greenAccent[100],
                        fontSize: 12
                    },
                }
            }} 
            height={700} 
            margin={{ top: 50, right: 90, bottom: 50, left: 90 }}
            spacing={46}
            titleAlign="start"
            titleOffsetX={-70}
            measureSize={0.1}
        />
        )

};


export default BulletChart;