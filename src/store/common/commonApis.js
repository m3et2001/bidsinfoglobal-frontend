import { axios } from "../../helpers/axios";
import { ADVANCE_SEARCH, BUSINESS_PROFILE, CONTACT_US_SUBMIT, CUSTOMER_PROFILE, DROP_DEMO_REQUEST, SUBSCRIBE_PLAN, UPDATE_PASSWORD } from "./commonConstants";

export const api_drop_demo_request = async (payload) => {
    return axios.post(DROP_DEMO_REQUEST, payload);
}

export const api_contact_us_submit = async (payload) => {
    return axios.post(CONTACT_US_SUBMIT, payload);
}

export const api_advance_search = async (payload) => {
    return axios.post(ADVANCE_SEARCH, payload);
}

export const api_submit_customer_profile = async (payload) => {
    return axios.post(CUSTOMER_PROFILE, payload);
}

export const api_submit_business_profile = async (payload) => {
    return axios.post(BUSINESS_PROFILE, payload);
}

export const api_update_password = async (payload) => {
    return axios.post(UPDATE_PASSWORD, payload);
}

export const api_subscribe_plan = async (payload) => {
    return axios.post(SUBSCRIBE_PLAN, payload);
}