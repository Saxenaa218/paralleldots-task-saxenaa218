import { StateTypes, ActionTypes } from "./types";

const initialState: StateTypes = {
    activeRoute: '/home'
};

const rootReducer = (state: StateTypes = initialState, action: ActionTypes) => {
    switch (action.type) {
        case 'SET_ACTIVE_ROUTE':
            return { ...state, activeRoute: action.payload };
        default:
            return { ...state };
    }
};

export default rootReducer;