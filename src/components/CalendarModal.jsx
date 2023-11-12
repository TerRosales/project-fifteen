import React, { useState, useEffect } from 'react';
import { useTheme, Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';
import { tokens } from "../theme";




const CalendarModal = ({ open, onClose, event, onSave, onDelete }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        if (event) {
            setTitle(event.title);
            setDetails(event.details || '');
            setEditing(true);
        } else {
            setTitle('');
            setDetails('');
            setEditing(false);
        }
    }, [event]);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDetailsChange = (event) => {
        setDetails(event.target.value);
    };

    const handleSave = () => {
        if (editing) {
            onSave({ ...event, title, details });
        } else {
            onSave({ title, details });
        }
        onClose();
    };

    const handleDelete = () => {
        onDelete(event);
        onClose();
    };

    return (
        <Dialog 
            style={{ backgroundColor: colors?.primary[700]}}
            open={open} 
            onClose={onClose} 
            maxWidth="sm" 
            fullWidth>
            <DialogTitle style={{ color: colors?.greenAccent[400] }}>{editing ? 'Edit Event' : 'Add Event'}</DialogTitle>
            <DialogContent 
                style={{ height: '30vh' }}
                
            >
                <TextField 
                    style={{ 
                        backgroundColor: colors?.primary[900]}}
                    label="Title" 
                    value={title} 
                    onChange={handleTitleChange}  
                    fullWidth />
                <TextField
                    style={{ backgroundColor: colors?.primary[900]}}
                    label="Details"
                    value={details}
                    onChange={handleDetailsChange}
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                {editing && <Button onClick={handleDelete} style={{ backgroundColor: colors?.primary[900], color: colors?.greenAccent[400] }}>Delete</Button>}
                <Button onClick={onClose} style={{ backgroundColor: colors?.primary[900], color: colors?.greenAccent[400] }}>Cancel</Button>

                    <Button onClick={handleSave} style={{ backgroundColor: colors?.primary[900] ,color: colors?.greenAccent[400] }}>Save</Button>
            </DialogActions>
        </Dialog>
    );
};

export default CalendarModal;
