import { Box } from "@mui/material";
import Header from "../../components/Header";
import BulletChart from "../../components/BulletChart";


const Bullet = () => {
    return (
        <Box m="20px">
            <Header title="Bullet Chart" subtitle="Simple Sample Bullet Chart" />
            <Box height="70vh">
                <BulletChart />
            </Box>
        </Box>
    )
};

export default Bullet;