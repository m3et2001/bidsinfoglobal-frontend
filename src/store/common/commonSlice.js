import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api_advance_search, api_contact_us_submit, api_drop_demo_request, api_submit_business_profile, api_submit_customer_profile, api_subscribe_plan, api_update_password } from "./commonApis";

// initial state that can be used in anywhere in the current application
const initialState = {
    snackbar: {
        open: false,
        message: "",
        severity: "info",
    },
    authentication_loading: false,
    drop_demo_submit_loading: false,
    drop_demo_response: null,
    contact_us_submit_loading: false,
    contact_us_response: null,

    advance_search_response: null,
    advance_searching_loading: false,

    update_loading: false,
    submit_loading: false,
    success: false,
    error: null,
};

export const dropDemoRequestSubmit = createAsyncThunk("dropDemoRequestSubmit", async (payload) => {
    try {
        const response = await api_drop_demo_request(payload);
        return response;
    } catch (error) {
        throw new Error(error);
    }
});

export const contactUsSubmit = createAsyncThunk("contactUsSubmit", async (payload) => {
    try {
        const response = await api_contact_us_submit(payload);
        return response;
    } catch (error) {
        throw new Error(error);
    }
});

export const advanceSearchFunction = createAsyncThunk("advanceSearchFunction", async (payload) => {
    try {
        const response = await api_advance_search(payload);
        return response;
    } catch (error) {
        throw new Error(error);
    }
});

export const submitCustomerProfile = createAsyncThunk("submitCustomerProfile", async (payload) => {
    try {
        const response = await api_submit_customer_profile(payload);
        return response;
    } catch (error) {
        throw new Error(error);
    }
});

export const submitBusinessProfile = createAsyncThunk("submitBusinessProfile", async (payload) => {
    try {
        const response = await api_submit_business_profile(payload);
        return response;
    } catch (error) {
        throw new Error(error);
    }
});

export const updatePassword = createAsyncThunk("updatePassword", async (payload, thunkAPI) => {
    try {
        const response = await api_update_password(payload);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error?.response?.data?.message || error.message)
    }
});

export const subscribePlan = createAsyncThunk("subscribePlan", async (payload, thunkAPI) => {
    try {
        const response = await api_subscribe_plan(payload);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error?.response?.data?.message || error.message)
    }
});

export const commonSlice = createSlice({
    name: "common",
    initialState,
    reducers: {
        setSnackBar: (state, action) => {
            state.snackbar = action.payload;
        },
        setAuthenticationLoading: (state, action) => {
            state.authentication_loading = action.payload.state;
        },
    },
    extraReducers: (builder) => {
        // drop demo request
        builder.addCase(dropDemoRequestSubmit.pending, (state, action) => {
            state.drop_demo_submit_loading = true;
        });
        builder.addCase(dropDemoRequestSubmit.fulfilled, (state, action) => {
            const { data } = action.payload;
            state.drop_demo_response = data.result;
            state.drop_demo_submit_loading = false;
        });
        builder.addCase(dropDemoRequestSubmit.rejected, (state, action) => {
            state.drop_demo_submit_loading = false;
        });
        // contact us submit
        builder.addCase(contactUsSubmit.pending, (state, action) => {
            state.contact_us_submit_loading = true;
        });
        builder.addCase(contactUsSubmit.fulfilled, (state, action) => {
            const { data } = action.payload;
            state.contact_us_response = data.result;
            state.contact_us_submit_loading = false;
        });
        builder.addCase(contactUsSubmit.rejected, (state, action) => {
            state.contact_us_submit_loading = false;
        });
        // contact us submit
        builder.addCase(advanceSearchFunction.pending, (state, action) => {
            state.advance_searching_loading = true;
        });
        builder.addCase(advanceSearchFunction.fulfilled, (state, action) => {
            const { data } = action.payload;
            state.advance_search_response = data.result;
            state.advance_searching_loading = false;
        });
        builder.addCase(advanceSearchFunction.rejected, (state, action) => {
            state.advance_searching_loading = false;
        });
        // customer profile submit
        builder.addCase(submitCustomerProfile.pending, (state, action) => {
            state.update_loading = true;
        });
        builder.addCase(submitCustomerProfile.fulfilled, (state, action) => {
            const { data } = action.payload;
            state.update_loading = false;
            state.success = data?.success;
        });
        builder.addCase(submitCustomerProfile.rejected, (state, action) => {
            state.update_loading = false;
        });
        // business profile submit
        builder.addCase(submitBusinessProfile.pending, (state, action) => {
            state.update_loading = true;
        });
        builder.addCase(submitBusinessProfile.fulfilled, (state, action) => {
            const { data } = action.payload;
            state.update_loading = false;
            state.success = data?.success;
        });
        builder.addCase(submitBusinessProfile.rejected, (state, action) => {
            state.update_loading = false;
        });
        // business profile submit
        builder.addCase(updatePassword.pending, (state, action) => {
            state.update_loading = true;
        });
        builder.addCase(updatePassword.fulfilled, (state, action) => {
            const { data } = action.payload;
            state.update_loading = false;
            state.success = data;
        });
        builder.addCase(updatePassword.rejected, (state, action) => {
            state.update_loading = false;
            state.error = action.payload;
        });
        // business profile submit
        builder.addCase(subscribePlan.pending, (state, action) => {
            state.submit_loading = true;
        });
        builder.addCase(subscribePlan.fulfilled, (state, action) => {
            const { data } = action.payload;
            state.submit_loading = false;
            state.success = data;
        });
        builder.addCase(subscribePlan.rejected, (state, action) => {
            state.submit_loading = false;
            console.log(action)
        });
    }
});

// Action creators are generated for each case reducer function
export const { setAuthenticationLoading, setSnackBar } = commonSlice.actions;

export default commonSlice;
