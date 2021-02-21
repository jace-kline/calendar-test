import React from 'react';
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import moment from 'moment';

export function DateTimeInput(props) {

    const {name, label, value, onChange, ...other} = props;

    return (
        <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
            <DateTimePicker
                autoOk
                allowKeyboardControl
                disablePast
                name={name}
                label={label}
                value={value}
                onChange={date => onChange({ target: { name, value: date }})}
                fullWidth
                {...other}
            />
        </MuiPickersUtilsProvider>
    );
}