export const loadProfile = createAction( '[profile] load profile')
export const loadProfileSuccess = createAction(
  '[profile] load profile success',
  props<{user: User}>()
  )
  export const loadProfileFailed = createAction( '[profile] load profile failed')

  export const editProfile = createAction( '[profile] edit profile',
  props<{user : User}>())
  export const editProfileSuccess = createAction( '[profile] edit profile success',props<{user : User}>() )
  export const editProfileFailed = createAction( '[profile] edit profile failed')