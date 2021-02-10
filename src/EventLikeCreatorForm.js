import React, {useState} from 'react';
import {TextField} from '@material-ui/core';
import {DateTimeSelector} from './DateTimeSelector';

export function EventLikeCreatorForm(props) {
    const eventType = props.eventType;
    const isEvent = eventType === "Event";
    const isTask = eventType === "Task";
    const isReminder = eventType === "Reminder";

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [loc, setLoc] = useState('');
    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());
    const [isAllDay, setIsAllDay] = useState(false);
    const [freq, setFreq] = useState("None");
    const [remind, setRemind] = useState(false);
    const [reminder, setReminder] = useState(new Date());

    function onSubmit() {
        // check that all required entries are filled

        // if not, alert the user and "errorize" the invalid entries

        const e = {
            eventType: eventType,
            title: title,
            desc: desc,
            loc: loc,
            start: start,
            end: end,
            isAllDay: isAllDay,
            freq: freq,
            remind: remind,
            reminder: reminder
        }
        props.onSubmit(e);
    }

    return (
        <div>
        <TextField
          required
          id="title"
          label="Title"
          defaultValue=""
          onChange={({target}) => setTitle(target.value)}
        />
        <TextField
          id="desc"
          label="Description"
          defaultValue=""
          multiline
          onChange={({target}) => setDesc(target.value)}
        />
        {(() => {
            if(props.eventType !== "Reminder") {
                return (
                <TextField
                    id="loc"
                    label="Location"
                    defaultValue=""
                    onChange={({target}) => setLoc(target.value)}
                />
                );
            }
        })()}
        <DateTimeSelector
            id="start"
            onChange={(d) => setStart(d)}
        />
        <DateTimeSelector
            id="end"
            minDate={start}
            onChange={(d) => setEnd(d)}
        />
        </div>
    );
}