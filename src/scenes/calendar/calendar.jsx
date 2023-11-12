import React, { useState } from 'react';
import { Box, List, ListItem, ListItemText, Typography, useTheme } from '@mui/material';
import FullCalendar from '@fullcalendar/react';
import { formatDate } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import Header from '../../components/Header';
import CalendarModal from '../../components/CalendarModal';
import { tokens } from '../../theme';

const Calendar = () => {

const theme = useTheme();
const colors = tokens(theme.palette.mode);
const [isModalOpen, setIsModalOpen] = useState(false);
const [currentEvents, setCurrentEvents] = useState([]);
const [selectedEvent, setSelectedEvent] = useState(null);
const [events, setEvents] = useState([]);

const handleDateClick = (selected) => {
    setIsModalOpen(true);
    setSelectedEvent({ start: selected.startStr, end: selected.endStr });
};

const handleSaveEvent = (newEvent) => {
    const updatedEvents = [...events, newEvent];
    setEvents(updatedEvents);
    setCurrentEvents(updatedEvents);
    localStorage.setItem('events', JSON.stringify(updatedEvents));
    setIsModalOpen(false);
};

const handleDeleteEvent = (eventToDelete) => {
    const updatedEvents = events.filter((event) => event !== eventToDelete);
    setEvents(updatedEvents);
    setCurrentEvents(updatedEvents);
    localStorage.setItem('events', JSON.stringify(updatedEvents));
    setIsModalOpen(false);
};

return (
    <Box m="20px">
    <CalendarModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        event={selectedEvent}
        onSave={handleSaveEvent}
        onDelete={handleDeleteEvent}
    />
    <Header title="Calendar" subtitle="Full Calendar Interactive Page" />

    <Box display="flex" justifyContent="space-between">
        <Box
        flex="1 1 20%"
        backgroundColor={colors.primary[900]}
        p="15px"
        borderRadius="4px"
        >
        <Typography variant="h5" color={colors.greenAccent[400]}>Events</Typography>
        <List>
            {currentEvents.map((event) => (
            <ListItem
                key={event.id}
                sx={{
                backgroundColor: colors.greenAccent[900],
                margin: '10px 0',
                borderRadius: '2px',
                }}
            >
                <ListItemText
                primary={event.title}
                secondary={
                    <Typography>
                    {formatDate(event.start, {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                    })}
                    </Typography>
                }
                />
            </ListItem>
            ))}
        </List>
        </Box>
{/*  CALENDAR */}
        <Box flex="1 1 100%" ml="15px" style={{ backgroundColor: `${colors.primary[900]}` }}>
        <FullCalendar
            events={events}
            height="75vh"
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
            headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
            {
                id: '12315',
                title: 'All-day event',
                date: '2022-09-14',
            },
            {
                id: '5123',
                title: 'Timed event',
                date: '2022-09-28',
            },
            ]}
        />
        </Box>
    </Box>
    </Box>
);
};

export default Calendar;


