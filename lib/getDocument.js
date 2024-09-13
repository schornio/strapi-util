"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDocument = void 0;
function getDocument(result) {
    if (!result || !result.data || 'error' in result.data) {
        return null;
    }
    return result.data;
}
exports.getDocument = getDocument;
