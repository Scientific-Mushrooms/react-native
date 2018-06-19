export const increase = () => ({ type: 'INCREASE' });

export const decrease = () => ({ type: 'DECREASE' });

export const reset = () => ({ type: 'RESET' });

export const login = (name) => ({ type: 'LOGIN', name: name });

export const logout = () => ({ type: 'LOGOUT'});

export const  addPhoto = (photos) => ({ type: 'PHOTO_ADD', photos: photos });

export const  cleanPhoto = () => ({ type: 'PHOTO_CLEAN' });
