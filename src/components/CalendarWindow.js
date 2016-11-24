import React, {Component} from 'react';

export default class CalendarWindow extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="calendar-window-container">
                <p>{this.props.openDoor}</p>
            </div>
        );
    }
}

CalendarWindow.propTypes = {
    openDoor: React.PropTypes.number.isRequired
};
