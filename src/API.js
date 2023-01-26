const isParameterInvalid = param => typeof param === 'undefined' || !param;

export const PUBLIC_API_URL = "https://jsonplaceholder.typicode.com";
export const createHttpErrorMessage = (httpStatus) => (`HTTP error occured, status: ${httpStatus}`); 
export const createInvalidParamErrorMessage = (param1, param2="") => 
    (`Error occured, invalid parameter given: ${param1} ${param2}`);

export const fetchListOfPhotos = (page, limit) => {
    if (isParameterInvalid(page) || isParameterInvalid(limit)) {
        throw new Error(createInvalidParamErrorMessage(page, limit));
    }
    return fetch(`${PUBLIC_API_URL}/photos?_page=${page}&_limit=${limit}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(createHttpErrorMessage(response.status));
        } else {
            return response.json();
        }
    });
}

export const fetchListOfAlbums = (page, limit) => {
    if (isParameterInvalid(page) || isParameterInvalid(limit)) {
        throw new Error(createInvalidParamErrorMessage(page, limit));
    }
    return fetch(`${PUBLIC_API_URL}/albums?_page=${page}&_limit=${limit}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(createHttpErrorMessage(response.status));
        } else {
            return response.json();
        }
    });
}

export const fetchUserInfo = (userId) => {
    if (isParameterInvalid(userId)) {
        throw new Error(createInvalidParamErrorMessage(userId));
    }
    return fetch(`${PUBLIC_API_URL}/users`)
    .then(response => {
        if (!response.ok) {
            throw new Error(createHttpErrorMessage(response.status));
        } else {
            return response.json();
        }
    });
}
