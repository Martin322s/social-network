export const initialValue = {
    opinion: "",
    file: ""
};

export function reducer(state, action) {
    switch (action.type) {
        case "SET_FIELD":
            return { ...state, [action.field]: action.value }
        case "TAC_CHECK":
            return { ...state, [action.field]: action.value }
        default:
            throw new Error(`Invalid action type: ${action.type}`);
    }
}