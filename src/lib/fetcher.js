import * as React from "react";
import environment from '../environments/environment';

const fetcher = async (route, options = {}) => {

    const url = `${environment.baseUrl}/${route}`;
    const method = options.method || 'get';

    if (method === 'get' || method === 'GET') {
        Object.keys(options).forEach(key => url.searchParams.append(key, options[key]));
    }

    console.log(`${environment.baseUrl}/${route}`)

    const response = await fetch(url, {
        headers: {
            //'Authorization': `Bearer ${Cookies.get('access_token')}`,
            'Content-Type': 'application/json; charset=utf-8',
        },
        ...options
    });

    return response.json();

};

export default fetcher;
