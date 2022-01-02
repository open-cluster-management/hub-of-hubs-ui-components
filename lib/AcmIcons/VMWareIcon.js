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
exports.VMWareIcon = void 0;
var react_1 = __importStar(require("react"));
var createAcmIcon_1 = require("./createAcmIcon");
exports.VMWareIcon = createAcmIcon_1.createAcmIcon({
    xOffset: 0,
    yOffset: 0,
    width: 384,
    height: 384,
    svgPaths: (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement("defs", null,
            react_1.default.createElement("linearGradient", { id: "a", x1: "0.2", y1: "0.2", x2: "0.8", y2: "0.8" },
                react_1.default.createElement("stop", { offset: "0", stopColor: "#9bca53ff" }),
                react_1.default.createElement("stop", { offset: "1", stopColor: "#6d9e3cff" }))),
        react_1.default.createElement("path", { fill: "url(#a)", d: "M0 144.001C0 117.491 21.49 96 48.001 96h191.998A48.001 48.001 0 01288 144.001v191.998C288 362.51 266.51 384 239.999 384H48.001C21.491 384 0 362.51 0 336z" }),
        react_1.default.createElement("path", { fill: "url(#a)", d: "M96 48.001C96 21.491 117.49 0 144.001 0h191.998A48.001 48.001 0 01384 48.001v191.998c0 26.51-21.49 48.001-48 48.001H144c-26.509 0-48-21.49-48-48.001z" }),
        react_1.default.createElement("path", { fill: "#fff", d: "M48 176c0-17.673 14.327-32 32-32h128a32 32 0 0132 32v128c0 17.673-14.327 32-32 32H80c-17.673 0-32-14.327-32-32z" }),
        react_1.default.createElement("path", { fill: "#fff", d: "M144 80c0-17.673 14.327-32 32-32h128a32 32 0 0132 32v128c0 17.673-14.327 32-32 32H176c-17.673 0-32-14.327-32-32z" }),
        react_1.default.createElement("defs", null,
            react_1.default.createElement("linearGradient", { id: "b", x1: "0.25", y1: "0.25", x2: "0.75", y2: "0.75" },
                react_1.default.createElement("stop", { offset: "0", stopColor: "#ffe599" }),
                react_1.default.createElement("stop", { offset: "1", stopColor: "#f1c232" }))),
        react_1.default.createElement("path", { fill: "url(#b)", d: "M184 106.667C184 96.357 192.358 88 202.667 88h74.666A18.667 18.667 0 01296 106.667v74.666c0 10.31-8.358 18.667-18.667 18.667h-74.666c-10.31 0-18.667-8.358-18.667-18.667z" }),
        react_1.default.createElement("path", { fill: "url(#b)", d: "M88 202.667C88 192.357 96.358 184 106.667 184h74.666A18.667 18.667 0 01200 202.667v74.666c0 10.31-8.358 18.667-18.667 18.667h-74.666C96.357 296 88 287.642 88 277.333z" }))),
});
exports.default = exports.VMWareIcon;
//# sourceMappingURL=VMWareIcon.js.map