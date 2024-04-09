import { get } from "lodash-es";

export const profileParser = (response) => {
    try {
        if (response?.result) {
            response = response.result;
        }
        if (!response) {
            return {};
        }

        return {
            customer_id: get(response, "customer_id", ""),
            full_name: get(response, "full_name", ""),
            email: get(response, "email", ""),
            phone_no: get(response, "phone_no", ""),
            organization_name: get(response, "organization_name", ""),
            address: get(response, "address", ""),
            city: get(response, "city", ""),
            location: get(response, "location", ""),
            pincode: get(response, "pincode", ""),
            country: get(response, "country", ""),
            telephone_no: get(response, "telephone_no", ""),
            website_url: get(response, "website_url", ""),
            products_services: get(response, "products_services", ""),
            operation: get(response, "operation", "")
        }

    } catch (error) {
        throw new Error(error);
    }
}

export const businessProfileParser = (response) => {
    try {
        if (response?.result) {
            response = response.result;
        }
        if (!response) {
            return {};
        }

        return {
            customer_id: get(response, "customer_id", ""),
            company_name: get(response, "company_name", ""),
            contacts: get(response, "contacts", ""),
            telephone_no: get(response, "telephone_no", ""),
            official_email: get(response, "official_email", ""),
            fax: get(response, "fax", ""),
            address: get(response, "address", ""),
            city: get(response, "city", ""),
            location: get(response, "location", ""),
            pincode: get(response, "pincode", ""),
            country: get(response, "country", ""),
            website_url: get(response, "website_url", ""),
            employee_strength: get(response, "employee_strength", ""),
            industry_type: get(response, "industry_type", ""),
            business_area: get(response, "business_area", ""),
            establishment_details: get(response, "establishment_details", ""),
        }

    } catch (error) {
        throw new Error(error);
    }
}

export const planListParser = (response) => {
    try {
        if (response?.result) {
            response = response.result;
        }
        if (!response) {
            return {};
        }

        return response

    } catch (error) {
        throw new Error(error);
    }
}