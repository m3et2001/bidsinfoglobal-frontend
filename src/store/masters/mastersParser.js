import { get } from "lodash-es";

export const homeCountryParser = (response) => {
    try {
        if (response?.result) {
            response = response.result;
        }
        if (!response) {
            return [];
        }
        response = response.result.map(function (val) {
            let obj = {
                _id: val?._id,
                name: val?.name,
                title: val?.title,
                description: val?.description,
                num_code: val?.num_code,
                code: val?.num_code,
                str_code: val?.str_code,
                country: val?.str_code,
                value: val?.count
            }
            return obj;
        })

        return response;

    } catch (error) {
        throw new Error(error);
    }
}

export const cpvCodeParser = (response) => {
    try {
        if (response?.result) {
            response = response.result;
        }
        if (!response) {
            return [];
        }

        response.result = response.result.map(function (val) {
            let obj = {
                _id: val?._id,
                name: val?.code + "-" + val?.description,
                code: val?.code
            }
            if (response?.by_tenders_count) {
                obj.tenders_count = val?.tenders_count;
            }
            return obj;
        })

        return response;

    } catch (error) {
        throw new Error(error);
    }
}

export const fundingAgencyParser = (response) => {
    try {
        if (response?.result) {
            response = response.result;
        }
        if (!response) {
            return [];
        }

        response.result = response.result.map(function (val) {
            let obj = {
                _id: val?._id,
                title: val?.title,
            }
            return obj;
        })

        return response;

    } catch (error) {
        throw new Error(error);
    }
}

export const sectorParser = (response) => {
    try {
        if (response?.result) {
            response = response.result;
        }
        if (!response) {
            return [];
        }

        response.result = response.result.map(function (val) {
            let obj = {
                _id: val?._id,
                name: val?.name,
                title: val?.title,
                description: val?.description,
                icon: val?.icon,
                code: val?.code
            }
            if (response?.by_tenders_count) {
                obj.tenders_count = val?.tenders_count;
            }
            if (response?.by_projects_count) {
                obj.projects_count = val?.projects_count;
            }
            return obj;
        })

        return response;

    } catch (error) {
        throw new Error(error);
    }
}

export const countryParser = (response) => {
    try {
        if (response?.result) {
            response = response.result;
        }
        if (!response) {
            return [];
        }

        response.result = response.result.map(function (val) {
            let obj = {
                _id: val?._id,
                name: val?.name,
                title: val?.title,
                description: val?.description,
                num_code: val?.num_code,
                code: val?.num_code,
                str_code: val?.str_code
            }
            return obj;
        })

        return response;

    } catch (error) {
        throw new Error(error);
    }
}

export const statesParser = (response) => {
    try {
        if (response?.result) {
            response = response.result;
        }
        if (!response) {
            return [];
        }

        response.result = response.result.map(function (val) {
            let obj = {
                _id: val?._id,
                name: val?.name,
                code: val?.code
            }
            return obj;
        })

        return response;

    } catch (error) {
        throw new Error(error);
    }
}

export const regionParser = (response) => {
    try {
        if (response?.result) {
            response = response.result;
        }
        if (!response) {
            return [];
        }

        response.result = response.result.map(function (val) {
            let obj = {
                _id: val?._id,
                name: val?.name,
                title: val?.title,
                description: val?.description,
                code: val?.code
            }
            if (response?.by_tenders_count) {
                obj.tenders_count = val?.tenders_count;
            }
            if (response?.by_projects_count) {
                obj.projects_count = val?.projects_count;
            }
            return obj;
        })

        return response;

    } catch (error) {
        throw new Error(error);
    }
}

export const tenderDataParser = (response) => {
    try {
        if (response?.result) {
            response = response.result;
        }
        if (!response) {
            return [];
        }

        response.result = response.result.map(function (val) {
            return {
                _id: get(val, "_id", ""),
                country: get(val, "country", ""),
                closing_date: get(val, "closing_date", ""),
                description: get(val, "description", ""),
                title: get(val, "title", ""),
                published_date: get(val, "published_date", ""),
                big_ref_no: get(val, "big_ref_no", ""),
                sectors: get(val, "sectors", ""),
                regions: get(val, "regions", ""),
                cpv_codes: get(val, "cpv_codes", "")
            }
        })

        return response;

    } catch (error) {
        throw new Error(error);
    }
}

export const tenderInfoParser = (response) => {
    try {
        if (response?.result) {
            response = response.result;
        }
        if (!response) {
            return [];
        }

        return response;


    } catch (error) {
        throw new Error(error);
    }
}

export const projectDataParser = (response) => {
    try {
        if (response?.result) {
            response = response.result;
        }
        if (!response) {
            return [];
        }

        response.result = response.result.map(function (val) {
            return {
                _id: get(val, "_id", ""),
                estimated_project_completion_date: get(val, "estimated_project_completion_date", "N.A."),
                project_background: get(val, "project_background", "N.A."),
                project_id: get(val, "project_id", ""),
                project_location: get(val, "project_location", "N.A."),
                project_name: get(val, "project_name", ""),
                project_publishing_date: get(val, "project_publishing_date", "N.A."),
                sectors: get(val, "sectors", ""),
                regions: get(val, "regions", ""),
                cpv_codes: get(val, "cpv_codes", "")
            }
        })

        return response;

    } catch (error) {
        throw new Error(error);
    }
}

export const projectInfoParser = (response) => {
    try {
        if (response?.result) {
            response = response.result;
        }
        if (!response) {
            return [];
        }

        return response;


    } catch (error) {
        throw new Error(error);
    }
}

export const contractAwardDataParser = (response) => {
    try {
        if (response?.result) {
            response = response.result;
        }
        if (!response) {
            return [];
        }

        response.result = response.result.map(function (val) {
            return {
                _id: get(val, "_id", ""),
                project_location: get(val, "project_location", ""),
                big_ref_no: get(val, "big_ref_no", ""),
                title: get(val, "title", ""),
                sectors: get(val, "sectors", ""),
                regions: get(val, "regions", ""),
                cpv_codes: get(val, "cpv_codes", ""),
                description: get(val, "description", ""),
                contractor_details: get(val, "contractor_details", ""),
                awards_publish_date: get(val, "awards_publish_date", "")
            }
        })

        return response;

    } catch (error) {
        throw new Error(error);
    }
}

export const contractAwardInfoParser = (response) => {
    try {
        if (response?.result) {
            response = response.result;
        }
        if (!response) {
            return [];
        }

        return response;


    } catch (error) {
        throw new Error(error);
    }
}

export const grantsDataParser = (response) => {
    try {
        if (response?.result) {
            response = response.result;
        }
        if (!response) {
            return [];
        }

        response.result = response.result.map(function (val) {
            return {
                _id: get(val, "_id", ""),
                location: get(val, "location", ""),
                big_ref_no: get(val, "big_ref_no", ""),
                sectors: get(val, "sectors", ""),
                title: get(val, "title", ""),
                post_date: get(val, "post_date", ""),
                deadline: get(val, "deadline", "")
            }
        })

        return response;

    } catch (error) {
        throw new Error(error);
    }
}

export const grantsInfoParser = (response) => {
    try {
        if (response?.result) {
            response = response.result;
        }
        if (!response) {
            return [];
        }

        return response;


    } catch (error) {
        throw new Error(error);
    }
} 