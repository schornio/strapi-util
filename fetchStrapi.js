"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchStrapi = void 0;
const qs_1 = require("qs");
const { STRAPI_ENDPOINT } = process.env;
async function fetchStrapi(path, { init, next, query } = {}) {
    const queryString = (0, qs_1.stringify)(query);
    const requestInit = {
        ...init,
        next,
    };
    const response = await fetch(`${STRAPI_ENDPOINT}/api${path}?${queryString}`, requestInit);
    return (await response.json());
}
exports.fetchStrapi = fetchStrapi;
