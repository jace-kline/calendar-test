import React from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

export function EventTypeSelector(props) {
    return (
        <div>
        <h1>{`${props.eventType} Creator`}</h1>
        <FormControl component="fieldset">
        <FormLabel component="legend">Event Type</FormLabel>
        <RadioGroup aria-label="eventType" name="eventType" value={props.eventType} onChange={props.onChangeEventType}>
            <FormControlLabel value="Event" control={<Radio />} label="Event" />
            <FormControlLabel value="Task" control={<Radio />} label="Task" />
            <FormControlLabel value="Reminder" control={<Radio />} label="Reminder" />
        </RadioGroup>
        </FormControl>
        </div>
    );
}