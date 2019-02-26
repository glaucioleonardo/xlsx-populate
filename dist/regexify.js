"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// https://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex#6969486
function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}
/**
 * Convert a pattern to a RegExp.
 * @param pattern - The pattern to convert.
 * @returns The regex.
 */
function regexify(pattern) {
    if (typeof pattern === 'string') {
        pattern = new RegExp(escapeRegExp(pattern), 'igm');
    }
    pattern.lastIndex = 0;
    return pattern;
}
exports.regexify = regexify;
//# sourceMappingURL=regexify.js.map