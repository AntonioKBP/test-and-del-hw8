export const selectAuthIsLoggedIn = state => state.auth.isLoggedIn;
export const selectAuthName = state => state.auth.user.name;
export const selectAuthToken = state => state.auth.token;
export const selectAuthIsRefreshing = state => state.auth.isRefreshing;
