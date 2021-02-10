import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

export function MyCalendar(props) {
    return (
    <div>
        <Calendar
            style={{height: 500}}
            localizer={localizer}
            events={props.events}
            startAccessor="start"
            endAccessor="end"
        />
    </div>);
}