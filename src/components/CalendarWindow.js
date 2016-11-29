import React, {Component} from 'react';
import {markdown} from 'markdown';

export default class CalendarWindow extends Component {

    constructor(props, context) {
        super(props, context);
        this.calendarEntries = ["FIRST", "SECOND"];
    }

    getCalendarWindowContent() {
        const DEFAULT_WINDOW_CONTENT = "No entry for this day.";
        const md_content = this.calendarEntries[this.props.openDoor-1] ? this.calendarEntries[this.props.openDoor-1] : DEFAULT_WINDOW_CONTENT ;
        return markdown.toHTML(md_content);

    }

    render() {
        return (
            <div className="calendar-window-container">
                <p>{this.props.openDoor}</p>
                <div className="calendar-window-content"
                     dangerouslySetInnerHTML={{__html: this.getCalendarWindowContent()}}/>
            </div>
        );
    }
}

CalendarWindow.propTypes = {
    openDoor: React.PropTypes.number.isRequired
};
