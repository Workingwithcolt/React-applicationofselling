import { UserActionTypes } from '../Redux/user/user.type'

export const setCurrentUser = (user) =>({ 
    type:UserActionTypes.SET_CURRENT_USER,
    payload:user
})

