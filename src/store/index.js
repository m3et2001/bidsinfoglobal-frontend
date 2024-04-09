import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cmsApi from "./cms/cmsApis";
import mastersApi from "./masters/mastersApis";
import authApis from "./auth/authApis";
import { useSelector, useDispatch } from "react-redux";
import commonSlice from "./common/commonSlice";

const reducers = {
    [commonSlice.name]: commonSlice.reducer,
    [cmsApi.reducerPath]: cmsApi.reducer,
    [mastersApi.reducerPath]: mastersApi.reducer,
    [authApis.reducerPath]: authApis.reducer
};

const initialState = {};

const rootReducer = combineReducers(reducers);

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false
        }).concat([
            cmsApi.middleware,
            mastersApi.middleware,
            authApis.middleware
        ]);
    },
    devTools: true,
    preloadedState: initialState,
    enhancers: (defaultEnhancers) => [...defaultEnhancers]
});


export const useAppSelector = () => useSelector(rootReducer);
export const useAppDispatch = () => useDispatch(store.dispatch);

export default store;