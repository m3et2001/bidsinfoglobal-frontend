
const NODE_ENV = "https://api.bidsinfoglobal.com"; // local development 
// const NODE_ENV = "http://localhost:5000"; // local development


export const searchType = [ "Exact Phrase", "Relevant Word"];
export const geoLocationKeyword = ["Regions", "Country", "State & City"];
export const competitionType = [{label:"Domestic",value:"Domestic Competitive Bidding"}, {label:"International",value:"International Competitive Biddiing"},{label:"Both",value:""}];
export const noticeTypeConst = ["Tender", "Project", "Contract Award", "Grants"];
export const tenderTypeConst = ["Live", "Archive"];

export const loginApi = "/auth/customer-login";
export const registerApi = "/auth/customer-register";
export const forgetUserApi = "/auth/forgot-password";
export const resetPasswordUserApi = "/auth/reset-password";

export const baseUrl = NODE_ENV;