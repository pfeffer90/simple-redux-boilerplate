import {OPEN_DOOR, CLOSE_DOOR} from '../constants/ActionTypes';

export function openDoor(doorId) {
    return {
        type: OPEN_DOOR,
        value: doorId
    };
}

export function closeDoor() {
    return {
        type: CLOSE_DOOR
    };
}
