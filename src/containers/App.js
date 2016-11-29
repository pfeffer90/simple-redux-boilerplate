import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as DoorActions from '../actions/DoorActions';
import Door from '../components/Door';
import CalendarWindow from '../components/CalendarWindow'

/**
 * It is common practice to have a 'Root' container/component require our main App (this one).
 * Again, this is because it serves to wrap the rest of our application with the Provider
 * component to make the Redux store available to the rest of the app.
 */
export class App extends Component {
    render() {
        // we can use ES6's object destructuring to effectively 'unpack' our props
        const {openDoor, actions} = this.props;
        const NUMBER_OF_DOORS = 24;
        const NUMBER_OF_COLUMNS = 8;
        const NUMBER_OF_ROWS = NUMBER_OF_DOORS / NUMBER_OF_COLUMNS;

        const doors = new Array(NUMBER_OF_DOORS).fill().map((_, idx) => Math.floor(idx / NUMBER_OF_ROWS) + (idx % NUMBER_OF_ROWS) * NUMBER_OF_COLUMNS).map(idx => (
            <li><Door doorId={idx + 1} isOpen={idx + 1 === openDoor} actions={actions}/></li>));
        return (
            <div className="main-app-container">
                <div className="main-app-nav">Advent Calendar {this.props.openDoor}</div>
                <div className="doors-container">
                    <ul>
                        {doors}
                    </ul>
                </div>
                <CalendarWindow openDoor={openDoor}/>
            </div>
        );
    }
}

App.propTypes = {
    openDoor: PropTypes.number.isRequired,
    actions: PropTypes.object.isRequired
};

/**
 * Keep in mind that 'state' isn't the state of local object, but your single
 * state in this Redux application. 'counter' is a property within our store/state
 * object. By mapping it to props, we can pass it to the child component Counter.
 */
function mapStateToProps(state) {
    return {
        openDoor: state.door
    };
}

/**
 * Turns an object whose values are 'action creators' into an object with the same
 * keys but with every action creator wrapped into a 'dispatch' call that we can invoke
 * directly later on. Here we imported the actions specified in 'DoorActions.js' and
 * used the bindActionCreators function Redux provides us.
 *
 * More info: http://redux.js.org/docs/api/bindActionCreators.html
 */
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(DoorActions, dispatch)
    };
}

/**
 * 'connect' is provided to us by the bindings offered by 'react-redux'. It simply
 * connects a React component to a Redux store. It never modifies the component class
 * that is passed into it, it actually returns a new connected component class for use.
 *
 * More info: https://github.com/rackt/react-redux
 */

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
