"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keyFromComponent = void 0;
function keyFromComponent({ __component, id, }) {
    return `${__component}.${id}`;
}
exports.keyFromComponent = keyFromComponent;
