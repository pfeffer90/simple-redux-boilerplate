import {calendar_day_has_passed} from '../services/date-checker';
import React, {Component, PropTypes} from 'react';

export default class Door extends Component {
    constructor(props, context) {
        super(props, context);
    }

    handleOpening() {
        this.props.actions.openDoor(this.props.doorId);
    }

    handleClosing() {
        this.props.actions.closeDoor();
    }

    handleClick() {
        if (this.props.isOpen) {
            this.handleClosing()
        }
        else {
            if(calendar_day_has_passed(this.props.doorId)) {
                this.handleOpening();
            }
            else {
                alert('Not yet :)');
            }
        }

    }

    render() {
        return (
            <div className="door-container">
                <div className="door-button">
                    <button className="button" onClick={() => {
                        this.handleClick()
                    }}> {this.props.doorId}
                    </button>
                </div>
            </div>
        );
    }
}

Door.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    doorId: PropTypes.number.isRequired,
    actions: PropTypes.object.isRequired
};
