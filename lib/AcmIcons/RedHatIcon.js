"use strict";
/* Copyright Contributors to the Open Cluster Management project */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedHatIcon = void 0;
var react_1 = __importStar(require("react"));
var createAcmIcon_1 = require("./createAcmIcon");
exports.RedHatIcon = createAcmIcon_1.createAcmIcon({
    xOffset: 0,
    yOffset: -7,
    width: 54,
    height: 54,
    svgPaths: (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement("path", { d: "M44.466 17.253c.068.312.097.63.087.95 0 4.133-5.094 4.853-8.61 4.853-13.682 0-23.889-8.4-23.889-10.962a1.68 1.68 0 01.062-.538l-1.032 2.516a5.07 5.07 0 00-.425 2.04c0 5.03 11.532 12.632 24.677 12.632 5.822 0 10.246-2.155 10.246-6.047 0-.3 0-.539-.484-2.814l-.632-2.63z", fill: "#000" }),
        react_1.default.createElement("path", { d: "M35.944 23.056c3.515 0 8.609-.717 8.609-4.85a3.842 3.842 0 00-.087-.95l-2.096-8.99c-.486-1.977-.908-2.874-4.427-4.61C35.215 2.275 29.273 0 27.515 0c-1.64 0-2.12 2.094-4.062 2.094-1.878 0-3.273-1.555-5.031-1.555-1.688 0-2.79 1.136-3.64 3.472 0 0-2.362 6.589-2.666 7.545a1.68 1.68 0 00-.062.538c0 2.562 10.207 10.962 23.89 10.962m9.154-3.173c.484 2.275.484 2.514.484 2.814 0 3.89-4.424 6.047-10.246 6.047C22.18 28.742 10.66 21.14 10.66 16.111c0-.7.144-1.393.425-2.036-4.728.236-10.85 1.075-10.85 6.403C.233 29.222 21.208 40 37.821 40c12.733 0 15.945-5.689 15.945-10.18 0-3.534-3.094-7.545-8.669-9.94", fill: "#E00" }))),
});
exports.default = exports.RedHatIcon;
//# sourceMappingURL=RedHatIcon.js.map