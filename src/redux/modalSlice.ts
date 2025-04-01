import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
    isOpen: boolean;
    employeeId: number | null;
}

const initialState: ModalState = {
    isOpen: false,
    employeeId: null,
};

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<number>) => {
            state.isOpen = true;
            state.employeeId = action.payload;
        },
        closeModal: (state) => {
            state.isOpen = false;
            state.employeeId = null;
        },
    },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;