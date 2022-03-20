import { createSlice } from '@reduxjs/toolkit'

const users = {
	email: 'ric@mail.kg',
	password: '123',
}

const authSlice = createSlice({
	name: 'authentication',
	initialState: { isAuth: false,isInvalid:false },
	reducers: {
		login(state, action) {
			if (
				users.email === action.payload.email &&
				users.password === action.payload.password
			) {
				state.isAuth = true
			} else {
				state.isAuth = false
                state.isInvalid=true
			}
            
		},
        
	},
})

export const authActions = authSlice.actions
export default authSlice
