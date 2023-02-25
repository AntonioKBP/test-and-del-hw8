export const selectAuthLoggedIn = state => state.auth.isLoggedIn;
export const selectAuthName = state => state.auth.user.name;
export const selectAuthToken = state => state.auth.data;
