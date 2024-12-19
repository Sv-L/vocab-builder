export const getName = (state) => state.auth.user.name;
export const getEmail = (state) => state.auth.user.email;
export const getError = (state) => state.auth.message;
export const getToken = (state) => state.auth.token;
export const geIsLoggedIn = (state) => state.auth.isLoggedIn;
