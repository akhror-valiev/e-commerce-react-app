import { createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../utils/apiURL";
import { STATUS } from "../utils/status";

const productSlice = createSlice({
    initialState: {
        data: [],
        status: STATUS.IDLE,
    },
    reducers: {
        setProducts(state, action) {
            state.data = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        }
    }
});

export const { setProducts, setStatus } = productSlice.action;
export default productSlice.reducer;
