import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	showMessage: false,
	message: "",
};

const messageSlice = createSlice({
	name: "message",
	initialState,
	reducers: {
		setMessage: (state, action) => {
			state.showMessage = true;
			state.message = action.payload;
		},
	},
});

export const messageAction = messageSlice.actions;

export default messageSlice.reducer;
