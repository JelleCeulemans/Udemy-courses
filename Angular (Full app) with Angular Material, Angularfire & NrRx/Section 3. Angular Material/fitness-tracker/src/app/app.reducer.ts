export interface State {
    isLoading: boolean;
}


const initilaState: State ={
    isLoading: false
};

export function appReducer(state = initilaState, action) {
    switch (action.type) {
        case 'START_LOADING':
            return {
                isLoading: true
            };
        case 'STOP_LOADING':
            return {
                isLoading: false
            };
        default:
            return state;
    }
}