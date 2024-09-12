"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchStrapi = void 0;
const toURLSearchParams_1 = require("./lib/toURLSearchParams");
const { STRAPI_ENDPOINT } = process.env;
async function fetchStrapi(path, { init, next, query } = {}) {
    const queryString = (0, toURLSearchParams_1.toURLSearchParams)(query);
    const requestInit = {
        ...init,
        next,
    };
    const response = await fetch(`${STRAPI_ENDPOINT}/api${path}?${queryString}`, requestInit);
    return (await response.json());
}
exports.fetchStrapi = fetchStrapi;
