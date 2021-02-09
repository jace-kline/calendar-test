import { useState } from 'react';
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import moment from 'moment';

export function DateTimeSelector(props) {
    const [date, setDate] = useState(new Date());

    function handleChange(d) {
        setDate(d);
    }

    return (
        <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
            <DateTimePicker
                autoOk={true}
                allowKeyboardControl={true}
                disablePast={true}
                onChange={handleChange}
                value={date}
            />
        </MuiPickersUtilsProvider>
    );
}