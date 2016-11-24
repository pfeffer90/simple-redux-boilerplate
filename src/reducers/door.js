import { OPEN_DOOR, CLOSE_DOOR} from '../constants/ActionTypes';

export default function door(state = -1, action) {
  switch (action.type) {
  case OPEN_DOOR:
    return action.value;
  case CLOSE_DOOR:
    return -1;
  default:
    return state;
  }
}
