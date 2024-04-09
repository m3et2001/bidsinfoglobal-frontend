import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { baseUrl } from "../../helpers/constants";
import { getCookie } from "../../helpers/cookies";
import { GET_CONTRACT_AWARDS_DATA, GET_CONTRACT_AWARD_INFO, GET_COUNTRY_DATA, GET_CPV_CODES_DATA, GET_FUNDING_AGENCY_DATA, GET_GRANTS_DATA, GET_GRANT_INFO, GET_PROJECTS_DATA, GET_PROJECT_INFO, GET_REGIONS_DATA, GET_SECTORS_DATA, GET_STATES_DATA, GET_TENDERS_DATA, GET_TENDER_INFO } from "./mastersConstants";
import { contractAwardDataParser, contractAwardInfoParser, countryParser, cpvCodeParser, fundingAgencyParser, grantsDataParser, grantsInfoParser, homeCountryParser, projectDataParser, projectInfoParser, regionParser, sectorParser, statesParser, tenderDataParser, tenderInfoParser } from './mastersParser';

const mastersApis = createApi({
    reducerPath: 'mastersApis',
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
    tagTypes: ['home_country', 'country_all', 'sectors_all', 'states_all', "regions_all", "cpv_codes_all", "funding_agency_all", "tenders_data", "tender_info", "projects_data", "project_info", "contract_awards_data", "contract_award_info", "grants_data", "grant_info"],
    endpoints: build => ({
        getCountryData: build.query({
            query: (params) => ({
                url: GET_COUNTRY_DATA,
                method: "GET",
                params: params || {
                    pageNo: "0",
                    limit: "1000",
                    sortBy: "1",
                    sortField: "name",
                }
            }),
            transformResponse: (response) => countryParser(response),
            providesTags: ['country_all'],
        }),
        getHomeCountryData: build.query({
            query: (params) => ({
                url: GET_COUNTRY_DATA,
                method: "GET",
                params: params
            }),
            transformResponse: (response) => homeCountryParser(response),
            providesTags: ['home_country'],
        }),
        getSectorsData: build.query({
            query: (params) => ({
                url: GET_SECTORS_DATA,
                method: "GET",
                params: params
            }),
            transformResponse: (response) => sectorParser(response),
            providesTags: ['sectors_all'],
        }),
        getStatesData: build.query({
            query: (params) => ({
                url: GET_STATES_DATA,
                method: "GET",
                params: params
            }),
            transformResponse: (response) => statesParser(response),
            providesTags: ['states_all'],
        }),
        getRegionsData: build.query({
            query: (params) => ({
                url: GET_REGIONS_DATA,
                method: "GET",
                params: params
            }),
            transformResponse: (response) => regionParser(response),
            providesTags: ['regions_all'],
        }),
        getCpvCodesData: build.query({
            query: (params) => ({
                url: GET_CPV_CODES_DATA,
                method: "GET",
                params: params
            }),
            transformResponse: (response) => cpvCodeParser(response),
            providesTags: ['cpv_codes_all'],
        }),
        getFundingAgencyData: build.query({
            query: (params) => ({
                url: GET_FUNDING_AGENCY_DATA,
                method: "GET",
                params: params
            }),
            transformResponse: (response) => fundingAgencyParser(response),
            providesTags: ['funding_agency_all'],
        }),
        getTendersData: build.query({
            query: (params) => ({
                url: GET_TENDERS_DATA,
                method: "GET",
                params: params
            }),
            transformResponse: (response) => tenderDataParser(response),
            providesTags: ['tenders_data'],
        }),
        getTenderInfo: build.query({
            query: (params) => ({
                url: GET_TENDER_INFO,
                method: "GET",
                params: params
            }),
            transformResponse: (response) => tenderInfoParser(response),
            providesTags: ['tender_info'],
        }),
        getProjectsData: build.query({
            query: (params) => ({
                url: GET_PROJECTS_DATA,
                method: "GET",
                params: params
            }),
            transformResponse: (response) => projectDataParser(response),
            providesTags: ['projects_data'],
        }),
        getProjectInfo: build.query({
            query: (params) => ({
                url: GET_PROJECT_INFO,
                method: "GET",
                params: params
            }),
            transformResponse: (response) => projectInfoParser(response),
            providesTags: ['project_info'],
        }),
        getContractAwardsData: build.query({
            query: (params) => ({
                url: GET_CONTRACT_AWARDS_DATA,
                method: "GET",
                params: params
            }),
            transformResponse: (response) => contractAwardDataParser(response),
            providesTags: ['contract_awards_data'],
        }),
        getContractAwardInfo: build.query({
            query: (params) => ({
                url: GET_CONTRACT_AWARD_INFO,
                method: "GET",
                params: params
            }),
            transformResponse: (response) => contractAwardInfoParser(response),
            providesTags: ['contract_award_info'],
        }),
        getGrantsData: build.query({
            query: (params) => ({
                url: GET_GRANTS_DATA,
                method: "GET",
                params: params
            }),
            transformResponse: (response) => grantsDataParser(response),
            providesTags: ['grants_data'],
        }),
        getGrantInfo: build.query({
            query: (params) => ({
                url: GET_GRANT_INFO,
                method: "GET",
                params: params
            }),
            transformResponse: (response) => grantsInfoParser(response),
            providesTags: ['grant_info'],
        }),
    }),
});

export default mastersApis;