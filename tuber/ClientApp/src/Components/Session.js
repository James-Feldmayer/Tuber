import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';

class Session extends Component {
    constructor(props) {
        super(props);
        if (props.defaultSession) {
            const hour = props.defaultSession.Duration ? Math.floor(props.defaultSession.Duration / 60) : 0;
            const min = props.defaultSession.Duration ? (props.defaultSession.Duration % 60) : 0;
            const tPos = props.defaultSession.Datetime ? props.defaultSession.Datetime.index("T") : 0;
            const Date = props.defaultSession.Datetime ? props.defaultSession.Datetime.substring(0, tPos) : "2020-06-04";
            const Time = props.defaultSession.Datetime ? props.defaultSession.Datetime.substring(tPos + 1, props.defaultSession.Datetime.length) : "09:30";
            this.state = {
                date: Date,
                time: Time,
                hourDuration: hour,
                minuteDuration: min
            }
        } else {
            this.state = {
                date: "",
                time: "00:00",
                hourDuration: 0,
                minuteDuration: 0,
                dateOpen: false
            }
        }
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleHourChange = this.handleHourChange.bind(this);
        this.handleMinuteChange = this.handleMinuteChange.bind(this);
    }

    sessionChange = (changeType, changeValue) => {
        let date = this.state.date;
        let time = this.state.time;
        let hour = this.state.hourDuration;
        let min = this.state.minuteDuration;
        //Gets the most recent value of the session without utilising component on update
        switch (changeType) {
            case "date": date = changeValue;break;
            case "time": time = changeValue;break;
            case "hour": hour = changeValue;break;
            case "min": min = changeValue;break;
            default: break;
        }
        const totalDur = Number(hour) * 60 + Number(min);
        const sess = {
            Date: date,
            Time: time,
            Duration: totalDur
        }
        this.props.sessionHandle(sess, this.props.sessionId);
    }

    handleDateChange = (event) => {
        this.setState({date: event.target.value});
        this.sessionChange("date", event.target.value);
    }

    handleTimeChange = (event) => {
        this.setState({time: event.target.value});
        this.sessionChange("time", event.target.value);
    }

    handleHourChange = (event) => {
        this.setState({hourDuration: event.target.value});
        this.sessionChange("hour", event.target.value);
    }

    handleMinuteChange = (event) => {
        this.setState({minuteDuration: event.target.value});
        this.sessionChange("min", event.target.value);
    }

    todaysDate() {
        const today = new Date();
        let day = today.getDate();
        if (day < 10) day = "0" + day;
        let month = (today.getMonth()+1);
        if (month < 10) month = "0" + month;
        return today.getFullYear()+'-'+month+'-'+day;
    }

    render() {
        return (
            <div>
                <FormGroup aria-label="time" row>
                    <Grid container spacing={0} direction="row" justify="space-between">
                        <div>
                            <FormLabel component="legend">Date</FormLabel>
                            <TextField
                                id="date"
                                type="date"
                                variant="outlined"
                                defaultValue={
                                    typeof(this.props.defaultSession) !== 'undefined' ? this.props.defaultSession.Date : this.todaysDate()
                                }
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                style={{backgroundColor: "#FFFFFF"}}
                                onChange={this.handleDateChange}
                            />
                        </div>
                        <div>
                            <FormLabel component="legend">Start Time</FormLabel>
                            <TextField
                                id="start"
                                type="time"
                                defaultValue={
                                    typeof(this.props.defaultSession) !== 'undefined' ? this.props.defaultSession.Time : "00:00"
                                }
                                inputProps={{
                                    step: 300, // 5 min
                                }}
                                variant="outlined"
                                onChange={this.handleTimeChange}
                                style={{backgroundColor: "#FFFFFF"}}
                            />
                        </div>
                        <div>
                            <FormLabel component="legend">Duration</FormLabel>
                            <OutlinedInput
                                id="hours"
                                variant="outlined"
                                type="number"
                                endAdornment={<InputAdornment position="end">hr</InputAdornment>}
                                onChange={this.handleHourChange}
                                defaultValue={
                                    typeof(this.props.defaultSession) !== 'undefined' ? Math.floor(this.props.defaultSession.Duration / 60) : ""
                                }
                                style={{backgroundColor: "#FFFFFF"}}
                            />
                            <OutlinedInput
                                id="minutes"
                                variant="outlined"
                                type="number"
                                endAdornment={<InputAdornment position="end">min</InputAdornment>}
                                onChange={this.handleMinuteChange}
                                defaultValue={
                                    typeof(this.props.defaultSession) !== 'undefined' ? this.props.defaultSession.Duration % 60 : ""
                                }
                                style={{backgroundColor: "#FFFFFF"}}
                            />
                        </div>
                    </Grid>
                </FormGroup>
            </div>
        );
    }
}

export default Session;