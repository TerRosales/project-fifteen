import { ResponsiveNetwork } from '@nivo/network';
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { mockNetworkData as data } from "../data/mockData";


const NetworkChart = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <ResponsiveNetwork
        data={data}
        theme={{
            axis: {
                domain: {
                    line : {
                        stroke: colors.grey[100]
                    }
                },
                legend: {
                    text: {
                        fill: colors.grey[100]
                    }
                },
                ticks: {
                    line: {
                        stroke: colors.grey[100],
                        strokeWidth: 1
                    },
                    text: {
                        fill: colors.grey[100]
                    },
                },
            },
            legends: {
                text: {
                    fill: colors.grey[100]
                }
            },
        }}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        linkDistance={e=>e.distance}
        centeringStrength={0.7}
        repulsivity={100}
        iterations={193}
        nodeSize={n=>n.size}
        activeNodeSize={n=>1.5*n.size}
        inactiveNodeSize={47}
        nodeColor={e=>e.color}
        nodeBorderColor={colors.greenAccent[900]}
        linkColor={colors.redAccent[500]}
        linkThickness={n=>2+2*n.target.data.height}
        linkBlendMode="luminosity"
        motionConfig="wobbly"
    />
    )
};

export default NetworkChart;