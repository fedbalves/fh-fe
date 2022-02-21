import { combineReducers } from 'redux';

import { GuestPickerReducer } from '../resources/GuestPicker';

export default combineReducers({
    GuestPicker: GuestPickerReducer,
});