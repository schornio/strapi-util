"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toURLSearchParams = void 0;
function toURLSearchParamArray(obj) {
    const query = [];
    if (!obj) {
        return query;
    }
    for (const [keyRaw, value] of Object.entries(obj)) {
        const key = encodeURIComponent(keyRaw);
        switch (typeof value) {
            case 'boolean':
            case 'number':
            case 'string':
                query.push({
                    keyPath: [key],
                    value: encodeURIComponent(value.toString()),
                });
                break;
            case 'object': {
                if (value === null) {
                    query.push({ keyPath: [key], value: 'null' });
                }
                else if (Array.isArray(value)) {
                    for (const item of value) {
                        query.push({
                            keyPath: [key, ''],
                            value: encodeURIComponent(item.toString()),
                        });
                    }
                }
                else {
                    const nestedProperties = toURLSearchParamArray(value).map((nested) => ({
                        keyPath: [key, ...nested.keyPath],
                        value: nested.value,
                    }));
                    query.push(...nestedProperties);
                }
            }
        }
    }
    return query;
}
function toURLSearchParams(obj) {
    let queryParts = [];
    for (const { keyPath: [rootKey, ...keyPath], value, } of toURLSearchParamArray(obj)) {
        queryParts.push(`${rootKey}${keyPath.map((key) => `[${key}]`).join()}=${value}`);
    }
    return queryParts.join('&');
}
exports.toURLSearchParams = toURLSearchParams;
