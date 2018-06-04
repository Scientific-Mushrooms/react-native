export default user = (state = {}, action) => {
    
    switch (action.type) {

        case 'LOGIN':
            return { ...state, name: action.name };

        case 'LOGOUT':
            return { ...state, name: null };
            
        default:
            return state;
    }
}