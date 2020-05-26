const noteReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADDNOTE':
            return state.concat([action.note]);
        case 'FLUSHNOTES':
            return [];
        default:
            return state;
    }
}

export default noteReducer