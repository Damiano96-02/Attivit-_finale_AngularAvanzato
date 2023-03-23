export const getProfile = (state : AppState) => state.profile

export const getProfileReducer = createSelector(
    getProfile,
    (state : ProfileState) => state.user
)
export const getProfileUserName = createSelector(
    getProfile,
    (state : ProfileState) =>state.user.name
)