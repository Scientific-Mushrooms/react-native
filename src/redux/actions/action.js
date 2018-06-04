const increase = () => ({ type: 'INCREASE' });
const decrease = () => ({ type: 'DECREASE' });
const reset = () => ({ type: 'RESET' });
const login = (user) => ({ type: 'LOGIN', user: 'user' });



export {
    increase,
    decrease,
    reset,
    login,
}