import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Header = ({ title, subtitle }) => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return <Box mb="30px">
        <Typography
            variant="h4"
            color={colors.greenAccent[400]}
            fontWeight="bold"
            sx={{ mb: "5px" }}
        >
            {title}
        </Typography>
        <Typography
            fontSize="14px"
            colors={colors.greenAccent[400]}
        >
            {subtitle}
        </Typography>
    </Box>

};

export default Header;