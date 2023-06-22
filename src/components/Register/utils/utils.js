export const changeHandler = (ev, dispatch) => {
    dispatch({ type: "SET_FIELD", field: ev.target.name, value: ev.target.value });
}

export const termsStatusChange = (ev, dispatch) => {
    dispatch({ type: "TAC_CHECK", field: ev.target.name, value: ev.target.checked });
}