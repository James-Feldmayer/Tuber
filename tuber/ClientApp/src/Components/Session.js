import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';

function DayofWeek(props) {
    const title = props.day.charAt(0).toUpperCase() + props.day.slice(1);
    const handleChange = (event) => {
        props.onChange(event.target.value);
    }

    return (
        <FormControlLabel
            value={props.day}
            control={<Checkbox color="primary" defaultChecked={props.defaultChecked} onChange={handleChange} value={props.day}/>}
            label={title}
        />
    );
}

class Session extends Component {
    constructor(props) {
        super(props);
        if (props.defaultSession) {
            const hour = Math.floor(props.defaultSession.Duration / 60);
            const min = (props.defaultSession.Duration % 60);
            this.state = {
                days: props.defaultSession.Days,
                time: props.defaultSession.Time,
                hourDuration: hour,
                minuteDuration: min
            }
        } else {
            this.state = {
                days: [],
                time: "00:00",
                hourDuration: 0,
                minuteDuration: 0
            }
        }
        this.handleDayChange = this.handleDayChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleHourChange = this.handleHourChange.bind(this);
        this.handleMinuteChange = this.handleMinuteChange.bind(this);
    }

    sessionChange = (changeType, changeValue) => {
        let days = this.state.days;
        let time = this.state.time;
        let hour = this.state.hourDuration;
        let min = this.state.minuteDuration;
        //Gets the most recent value of the session without utilising component on update
        switch (changeType) {
            case "days": days = changeValue;break;
            case "time": time = changeValue;break;
            case "hour": hour = changeValue;break;
            case "min": min = changeValue;break;
            default: break;
        }
        const totalDur = Number(hour) * 60 + Number(min);
        const sess = {
            Days: days,
            Time: time,
            Duration: totalDur
        }
        this.props.sessionHandle(sess, this.props.sessionId);
    }

    handleDayChange = (day) => {
        const days = this.state.days;
        const dayIndex = days.indexOf(day);
        if (dayIndex < 0) days.push(day);
        else days.splice(dayIndex, 1);
        this.setState({
            days: days
        });
        this.sessionChange("days", days);
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

    render() {
        return (
            <div>
                <div>
                    <FormLabel component="legend">Days</FormLabel>
                    <FormGroup aria-label="dayofweek" row style={{backgroundColor: "#FFFFFF"}}>
                        {["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"].map(element => {
                            return (
                                <DayofWeek key={element} day={element} onChange={this.handleDayChange} defaultChecked={
                                    typeof(this.props.defaultSession) !== 'undefined' ? this.props.defaultSession.Days.includes(element) : false
                                }/>
                            );
                        })}
                    </FormGroup>
                </div>
                <br />
                <FormGroup aria-label="time" row>
                    <Grid container spacing={0} direction="row" justify="space-between">
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