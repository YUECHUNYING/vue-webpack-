/* jshint esversion: 6 */
export const getUserInfo = state => {
    return state.userInfo == null ? '' : state.userInfo;
};