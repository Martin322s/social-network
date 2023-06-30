export const initialValue = {
    email: "",
    password: ""
};

export function reducer(state, action) {
    switch(action.type) {
        case "SET_FIELD": return {
            ...state, [action.name]: action.value
        }
        default: console.log('Invalid action type provided!');
    }
}