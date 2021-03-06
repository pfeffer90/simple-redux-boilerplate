import React, {Component} from 'react';
import {markdown} from 'markdown';
import {get_calendar_content} from '../services/content-provider'

export default class CalendarWindow extends Component {

    constructor(props, context) {
        super(props, context);
        this.calendarEntries = get_calendar_content();
    }

    getCalendarWindowContent() {
        const DEFAULT_WINDOW_CONTENT = "Open a calendar window.";
        const md_content = this.calendarEntries[this.props.openDoor-1] ? this.calendarEntries[this.props.openDoor-1] : DEFAULT_WINDOW_CONTENT ;
        return markdown.toHTML(md_content);

    }

    render() {
        return (
            <div className="calendar-window-container">
                <div className="calendar-window-content"
                     dangerouslySetInnerHTML={{__html: this.getCalendarWindowContent()}}/>
            </div>
        );
    }
}

CalendarWindow.propTypes = {
    openDoor: React.PropTypes.number.isRequired
};
