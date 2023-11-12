import { Box, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";


const  FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h6">
                        Question goes here!
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, error accusantium. Saepe pariatur, inventore dolore eveniet cupiditate ipsum. Suscipit totam quaerat tempore itaque iste praesentium enim dicta laudantium, voluptatem atque rerum non ut eaque voluptates, error veniam expedita! Sed, consequatur.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h6">
                        Question goes here!
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, error accusantium. Saepe pariatur, inventore dolore eveniet cupiditate ipsum. Suscipit totam quaerat tempore itaque iste praesentium enim dicta laudantium, voluptatem atque rerum non ut eaque voluptates, error veniam expedita! Sed, consequatur.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h6">
                        Question goes here!
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, error accusantium. Saepe pariatur, inventore dolore eveniet cupiditate ipsum. Suscipit totam quaerat tempore itaque iste praesentium enim dicta laudantium, voluptatem atque rerum non ut eaque voluptates, error veniam expedita! Sed, consequatur.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded> 
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h6">
                        Question goes here!
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, error accusantium. Saepe pariatur, inventore dolore eveniet cupiditate ipsum. Suscipit totam quaerat tempore itaque iste praesentium enim dicta laudantium, voluptatem atque rerum non ut eaque voluptates, error veniam expedita! Sed, consequatur.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h6">
                        Question goes here!
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, error accusantium. Saepe pariatur, inventore dolore eveniet cupiditate ipsum. Suscipit totam quaerat tempore itaque iste praesentium enim dicta laudantium, voluptatem atque rerum non ut eaque voluptates, error veniam expedita! Sed, consequatur.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h6">
                        Question goes here!
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, error accusantium. Saepe pariatur, inventore dolore eveniet cupiditate ipsum. Suscipit totam quaerat tempore itaque iste praesentium enim dicta laudantium, voluptatem atque rerum non ut eaque voluptates, error veniam expedita! Sed, consequatur.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h6">
                        Question goes here!
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, error accusantium. Saepe pariatur, inventore dolore eveniet cupiditate ipsum. Suscipit totam quaerat tempore itaque iste praesentium enim dicta laudantium, voluptatem atque rerum non ut eaque voluptates, error veniam expedita! Sed, consequatur.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
};

export default FAQ;