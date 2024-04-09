import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { baseUrl } from "../../helpers/constants";
import { getCookie } from "../../helpers/cookies";
import { GET_CUSTOMER_PROFILE, GET_PLAN_LIST } from "./authConstants";
import { businessProfileParser, planListParser, profileParser } from './authParser';
import { GET_BUSINESS_PROFILE } from './authConstants';

const authApis = createApi({
    reducerPath: 'authApis',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
        prepareHeaders: (headers, { getState }) => {
            const token = getCookie("token");
            if (token) {
                headers.set('Authorization', `BEARER ${token}`)
            }
            return headers;
        }
    }),
    keepUnusedDataFor: 30,
    tagTypes: ["profile", "business", "plan_list"],
    endpoints: build => ({
        getCustomerProfile: build.query({
            query: () => ({
                url: GET_CUSTOMER_PROFILE,
                method: "GET",
            }),
            transformResponse: (response) => profileParser(response),
            providesTags: ['profile'],
        }),
        getBusinessProfile: build.query({
            query: () => ({
                url: GET_BUSINESS_PROFILE,
                method: "GET",
            }),
            transformResponse: (response) => businessProfileParser(response),
            providesTags: ['business'],
        }),
        getPlanList: build.query({
            query: () => ({
                url: GET_PLAN_LIST,
                method: "GET",
            }),
            transformResponse: (response) => planListParser(response),
            providesTags: ['plan_list'],
        }),
    }),
});

export default authApis;