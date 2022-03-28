import {  createSlice } from '@reduxjs/toolkit'

const initCardState = []

const addCardSlice = createSlice({
	name: 'add',
	initialState: initCardState,
	reducers: {
		onAddColumn(state, action) {
			state.push(action.payload)
		},
		onAdd(state, action) {
			const { data, id } = action.payload
			state.map((el) => {
				if (el.columnId === id) {
					el.tasks.push(data)
				}
			})
		},
		clear(state){
			state.length=0
		}
	},
})

export const cardActions = addCardSlice.actions
export default addCardSlice
