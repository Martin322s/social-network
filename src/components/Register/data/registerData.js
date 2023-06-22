export const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repassword: "",
    gender: "male",
    tac: ""
};

export function reducer(state, action) {
    switch(action.type) {
        case "SET_FIELD": 
            return {...state, [action.field]: action.value }
        case "SELECT_GENDER": 
            return {...state, [action.field]: action.value }
        default: 
            throw new Error(`Invalid action type: ${action.type}`);
    }
}