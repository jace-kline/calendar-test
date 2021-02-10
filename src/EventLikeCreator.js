import React, { useState } from 'react';
import { EventTypeSelector } from './EventTypeSelector';
import { EventLikeCreatorForm } from './EventLikeCreatorForm';
import { TaskCreator } from './TaskCreator';
import { ReminderCreator } from './ReminderCreator';

export function EventLikeCreator(props) {
    const [eventType, setEventType] = useState("Event");

    function onChangeEventType(e) {
        const eventType = e.target.value;
        setEventType(eventType);
    }

    return (
    <div>
    <EventTypeSelector 
        eventType={eventType} 
        onChangeEventType={onChangeEventType} />
    <EventLikeCreatorForm onSubmit={props.onSubmit} />
    </div>
    
    );
}