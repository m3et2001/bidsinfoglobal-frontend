import cookie from "js-cookie";

// Set in Cookie
export const setCookie = (key, value) => {
    if (window !== "undefiend") {
        cookie.set(key, value, {
            // 1 Day
            expires: 1,
        });
    }
};
// remove from cookie
export const removeCookie = (key) => {
    if (window !== "undefined") {
        cookie.remove(key, {
            expires: 1,
        });
    }
};

// Get from cookie such as stored token
// Will be useful when we need to make request to server with token
export const getCookie = (key) => {
    if (window !== "undefined") {
        return cookie.get(key);
    } else {
        return false;
    }
};

// Set in localstorage
export const setLocalStorage = (key, value, json = false) => {
    if (window !== "undefined") {
        localStorage.setItem(key, json ? JSON.stringify(value) : value);
    }
};

// Remove from localstorage
export const removeLocalStorage = (key) => {
    if (window !== "undefined") {
        localStorage.removeItem(key);
    }
};

// Get from localstorage
export const getLocalStorage = (key) => {
    try {
        if (window !== "undefined") {
            return JSON.parse(localStorage.getItem(key));
        }
    } catch (error) {
        console.log("error parsing");
        return false;
    }
};

// Auth enticate user by passing data to cookie and localstorage during signin
export const authenticate = (response, next) => {
    setLocalStorage("user", response, true);
    setCookie("token", response.access_token);
    next();
};

export const updateLocalStorage = (key, value, next) => {
    setLocalStorage(key, JSON.stringify(value));
    next();
};

// Access user info from localstorage
export const isAuth = () => {
    const cookieChecked = getCookie("token");
    if (cookieChecked) {
        return getLocalStorage("user");
    } else {
        return false;
    }
};

export const signout = async (next) => {
    removeLocalStorage("user");
    removeCookie("token");
    next();
};