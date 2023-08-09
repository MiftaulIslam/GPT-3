const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
    mode:'dark'
}
export const modetoggleSlice = createSlice({
    name:'modeToggle',
    initialState,
    reducers:{
        modeToggle: (state,action) =>{state.mode = action.payload}
    }
})
export const {modeToggle} = modetoggleSlice.actions
export default modetoggleSlice.reducer